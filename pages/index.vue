<script setup>
import EvaluateEditor from "~/components/EvaluateEditor.vue";

const {t} = useI18n();
// Page meta
useHead({
    title: t("Essay Assessment")
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
const highlight = ref(null);

// Composable
const message = useMessage();
const loadingBar = useLoadingBar();

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
        isEditing.value = false;
    } catch (error) {
        message.error(error);
    } finally {
        loadingBar.finish();
        showSpin.value = false;
    }
};
</script>

<template>
    <NSpin :show="showSpin">
        <div class="max-w-3xl mx-auto border-x min-h-[calc(100vh-130px)]">
            <div class="border-b p-4">
                <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                    {{ $t("Instruction") }}
                    <NTooltip trigger="hover">
                        <template #trigger>
                            <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                        </template>
                        {{ $t("Enter your writing instruction here to make the evaluation process easier") }}
                    </NTooltip>
                </label>
                <NInput
                    v-model:value="evaluateStore.instruction"
                    :theme-overrides="inputThemeOverrides"
                    :placeholder="t('Enter your writing instruction here')"
                    type="textarea"
                    :autosize="{
                            minRows: 3,
                            maxRows: 5
                        }"
                />
            </div>
            <div class="p-4">
                <label class="mb-4 flex items-center justify-between gap-1 text-lg font-semibold">
                    {{ $t("Submission") }}
                    <NTooltip trigger="hover">
                        <template #trigger>
                            <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                        </template>
                        {{ $t("Enter your submission here to evaluate") }}
                    </NTooltip>
                </label>

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
    </NSpin>
</template>

<style scoped lang="scss">
:deep(.n-input-wrapper) {
    @apply px-0;
}
</style>
