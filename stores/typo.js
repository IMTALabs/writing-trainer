export const useTypoStore = defineStore("typo", {
    state: () => ({
        submission: ""
    }),
    actions: {
        setSubmission(submission) {
            this.submission = submission;
        }
    }
});
