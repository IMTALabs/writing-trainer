import { useAuthStore } from "~/stores/auth.js";

export default defineNuxtRouteMiddleware(async (to, _from) => {
    const authStore = useAuthStore();

    if (authStore.isLoggedIn === null) {
        const user = await useSupabaseUser();
        if (user.value) {
            return navigateTo('/');
        }
    } else {
        if (authStore.isLoggedIn) {
            return navigateTo("/");
        }
    }
});
