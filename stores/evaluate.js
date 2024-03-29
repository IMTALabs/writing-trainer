export const useEvaluateStore = defineStore("evaluate", {
    state: () => ({
        instruction: "Nowadays people buy a lot of unnecessary manufactured products. What are the effects of this on individuals and society? Is this a positive or negative development?",
        submission: "<p>Nowadays, people contend that a large portion of government funding for performing arts, namely music and theater, is akin to spending on the arts when it should instead be applied to improving the services provided to people. However, I believe that art should be regarded as a fundamental component of society because it allows artists to express their creative side while also preserving the culture and history of the country. First, creative people employ their talents to adorn a straightforward item that can transform a sparse space. Paintings, sculptures, and sketches add attractiveness to the environment, which improves many people’s dispositions and behaviors. They have significantly aided in the restoration of the ancient artwork and forefathers’ history.</p>",
        highlight: "",
        badParts: [],
        highlighting: ["error-0"]
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
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = this.highlight;

            this.badParts = badParts.map((part) => {
                const element = tempDiv.querySelector(`[data-error="${part.id}"]`);
                part.text = element.innerText;
                return part;
            });
        },
        setHighlighting(id) {
            this.highlighting = id;
        }
    }
});
