export const useEvaluateStore = defineStore("evaluate", {
    state: () => ({
        instruction: "",
        submission: "",
        highlight: "",
        badParts: []
    }),
    actions: {
        setInstruction(instruction) {
            this.instruction = instruction;
        },
        setSubmission(submission) {
            this.submission = submission;
        },
        setHighlight(highlight) {
            this.highlight = highlight;
        },
        setBadParts(badParts) {
            this.badParts = badParts;
        }
    }
});
