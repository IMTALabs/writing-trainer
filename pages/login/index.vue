<script setup>
import GoogleColor from "~/components/svg/GoogleColor.vue";

definePageMeta({
    title: "Login",
    layout: "auth",
    middleware: "guest"
});

defineOgImageComponent("Frame", {
    colorMode: "dark",
    title: "Login",
    description: "Login to your account",
    theme: "#056f37"
});

// Composable
const supabase = useSupabaseClient();
const config = useRuntimeConfig();
const message = useMessage();
const authStore = useAuthStore();

// Props
//...

// Data
const isLogging = ref(false);
const windowRef = ref(null);
const accessToken = ref(null);
const count = ref(0);

// Computed
// ...

// Event
// ...

// Methods
const login = async () => {
    isLogging.value = true;
    const { data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            skipBrowserRedirect: true,
            redirectTo: `${ config.public.app.url }/login/callback`
        }
    });

    windowRef.value = window.open(data.url, "Login", "width=800,height=600");
    isLogging.value = false;
};

// Hooks
const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN") {
        if (++count.value > 1) return;
        accessToken.value = session?.access_token;
        try {
            const { data } = await useAsyncData("login", () => $fetch(`${ config.public.api.serverUrl }/api/google/login-from-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: {
                    access_token: accessToken.value
                },
                retry: 0,
                credentials: "include"
            }));

            if (data.value) {
                authStore.login(data.value.balance);
                window?.localStorage?.setItem("accessToken", data.value.access_token);
                window?.localStorage?.setItem("serverId", data.value.id);
                navigateTo("/essay");
            }
            subscription?.unsubscribe();
        } catch (e) {
            message.error("Login failed! Can not get user information from server.");
            await supabase.auth.signOut();
        }
    }
});

</script>

<template>
    <div class="flex grow items-center justify-center">
        <button :disabled="isLogging" @click="login"
                class="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <GoogleColor class="mr-2 h-6 w-6"/>
            <span>Continue with Google</span>
        </button>
    </div>
</template>

<style scoped></style>
