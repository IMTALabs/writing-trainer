export const useEvaluateStore = defineStore("evaluate", {
    state: () => ({
        instruction: "",
        submission: "",
        highlight: "",
        badParts: [],
        highlighting: [0],
        score: null
    }),
    actions: {
        setSubmission(submission) {
            this.submission = submission;
        },
        setHighlight(highlight) {
            this.highlight = highlight;
        },
        setBadParts(badParts) {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = this.highlight;

            this.badParts = badParts.map((part) => {
                const element = tempDiv.querySelector(`[data-error="${ part.id }"]`);
                part.text = element.innerText;
                return part;
            });
        },
        setHighlighting(id) {
            this.highlighting = id;
        },
        setScore(score) {
            this.score = score;
        }
    }
});
