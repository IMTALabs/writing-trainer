<script setup>
import EvaluateEditor from "~/components/EvaluateEditor.vue";

useHead({
    title: "Homepage"
});

const evaluateStore = useEvaluateStore();

const inputThemeOverrides = {
    border: "none",
    borderHover: "none",
    borderFocus: "none",
    boxShadowFocus: "none"
};

const showSpin = ref(false);
const isEditing = ref(true);
const highlight = ref(null);

const message = useMessage();
const loadingBar = useLoadingBar();

const handleSubmit = async () => {
    if (!evaluateStore.instruction) {
        message.error("Instruction is required");
        return;
    }

    if (!evaluateStore.submission) {
        message.error("Submission is required");
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
        console.log(error);
        message.error(error);
    } finally {
        loadingBar.finish();
        showSpin.value = false;
    }
};
</script>

<template>
    <NSpin :show="showSpin">
        <div class="px-4">
            <div class="max-w-3xl mx-auto border-x min-h-[calc(100vh-130px)]">
                <div class="border-b p-4">
                    <label class="text-lg font-semibold flex items-center justify-between gap-1">
                        Instruction
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </n-tooltip>
                    </label>
                    <n-input
                        v-model:value="evaluateStore.instruction"
                        :theme-overrides="inputThemeOverrides"
                        placeholder="Enter your writing instruction"
                        type="textarea"
                        :autosize="{
                        minRows: 3,
                        maxRows: 5
                    }"
                    />
                </div>
                <div class="p-4">
                    <label class="text-lg font-semibold flex items-center justify-between gap-1 mb-4">
                        Submission
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </n-tooltip>
                    </label>
                    <EvaluateEditor v-if="isEditing" @submit="handleSubmit"/>
                    <div v-else>
                        <HighlightParagraph v-for="paragraph in evaluateStore.highlight.match(/<p(.*?)<\/p>/g)" :paragraph="paragraph"/>
                    </div>
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
