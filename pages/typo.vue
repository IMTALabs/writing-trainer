<script setup>
import { useTypoStore } from "~/stores/typo.js";
import { diffChars, diffWords } from "diff";

const {t} = useI18n();

// Page meta
definePageMeta({
    title: "Grammar Checker"
});

defineOgImageComponent("Frame", {
    colorMode: "dark",
    title: "Grammar Checker",
    description: "Grammar Checker is a tool that helps you to check your grammar and spelling mistakes.",
    theme: "#056f37"
});

const typoStore = useTypoStore();

const showSpin = ref(false);
const isEditing = ref(true);
const highlight = ref(null);

const loadingBar = useLoadingBar();
const message = useMessage();
const config = useRuntimeConfig();

const diff = ref([]);

const fixedTypos = ref("");
const origin = ref("");

const typoFixed = ref("");

const editorRef = ref(null);

const handleSubmit = async () => {
    if (!editorRef.value.getContent() || editorRef.value.getContent() === "<p></p>") {
        message.error(t("Submission is required"));
        return;
    }

    loadingBar.start();
    showSpin.value = true;
    try {
        const response = await $fetch(config.public.api.baseUrl + "/fix_typos", {
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
                return ``;
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
        if (typoFixed.value === origin.value) {
            message.success(t("There is nothing in the paragraph that needs editing"));
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

const generateDiff = (origin, fixed) => {
    const diff = diffWords(origin, fixed);
    return diff.map(part => ({
        value: part.value,
        removed: part.removed,
        added: part.added
    }));
};

const backWithResult = (fixedTypos) => {
    isEditing.value = true;
    typoStore.setSubmission(fixedTypos);
};
</script>

<template>
    <NSpin :show="showSpin">
        <div class="mx-auto max-w-5xl min-h-[calc(100vh-111px)]">
            <div v-if="isEditing" class="p-4">
                <div class="flex items-center justify-between gap-1 text-lg font-semibold">
                    {{ $t("Grammar Checker") }}
                    <NButton class="px-[20px]" color="#059669" @click="handleSubmit">
                        {{ $t("Check") }}
                    </NButton>
                </div>
                <div class="mt-4">
                    <TypoEditor ref="editorRef"/>
                </div>
            </div>
            <div v-else>
                <div class="flex border-b border-solid">
                    <div class="w-1/2 border-r border-solid p-4">
                        <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                            {{ $t("Your submission") }}
                        </label>
                        <div class="mt-4 text-base leading-7 bg-white border p-4 shadow rounded" v-html="origin"></div>
                    </div>
                    <div class=" w-1/2 p-4">
                        <label class="flex items-center justify-between gap-1 text-lg font-semibold">
                            {{ $t("Suggestion") }}
                        </label>
                        <div class="mt-4 text-base leading-7 bg-white border p-4 shadow rounded" v-html="typoFixed"></div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex items-center justify-between gap-1 text-lg font-semibold">
                        {{ $t("Final Result") }}
                        <div>
                            <NButton class="mr-4" color="#000000" size="small" @click="backWithResult(fixedTypos)" ghost>
                                {{ $t("Back with fixed result") }}
                            </NButton>
                            <NButton color="#000000" size="small" @click="isEditing = true" ghost>
                                {{ $t("Back to checker") }}
                            </NButton>
                        </div>
                    </div>
                    <div class="mt-4 text-base leading-7 bg-white border p-4 shadow rounded" v-html="fixedTypos"></div>
                </div>

            </div>
        </div>
    </NSpin>
</template>

<style scoped>

</style>
