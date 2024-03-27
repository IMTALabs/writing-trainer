<script setup>
import { useTypoStore } from "~/stores/typo.js";
import { diffChars, diffWords } from "diff";

const showSpin = ref(false);
const isEditing = ref(true);
const highlight = ref(null);

const loadingBar = useLoadingBar();
const message = useMessage();

const diff = ref([]);

const fixedTypos = ref("");
const origin = ref("");

const typoFixed = ref("");

const editorRef = ref(null);
const handleSubmit = async () => {
    if (!editorRef.value.getContent() || editorRef.value.getContent() === "<p></p>") {
        message.error("Submission is required");
        return;
    }

    loadingBar.start();
    showSpin.value = true;
    try {
        const response = await $fetch("https://8800.imta-chatbot.online/fix_typos", {
            method: "POST",
            body: {
                id: String(Date.now() * Math.random()),
                "instruction": "Fix typo",
                "submission": editorRef.value.getContent(),
                "keys": []
            },
            retry: 2
        });
        fixedTypos.value = response.fixed_typos;
        diff.value = response ? generateDiff(response.origin, response.fixed_typos) : [];
        typoFixed.value = diff.value.map((item) => {
            if (item.added) {
                return `<span class="bg-green-50 px-1 text-green-500">${ item.value }</span>`;
            }
            if (item.removed) {
                return `<span class="bg-red-50 px-1 text-red-500 line-through">${ item.value }</span>`;
            }
            return item.value;
        }).join("");
        origin.value = diff.value.map((item) => {
            if (item.added) {
                return ``;
            }
            if (item.removed) {
                return `<span class="bg-red-50 text-red-500">${ item.value }</span>`;
            }
            return item.value;
        }).join("");
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
        <div class="mx-auto max-w-3xl border-x min-h-[calc(100vh-130px)]">
            <div v-if="isEditing" class="p-4">
                <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                    Grammar Checker
                    <NButton class="px-[20px]" color="#000000" @click="handleSubmit">
                        Check
                    </NButton>
                </label>
                <div class="mt-4">
                    <TypoEditor ref="editorRef"/>
                </div>
            </div>
            <div v-else class="">
                <div class="border-b border-solid p-4">
                    <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                        Compare
                        <NButton color="#000000" size="small" @click="isEditing = true" ghost>
                            Back to typo
                        </NButton>
                    </label>
                    <div class="mt-4 text-base leading-7" v-html="typoFixed"></div>
                </div>
                <div class="border-b border-solid p-4">
                    <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                        Fixed
                    </label>
                    <div class="mt-4 text-base leading-7" v-html="fixedTypos"></div>
                </div>
                <div class="p-4">
                    <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                        Your submission
                    </label>
                    <div class="mt-4 text-base leading-7" v-html="origin"></div>
                </div>
            </div>
        </div>
    </NSpin>
</template>

<style scoped>

</style>
