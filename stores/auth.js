export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLoggedIn: null,
        balance: 0,
        isFirstTime: true
    }),
    actions: {
        login(balance) {
            this.isLoggedIn = true;
            this.balance = balance;
            this.isFirstTime = false;
        },
        logout() {
            this.isLoggedIn = false;
            this.balance = 0;
            window?.localStorage?.removeItem("accessToken");
            window?.localStorage?.removeItem("serverId");
        },
        setBalance(balance) {
            this.balance = balance;
        },
        notFirstTime() {
            this.isFirstTime = false;
        },
        async fetchUserInformation() {
            const route = useRoute();
            if (["/login/callback"].includes(route.fullPath)) {
                this.isFirstTime = false;
                return false;
            }

            const user = useSupabaseUser();
            if (!user.value) return false;

            try {
                const config = useRuntimeConfig();
                const response = await $fetch(`${ config.public.api.serverUrl }/api/user`, {
                    method: "POST",
                    retry: 0,
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${ window?.localStorage?.getItem("accessToken") }`
                    }
                });
                this.balance = response.balance;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
});
