<script setup>
import TipTapEditor from "~/components/TipTapEditor.vue";

useHead({
    title: "Homepage"
});

const model = ref({
    instruction: ""
});

const inputThemeOverrides = {
    border: "none",
    borderHover: "none",
    borderFocus: "none",
    boxShadowFocus: "none",
}
</script>

<template>
    <div class="px-4 h-full">
        <div class="max-w-3xl mx-auto border-x min-h-full">
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
                <TipTapEditor/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.n-input-wrapper) {
    @apply px-0;
}
</style>
