<script setup>
import EvaluateEditor from "~/components/EvaluateEditor.vue";

// Composable
const message = useMessage();
const loadingBar = useLoadingBar();
const { t } = useI18n();

// Page meta
definePageMeta({
    title: "Essay Assessment"
});

defineOgImageComponent("NuxtSeo", {
    title: t("Essay Assessment"),
    description: t("Evaluate your essay with ease"),
    theme: "#ff0000",
    colorMode: "dark"
});

// Theme overrides
const inputThemeOverrides = {
    border: "none",
    borderHover: "none",
    borderFocus: "none",
    boxShadowFocus: "none",
    textColor: "#000000"
};

// Store
const evaluateStore = useEvaluateStore();

// Data
const showSpin = ref(false);
const isEditing = ref(true);
const errorScroll = ref(null);

// Methods
const handleSubmit = async () => {
    if (!evaluateStore.instruction) {
        message.error(t("Instruction is required"));
        return;
    }

    if (!evaluateStore.submission) {
        message.error(t("Submission is required"));
        return;
    }

    loadingBar.start();
    showSpin.value = true;

    try {
        message.info(t("Evaluating ..."));

        const response = await $fetch("https://8800.imta-chatbot.online/generate_errors", {
            method: "POST",
            body: {
                id: String(Date.now() * Math.random()),
                instruction: evaluateStore.instruction,
                submission: evaluateStore.submission,
                keys: []
            },
            retry: 2
        });
        evaluateStore.setHighlight(response.display_errors.highlight);
        evaluateStore.setBadParts(response.display_errors.bad_parts);
        if (evaluateStore.badParts.length === 0) {
            message.success(t("No errors found"));
        } else {
            isEditing.value = false;
        }
    } catch (error) {
        message.error(error);
    } finally {
        loadingBar.finish();
        showSpin.value = false;
    }
};

const headerClick = (data) => {
    if (data.expanded) {
        evaluateStore.setHighlighting([data.name]);
    } else {
        evaluateStore.setHighlighting([]);
    }
};

watch(() => evaluateStore.highlighting, () => {
    const needleId = evaluateStore.highlighting[evaluateStore.highlighting.length - 1];
    if (needleId) {
        message.info(t("Focus mode is in progress! Coming soon!"));
    }
});
</script>

<template>
    <NSpin :show="showSpin">
        <div class="flex">
            <NScrollbar class="border-r grow h-[calc(100vh-130px)]">
                <div class="border-b p-4">
                    <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                        {{ $t("Instruction") }}
                        <NTooltip trigger="hover" :style="{ maxWidth: '200px' }">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            {{ $t("Enter your writing instruction here to make the evaluation process easier") }}
                        </NTooltip>
                    </label>
                    <NInput
                        v-model:value="evaluateStore.instruction"
                        :theme-overrides="inputThemeOverrides"
                        :placeholder="$t('Enter your writing instruction here')"
                        type="textarea"
                        :autosize="{
                            minRows: 3,
                            maxRows: 5
                        }"
                    />
                </div>
                <div class="p-4">
                    <div class="mb-4 flex items-center justify-between gap-1 text-lg font-semibold">
                        {{ $t("Submission") }}
                        <NTooltip trigger="hover" :style="{ maxWidth: '200px' }">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            {{ $t("Enter your submission here to evaluate") }}
                        </NTooltip>
                    </div>

                    <EvaluateEditor v-if="isEditing" @submit="handleSubmit"/>
                    <div v-else>
                        <NButton :color="'#000000'" @click="isEditing = true" size="small" ghost class="mb-4">
                            {{ $t("Back to edit") }}
                        </NButton>
                        <HighlightParagraph v-for="paragraph in evaluateStore.highlight.match(/<p(.*?)<\/p>/g)"
                                            :paragraph="paragraph"/>
                    </div>
                </div>
            </NScrollbar>

            <div class="w-1/3 max-w-xl shrink-0 p-4 h-[calc(100vh-130px)] overflow-y-auto" ref="errorScroll">
                <NEmpty v-if="evaluateStore.badParts.length < 1"
                        :description="$t('Enter your instruction and submission to evaluate')"></NEmpty>
                <NScrollbar v-else>
                    <div v-for="(item, index) in evaluateStore.badParts" :key="index"
                         class="mb-4 flex flex-col last:mb-0">
                        <div class="w-full w-fit grow rounded-t border border-b-0 p-2 leading-6">
                            <NTag type="error" size="small">
                                {{ item.details[0].type === "word" ? "Word" : "Sentence" }} error #{{ index }}
                            </NTag>
                            <div class="mt-1">"{{ item.highlight.trim() }}"</div>
                        </div>
                        <div class="flex group" v-for="detail in item.details">
                            <div class="flex w-6 shrink-0 items-center justify-center group-last:rounded-bl text-white"
                                 :class="detail.serious_level >= 3 ? 'bg-red-500' : 'bg-yellow-500'">
                                <NaiveIcon v-if="detail.serious_level >= 3" name="ph:fire-fill" :size="14"/>
                                <NaiveIcon v-else name="fa6-solid:bolt-lightning" :size="14"/>
                            </div>
                            <div
                                class="flex grow flex-col group-last:rounded-br border-t border-r group-last:border-b p-2 leading-6 space-y-2">
                                <div><b>{{ $t("Issue") }}</b>: {{ detail.issue }}</div>
                                <div><b>{{ $t("Idea") }}</b>: {{ detail.idea }}</div>
                            </div>
                        </div>
                    </div>
                </NScrollbar>
            </div>
        </div>
    </NSpin>
</template>

<style scoped lang="scss">
:deep(.n-input-wrapper) {
    @apply px-0;
}
</style>
