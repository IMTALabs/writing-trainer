<script setup>
import { lightTheme } from "naive-ui";
import SpinnerOne from "~/components/svg/SpinnerOne.vue";

// Page meta
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${ titleChunk } - LAN Trainer` : "LAN Trainer";
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
});

// Composable
const route = useRoute();
const { t } = useI18n();
const supabase = useSupabaseClient();
const authStore = useAuthStore();

// Data
const accessToken = ref(null);
const themeOverrides = {
    Button: {
        textColorTextHover: "#000000"
    },
    LoadingBar: {
        colorLoading: "#000000"
    },
    Spin: {
        color: "#000000"
    },
    Form: {
        feedbackHeightMedium: 0
    }
};

// Computed
const title = computed(() => t(route.meta.title ?? "Untitled"));

// Hook
supabase.auth.onAuthStateChange(async (event, session) => {
    console.log(event);
    if (event === "SIGNED_IN") {
        accessToken.value = session?.provider_token;
        const response = await $fetch("http://localhost:8000/api/google/login-from-token", {
            method: "POST",
            body: {
                access_token: accessToken.value
            },
            retry: 0
        });
        if (response) {
            const user = useSupabaseUser();
            authStore.login(user);
            navigateTo("/");
        }
    } else if (event === "SIGNED_OUT") {
        authStore.logout();
    }
});
</script>

<template>
    <Head>
        <Title>{{ title }}</Title>
    </Head>

    <NaiveConfig class="text-3">
        <NConfigProvider :theme="lightTheme" :theme-overrides="themeOverrides">
            <NMessageProvider>
                <NNotificationProvider>
                    <NLoadingBarProvider>
                        <NDialogProvider>
                            <NModalProvider>
                                <NuxtLayout>
                                    <NuxtPage/>
                                </NuxtLayout>
                            </NModalProvider>
                        </NDialogProvider>
                    </NLoadingBarProvider>
                </NNotificationProvider>
            </NMessageProvider>
        </NConfigProvider>
    </NaiveConfig>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
}

.page-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
}
</style>
