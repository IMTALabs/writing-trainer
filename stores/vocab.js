export const useVocabStore = defineStore("vocab", {
    state: () => ({
        questions: [],
        currentQuestion: 0,
        streak: 0
    }),
    getters: {
        currentQuestionData: (state) => state.questions.at(state.currentQuestion),
        isLastQuestion: (state) => state.currentQuestion === state.questions.length - 1
    },
    actions: {
        addQuestion(question) {
            this.questions.push(question);
        },
        nextQuestion() {
            this.currentQuestion += 1;
        },
        goToQuestion(index) {
            this.currentQuestion = index;
        },
        resetQuestions() {
            this.currentQuestion = 0;
        },
        incrementStreak() {
            this.streak += 1;
        },
        resetStreak() {
            this.streak = 0;
        }
    }
});
