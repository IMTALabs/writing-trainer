<script setup>
import EvaluateEditor from "~/components/EvaluateEditor.vue";

useHead({
    title: "Homepage"
});

const model = ref({
    instruction: `Just like the government spends funds on music and theatre, it does the same on arts too which is considered a waste of money. Don’t you think that the government should spend more on revamping public services? Do you agree? If not, then why?`
});

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

const handleSubmit = async (content) => {
    if (!model.value.instruction) {
        message.error("Instruction is required");
        return;
    }

    loadingBar.start();
    showSpin.value = true;

    try {
        const response = await $fetch("http://35.196.248.69:8800/generate_errors", {
            method: "POST",
            body: {
                id: String(Date.now() * Math.random()),
                instruction: model.value.instruction,
                submission: content,
                keys: []
            },
            retry: 2
        });
        highlight.value = response.display_errors.highlight;
        isEditing.value = false;
    } catch (error) {
        message.error(error);
    } finally {
        loadingBar.finish();
        showSpin.value = false;
    }
};

// const html = ref("<p>Nowadays, people contend that a large portion of government funding for performing arts, <span class=\"error_word\" data-error=\"1\">namely</span> music and theater, <span class=\"error_word\" data-error=\"10\">is <span class=\"error_word\" data-error=\"0\"><span class=\"error_word\" data-error=\"3\">akin</span> to</span> spending on the arts</span> when it should instead be <span class=\"error_word\" data-error=\"4\">applied</span> to improving the services provided to people.</p><p></p><p>However, I believe that art should be regarded as a fundamental component of society because it allows artists to express their creative side <span class=\"error_word\" data-error=\"2\">while also</span> preserving the culture and history of the country.</p>");
</script>

<template>
    <NSpin :show="showSpin">
        <div class="px-4">
            <div class="max-w-3xl mx-auto border-x min-h-[calc(100vh-130px)]">
                <div class="border-b p-4">
                    <label class="text-sm font-semibold flex items-center justify-between gap-1">
                        Instruction
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </n-tooltip>
                    </label>
                    <n-input
                        v-model:value="model.instruction"
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
                    <label class="text-sm font-semibold flex items-center justify-between gap-1 mb-4">
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
                        <HighlightParagraph v-for="paragraph in highlight.match(/<p(.*?)<\/p>/g)" :paragraph="paragraph"/>
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
