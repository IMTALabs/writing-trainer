export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: null,
        user: null
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true;
            this.user = user;
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
        }
    }
});
