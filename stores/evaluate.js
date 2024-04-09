export const useEvaluateStore = defineStore("evaluate", {
    state: () => ({
        instruction: "Some people think that getting old is a negative thing, whereas others think it is much easier for people to live in modern society. Discuss both views and give your own opinion.",
        submission: `<p>Thanks to the development of technology, life expectancy has been significantly extended. Although some people think that ageing is a negative thing, others hold the reverse viewpoint that people nowadays have much easier lives than in the past. From my perspective, I am inclined to stand with the former opinion that getting old is not a positive thing as medical improvements make people live longer which can be struggling for both society and individuals.</p><p></p><p>Initially, one of the main arguments in favour of the opinion that it is easy to live in modern society is that individuals have much more resources than before due to  technological development. For example, medical achievements help people to live in a relatively healthy way as there are sufficient technics to deal with diseases. Compared to the past, people indeed are prone to living easily which seems to postpone the drawbacks of getting old. </p><p></p><p>At the other end of the spectrum, the prolonged life expectancy can extend the pain of illness and increase the social burden.The growth of the medical industry not only brings well-being to patients but also makes them  put up with diseases longer which can be a kind of torture to both patients and their families especially the elderly who have a high potential to get sick. In addition,  society needs to invest more in ageing care which will influence the distribution of resources in other aspects. Therefore, getting old is still a negative thing no matter how  society develops.</p><p></p><p>To sum up, despite the fact that people in modern society live much easier than before,the shortcomings of ageing cannot be denied. However, no one is able to escape from the cruel life circle. What individuals can do is to live in the present and cherish the surroundings.</p>`,
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
