export const useEvaluateStore = defineStore("evaluate", {
    state: () => ({
        instruction: "Nowadays people buy a lot of unnecessary manufactured products. What are the effects of this on individuals and society? Is this a positive or negative development?",
        submission: "<p>Nowadays, people contend that a large portion of government funding for performing arts, namely music and theater, is akin to spending on the arts when it should instead be applied to improving the services provided to people. However, I believe that art should be regarded as a fundamental component of society because it allows artists to express their creative side while also preserving the culture and history of the country. First, creative people employ their talents to adorn a straightforward item that can transform a sparse space. Paintings, sculptures, and sketches add attractiveness to the environment, which improves many people’s dispositions and behaviors. They have significantly aided in the restoration of the ancient artwork and forefathers’ history. In addition, there are some people who have a strong desire to travel to museums and art galleries in order to admire the magnificent artistic creations that are frequently supported by governmental bodies. There are a number of other advantages to supporting the fine arts since it provides young people with a similar passion with a great opportunity to succeed in this sector and make a fortune for themselves. Some youngsters who lack academic talent nevertheless find comfort and calm in working their magic on canvases. Furthermore, this sport has been accepted as a recreational activity for people who are battling with their mental health in many states. Indulging in these activities while getting a break from their monotonous routine is something that many adults like doing on the weekends. In conclusion, the higher authorities should support public services and other initiatives with the same zeal and investment.</p>",
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
