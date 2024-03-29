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
        const needleErrorEl = document.getElementById(needleId);
        if (needleErrorEl) {
            setTimeout(() => {
                const childRect = needleErrorEl.getBoundingClientRect();
                const parentRect = errorScroll.value.getBoundingClientRect();
                errorScroll.value.scroll({
                    top: needleId === "error-0" ? 0 : (childRect.top - parentRect.top + errorScroll.value.scrollTop),
                    behavior: "smooth"
                });
            }, 500);
        }
    }
});
</script>

<template>
    <NSpin :show="showSpin">
        <div class="flex">
            <div class="border-r h-[calc(100vh-130px)] grow overflow-y-auto">
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
            </div>
            <div class="w-1/3 max-w-xl h-[calc(100vh-130px)] shrink-0 p-4 overflow-y-auto" ref="errorScroll">
                <NEmpty v-if="evaluateStore.badParts.length < 1"
                        :description="$t('Enter your instruction and submission to evaluate')"></NEmpty>
                <div v-else>
                    <NCollapse :expanded-names="evaluateStore.highlighting" @item-header-click="headerClick">
                        <NCollapseItem v-for="(part, idx) in evaluateStore.badParts" :name="`error-${idx}`"
                                       :id="`error-${idx}`">
                            <template #arrow>
                                <NaiveIcon name="material-symbols:arrow-forward-ios-rounded" :size="14"/>
                            </template>

                            <template #header>
                                {{ part.details[0].type === "word" ? $t("Word error") : $t("Sentence error") }}
                            </template>

                            <template #header-extra>
                                # {{ part.id }}
                            </template>

                            <div class="w-fit border bg-gray-50 px-2 leading-6 py-0.5">"{{ part.text }}"</div>

                            <div class="my-2 flex flex-col border-b py-2 leading-6 last:mb-0 last:border-0 last:pb-0"
                                 v-for="detail in part.details">
                                <div class="mb-2 flex gap-1">
                                    <div v-for="i in detail.serious_level" class="h-2 w-4 rounded-sm"
                                         :class="detail.serious_level >= 3 ? 'bg-red-500' : 'bg-yellow-500'"></div>
                                </div>
                                <span><strong>Issue: </strong>{{ detail.issue }}</span>
                                <span><strong>Idea: </strong>{{ detail.idea }}</span>
                            </div>
                        </NCollapseItem>
                    </NCollapse>
                </div>
            </div>
        </div>
    </NSpin>
</template>

<style scoped lang="scss">
:deep(.n-input-wrapper) {
    @apply px-0;
}
</style>
