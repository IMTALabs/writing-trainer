<script setup>
import { marked } from "marked";
import { useVocabStore } from "~/stores/vocab.js";

// Page meta
definePageMeta({
    title: "Vocab Trainer"
    // middleware: "auth"
});

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap"
        }
    ]
});

defineOgImageComponent("Frame", {
    colorMode: "dark",
    title: "Vocab Trainer",
    description: "Vocab Trainer is a tool to help you learn new words and improve your vocabulary.",
    theme: "#056f37"
});

// Stores
const vocabStore = useVocabStore();

// Composable
const config = useRuntimeConfig();
const message = useMessage();

// Props
//...

// Data
const isLoadingQuestion = ref(true);
const choices = ref([]);
const questionRef = ref(null);
const timer = ref(0);
const questionTime = ref(0);

// Computed
// ...

// Event
// ...

// Methods
const fetchQuestion = async () => {
    isLoadingQuestion.value = true;
    try {
        const response = await $fetch(`${ config.public.api.baseUrl }/gen_vocab_quizz`, {
            method: "POST",
            body: {
                category: "ielts",
                num_quizz: 1,
                type_: "MCQ_T",
                user_id: window?.localStorage?.getItem("serverId") ?? String(Math.floor(Math.random() * 90000000) + 10000000)
            },
            retry: 3
        });
        const data = response[0];
        const wordRegex = new RegExp(`('${data.answer.dictionary[0].word}')`, "g");
        data.question = marked(data.question.replace(wordRegex, "<b class='text-emerald-700'>$1</b>"));
        data.answer.correct_choice = Number(data.answer.correct_choice);
        data.isFinished = false;
        data.choosen = [];
        data.timer = 0;
        vocabStore.addQuestion(data);
        timer.value = setInterval(() => {
            questionTime.value++;
        }, 1000);
    } catch (e) {
        message.error("Failed to fetch question! Refresh the page to try again.");
    }
};

const calColor = (idx) => {
    return {
        colorChecked: choices.value.includes(idx) && vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        borderChecked: !choices.value.includes(idx) ? "2px solid #000000" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "2px solid #18A058" : "2px solid #8d0000",
        border: "2px solid #056f37",
        borderDisabledChecked: !choices.value.includes(idx) ? "2px solid #000000" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "2px solid #18A058" : "2px solid #8d0000",
        borderFocus: !choices.value.includes(idx) ? "2px solid #056f37" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "2px solid #18A058" : "2px solid #8d0000",
        boxShadowFocus: choices.value.includes(idx) && vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        textColor: !choices.value.includes(idx) ? "#000000" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        colorDisabled: !choices.value.includes(idx) ? "#fafafc" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        colorDisabledChecked: !choices.value.includes(idx) ? "#fafafc" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        textColorDisabled: !choices.value.includes(idx) ? "#c2c2c2" : vocabStore.currentQuestionData.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        checkMarkColorDisabled: "#ffffff",
        checkMarkColorDisabledChecked: "#ffffff",
        sizeLarge: "24px"
    };
};

const nextQuestion = async () => {
    isLoadingQuestion.value = true;
    if (vocabStore.isLastQuestion) {
        await fetchQuestion();
        choices.value = [];
    }
    setTimeout(() => {
        vocabStore.nextQuestion();
        choices.value = vocabStore.currentQuestionData.choosen;
        isLoadingQuestion.value = false;
    }, 500);
};

const goToQuestion = (idx) => {
    if (vocabStore.currentQuestion === idx) return;
    isLoadingQuestion.value = true;
    setTimeout(() => {
        vocabStore.goToQuestion(idx);
        choices.value = vocabStore.currentQuestionData.choosen;
        isLoadingQuestion.value = false;
    }, 500);
};

// Hooks
onMounted(async () => {
    if (vocabStore.questions.length < 1) {
        await fetchQuestion();
    }
    isLoadingQuestion.value = false;
});

// Watchers
watch(choices, (newVal) => {
    if (!newVal.length || vocabStore.currentQuestionData?.isFinished || newVal === vocabStore.currentQuestionData.choosen) return;
    if (newVal.includes(vocabStore.currentQuestionData.answer.correct_choice)) {
        if (newVal.length === 1) {
            vocabStore.incrementStreak();
        }
        vocabStore.currentQuestionData.isFinished = true;
        clearInterval(timer.value);
        vocabStore.currentQuestionData.timer = questionTime.value;
        questionTime.value = 0;
    } else {
        vocabStore.resetStreak();
        questionRef.value.classList.add("vibrate");
        setTimeout(() => {
            questionRef.value.classList.remove("vibrate");
        }, 500);
    }
    vocabStore.currentQuestionData.choosen = newVal;
});
</script>

<template>
    <div class="flex w-full gap-4 px-4">
        <div class="h-[calc(100vh-111px)] flex py-4">
            <div class="rounded-full border bg-white py-2 shadow-sm min-w-[52px] flex items-center">
                <NScrollbar>
                    <div class="flex flex-col items-center gap-3">
                        <NButton strong circle v-for="(_, idx) in vocabStore.questions" :key="idx"
                                 :color="vocabStore.currentQuestion === idx ? '#059669' : ''"
                                 @click="goToQuestion(idx)">
                            {{ idx + 1 }}
                        </NButton>
                    </div>
                </NScrollbar>
            </div>
        </div>

        <div class="container mx-auto grow px-4 pt-4">
            <div class="h-16 mb-4 flex items-center justify-between">
                <div class="flex items-center gap-1">
                    <NaiveIcon name="ph:archive-duotone"/>
                    Category: <b class="text">IELTS</b>
                </div>
                <NButton color="#059669" @click="nextQuestion"
                         v-if="!isLoadingQuestion && vocabStore.currentQuestionData?.isFinished">
                    Next question
                </NButton>
                <div class="flex items-end border shadow bg-white rounded"
                     :class="vocabStore.streak ? 'pl-2 pr-3 pt-0.5 pb-1' : 'px-2 py-1'">
                    <img v-if="vocabStore.streak >= 1 && vocabStore.streak <= 3" src="~/assets/images/fire-blue.gif"
                         class="h-6 w-6" alt="">
                    <img v-else-if="vocabStore.streak > 3" src="~/assets/images/fire-red.gif" class="h-6 w-6" alt="">
                    <div class="">Streak: <span class="font-bold font-noto-mono">{{ vocabStore.streak }}</span></div>
                </div>
            </div>

            <NSpin
                :show="isLoadingQuestion || !vocabStore.currentQuestionData">
                <Transition name="page" mode="out-in">
                    <div v-if="isLoadingQuestion">
                        <NEmpty description="Loading question, if it takes too long, please refresh the page"/>
                    </div>
                    <div v-else class="flex items-start justify-center">
                        <div
                            class="grow shrink-0 max-w-xl rounded-lg border bg-white p-6 shadow-xl min-h-20 bg-no-repeat bg-right-top"
                            :class="vocabStore.currentQuestionData?.isFinished ? 'shadow-2xl' : ''"
                            ref="questionRef">
                            <Transition name="page">
                                <NAlert v-if="vocabStore.currentQuestionData?.isFinished" type="success"
                                        class="mb-8 leading-5" :show-icon="false">
                                    {{ vocabStore.currentQuestionData.answer.short_explain }}
                                </NAlert>
                            </Transition>
                            <div v-html="vocabStore.currentQuestionData.question"
                                 class="text-lg leading-6 space-y-2"></div>
                            <NCheckboxGroup v-model:value="choices">
                                <div class="mt-8 flex flex-col gap-5">
                                    <NCheckbox size="large"
                                               v-for="(choice, idx) in vocabStore.currentQuestionData.choices"
                                               :value="idx"
                                               :key="idx" class="flex items-center gap-2"
                                               :theme-overrides="calColor(idx)"
                                               :disabled="vocabStore.currentQuestionData?.isFinished || (choices.includes(idx) && idx !== vocabStore.currentQuestionData.answer.correct_choice)">
                                        <span v-html="marked(choice)" class="text-base"></span>
                                    </NCheckbox>
                                </div>
                            </NCheckboxGroup>
                            <div
                                class="mt-4 flex w-fit cursor-pointer items-center gap-1 text-xs italic text-gray-300">
                                <NaiveIcon name="ph:flag-banner-duotone" :size="14"/>
                                Report this question
                            </div>
                        </div>
                        <Transition name="page" mode="out-in">
                            <div class="ml-12 flex flex-col max-w-sm"
                                 v-if="!isLoadingQuestion && vocabStore.currentQuestionData?.isFinished">
                                <div class="flex items-center gap-4">
                                    <div class="flex flex-col items-center gap-2 rounded-lg border p-2 shadow-sm">
                                        <span class="text-gray-500">{{
                                                secondsToMMSS(vocabStore.currentQuestionData.timer)
                                            }}</span>
                                        <div class="flex items-center text-base font-semibold gap-0.5">
                                            <NaiveIcon name="ph:align-bottom-duotone" class="text-red-500"/>
                                            12%
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <h1 class="text-3xl font-bold">
                                            {{
                                                vocabStore.currentQuestionData.answer.dictionary[0]?.word ?? "..."
                                            }}
                                        </h1>
                                        <span class="text-gray-500">
                                            {{ vocabStore.currentQuestionData.answer.dictionary[0].phonetic }}
                                        </span>
                                    </div>
                                </div>
                                <p class="mt-4 text-justify text-base leading-6 text-gray-700">
                                    {{ vocabStore.currentQuestionData.answer.long_explain }}
                                </p>
                                <div
                                    v-if="vocabStore.currentQuestionData.answer.dictionary[0].meanings.length > 0"
                                    class="pb-8">
                                    <hr class="mt-4">
                                    <NTabs type="segment" animated class="mt-4">
                                        <NTabPane
                                            v-for="meaning in vocabStore.currentQuestionData.answer.dictionary[0].meanings"
                                            :name="meaning.partOfSpeech" :tab="meaning.partOfSpeech.toUpperCase()">
                                            <ul class="list-disc pl-4 leading-5 space-y-2">
                                                <li v-for="def in meaning.definitions.slice(0, 4)">
                                                    {{ def.definition }}
                                                </li>
                                            </ul>
                                        </NTabPane>
                                    </NTabs>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </Transition>
            </NSpin>
        </div>
    </div>
</template>

<style scoped>
.vibrate {
    animation: vibrate 0.5s linear both;
}

@keyframes vibrate {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-5px, 5px);
    }
    40% {
        transform: translate(-5px, -5px);
    }
    60% {
        transform: translate(5px, 5px);
    }
    80% {
        transform: translate(5px, -5px);
    }
    100% {
        transform: translate(0);
    }
}

:deep(.n-tabs-rail) {
    @apply shadow;
}
</style>
