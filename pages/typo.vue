<script setup>

import {diffChars, diffWords} from "diff";

const showSpin = ref(false);
const isEditing = ref(true);
const highlight = ref(null);

const loadingBar = useLoadingBar();
const message = useMessage();

const diff = ref([]);

const fixedTypos = ref("");
const origin = ref("");

const typoFixed = ref("");
const handleSubmit = async (content) => {
    loadingBar.start();
    showSpin.value = true;
    try {
        const response = await $fetch("https://8800.imta-chatbot.online/fix_typos", {
            method: "POST",
            body: {
                id: String(Date.now() * Math.random()),
                "instruction": "Fix typo",
                "submission": content,
                "keys": []
            },
            retry: 2
        });
        fixedTypos.value = response.fixed_typos;
        origin.value = response.origin;
        diff.value = response ? generateDiff(response.origin, response.fixed_typos) : [];
        typoFixed.value = diff.value.map((item) => {
            if (item.added) {
                return `<span class="text-green-500 bg-green-50 px-1">${item.value}</span>`;
            }
            if (item.removed) {
                return `<span class="text-red-500 bg-red-50 line-through px-1">${item.value}</span>`;
            }
            return item.value;
        }).join("");
        console.log(typoFixed.value);
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
        added: part.added
    }));
};
</script>

<template>
    <NSpin :show="showSpin">
        <div class="h-full">
            <div class="max-w-3xl mx-auto border-x min-h-full">
                <div class="p-4" v-if="isEditing">
                    <label class="text-lg font-semibold flex items-center justify-between gap-1">
                        Fix typo
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                            </template>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </n-tooltip>
                    </label>
                    <div class="mt-4">
                        <TypoEditor @submit="handleSubmit"/>
                    </div>
                </div>
                <div v-else class="p-4">
                    <div class="border-b border-solid pb-4">
                        <label class="text-lg font-semibold flex items-center justify-between gap-1">
                            Compare
                            <NButton color="#000000" size="small" @click="isEditing = true" ghost>
                                Back to typo
                            </NButton>
                        </label>
                        <div class="mt-4 text-base leading-7" v-html="typoFixed"></div>
                    </div>
                    <div class="border-b border-solid py-4">
                        <label class="text-lg font-semibold flex items-center justify-between gap-1">
                            Fixed
                        </label>
                        <div class="mt-4 text-base leading-7" v-html="fixedTypos"></div>
                    </div>
                    <div class="border-b border-solid py-4">
                        <label class="text-lg font-semibold flex items-center justify-between gap-1">
                            Your submission
                        </label>
                        <div class="mt-4 text-base leading-7" v-html="origin"></div>
                    </div>
                </div>
            </div>
        </div>
    </NSpin>
</template>

<style scoped>

</style>
