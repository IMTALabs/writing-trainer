<script setup>
import { marked } from "marked";

// Page meta
definePageMeta({
    title: "Vocab Trainer",
    middleware: "auth"
});

// Stores
// ...

// Composable
const user = useSupabaseUser();

// Props
//...

// Data
const isLoadingQuestion = ref(true);
const streak = ref(0);
const question = ref(null);
const choices = ref([]);
const isFinished = ref(false);
const questionRef = ref(null);

// Computed
// ...

// Event
// ...

// Methods
const fetchQuestion = async () => {
    isLoadingQuestion.value = true;
    try {
        question.value = await $fetch("https://run.mocky.io/v3/1dda3782-4d06-4d21-91e2-cdf16c626891");
        question.value.question = marked(question.value.question);
    } catch (e) {
        question.value = null;
    }
    isLoadingQuestion.value = false;
};

const calColor = (idx) => {
    return {
        colorChecked: choices.value.includes(idx) && question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        borderChecked: !choices.value.includes(idx) ? "1px solid #000000" : question.value.answer.correct_choice === idx ? "1px solid #18A058" : "1px solid #8d0000",
        borderDisabledChecked: !choices.value.includes(idx) ? "1px solid #000000" : question.value.answer.correct_choice === idx ? "1px solid #18A058" : "1px solid #8d0000",
        borderFocus: choices.value.includes(idx) && question.value.answer.correct_choice === idx ? "1px solid #18A058" : "1px solid #8d0000",
        boxShadowFocus: choices.value.includes(idx) && question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        textColor: !choices.value.includes(idx) ? "#000000" : question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        colorDisabled: !choices.value.includes(idx) ? "#fafafc" : question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        colorDisabledChecked: !choices.value.includes(idx) ? "#fafafc" : question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        textColorDisabled: !choices.value.includes(idx) ? "#c2c2c2" : question.value.answer.correct_choice === idx ? "#18A058" : "#8d0000",
        checkMarkColorDisabled: "#ffffff",
        checkMarkColorDisabledChecked: "#ffffff",
        sizeLarge: "24px"
    };
};

const nextQuestion = async () => {
    isFinished.value = false;
    choices.value = [];
    question.value = null;
    await fetchQuestion();
};

// Hooks
onMounted(() => {
    fetchQuestion();
});

// Watchers
watch(choices, (newVal) => {
    if (!newVal.length || isFinished.value) return;
    if (newVal.includes(question.value.answer.correct_choice)) {
        if (newVal.length === 1) {
            streak.value += 1;
        }
        isFinished.value = true;
    } else {
        streak.value = 0;
        questionRef.value.classList.add("vibrate");
        setTimeout(() => {
            questionRef.value.classList.remove("vibrate");
        }, 500);
    }
});
</script>

<template>
    <div>
        <div class="flex items-end justify-center p-4 mb-8">
            <img v-if="streak >= 1 && streak <= 3" src="~/assets/images/fire-blue.gif" class="h-6 w-6" alt="">
            <img v-else-if="streak > 3" src="~/assets/images/fire-red.gif" class="h-6 w-6" alt="">
            <div class="">Streak: <span class="font-bold">{{ streak }}</span></div>
            <span> - {{ user?.user_metadata.full_name }}</span>
        </div>

        <div class="flex justify-center items-center">
            <NSpin :show="isLoadingQuestion">
                <Transition name="page" mode="out-in">
                    <div v-if="question === null">
                        <NEmpty description="Loading question, if it takes too long, please refresh the page"/>
                    </div>
                    <div v-else class="p-6 border rounded-lg shadow-xl max-w-xl mx-auto min-h-20" ref="questionRef">
                        <Transition name="page">
                            <NAlert v-if="isFinished" title="Explain" type="success" class="mb-8 leading-5">
                                {{ question.answer.explain }}
                            </NAlert>
                        </Transition>
                        <div v-html="question.question" class="leading-6 text-base space-y-2"></div>
                        <NCheckboxGroup v-model:value="choices">
                            <div class="flex flex-col gap-4 mt-8">
                                <NCheckbox size="large" v-for="(choice, idx) in question.choices" :value="idx"
                                           :key="idx" class="flex items-center"
                                           :theme-overrides="calColor(idx)"
                                           :disabled="isFinished || (choices.includes(idx) && idx !== question.answer.correct_choice)">
                                    <span v-html="marked(choice)" class="text-base"></span>
                                </NCheckbox>
                            </div>
                        </NCheckboxGroup>
                    </div>
                </Transition>
            </NSpin>
            <Transition name="page" mode="out-in">
                <div class="flex flex-col ml-12" v-if="isFinished">
                    <h1 class="text-3xl">{{ question.answer.dictionary?.word ?? "Vocabu" }}</h1>

                    <NButton class="mt-4" color="#000000" @click="nextQuestion">
                        {{ $t("Next") }}
                    </NButton>
                </div>
            </Transition>
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
</style>
