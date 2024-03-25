export const useTypoStore = defineStore('typo', {
    state: () => ({
        submission: "Helo, may name is Tien. I'\''m 21 years old and I come from Vietnamese. Growing up in this vibrant country has shaped me in countless ways, instilling in me a deep appreciation for its rich culture and traditions. As I embark on this journey of adulthood, I am eager to explore new opportunities, broaden my horizons, and make meaningful contributions to the world around me",
    }),
    actions: {
        setSubmission(submission) {
            this.submission = submission;
        },
    },
});