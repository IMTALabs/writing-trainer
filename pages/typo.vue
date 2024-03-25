<script setup>

import {diffChars, diffWords} from "diff";

const showSpin = ref(false);
const isEditing = ref(true);
const highlight = ref(null);

const loadingBar = useLoadingBar();
const message = useMessage();

const diff = ref([]);
const handleSubmit = async (content) => {
    console.log(content);

    loadingBar.start();
    showSpin.value = true;
    try {
        const response = await $fetch("http://35.196.248.69:8800/fix_typos", {
            method: "POST",
            body: {
                id: String(Date.now() * Math.random()),
                "instruction": "Fix typo",
                "submission": content,
                "keys": []
            },
            retry: 2
        });
        console.log(response);
        diff.value = response ? generateDiff(response.origin, response.fixed_typos) : [];
        isEditing.value = false;
    } catch (error) {
        message.error(error);
    } finally {
        loadingBar.finish();
        showSpin.value = false;
    }
};

const generateDiff = (origin, fixed) => {
    const diff = diffWords(origin, fixed);
    return diff.map(part => ({
        value: part.value,
        removed: part.removed,
        color: part.added ? "green" : part.removed ? "red" : ""

    }));
}
</script>

<template>
    <NSpin :show="showSpin">
        <div class="h-full">
            <div class="max-w-3xl mx-auto border-x min-h-full">
                <div class="p-4">
                    <label class="text-sm font-semibold flex items-center justify-between gap-1">
                        Evaluate
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </n-tooltip>
                    </label>
                    <div class="p-4 ">
                        <TypoEditor v-if="isEditing" @submit="handleSubmit"/>
                        <div v-else class="">
                            <div class="text-right">
                                <NButton color="#000000" size="small" @click="isEditing = true">
                                    Back to typo
                                </NButton>
                            </div>
                            <div class="mt-4">
                                <span v-for="(part, index) in diff" :key="index"
                                      :style="{ color: part.color , 'text-decoration': part.removed ? 'line-through' : 'none'  }">{{
                                        part.value
                                    }}</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </NSpin>
</template>

<style scoped>

</style>
