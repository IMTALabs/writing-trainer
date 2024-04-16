<script setup>
import { lightTheme } from "naive-ui";
import SpinnerOne from "~/components/svg/SpinnerOne.vue";

// Page meta
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${ titleChunk } - LAN Trainer` : "LAN Trainer";
    }
});

// Composable
const route = useRoute();
const { t } = useI18n();
const authStore = useAuthStore();

// useSeoMeta({
//     ogImage: "/thumbnail.jpg"
// });

// Data
const loadingRef = ref(null);
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
onMounted(() => {
    if (authStore.isFirstTime) {
        authStore.fetchUserInformation().then(() => {
            loadingRef.value.remove();
        });
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
                                <div ref="loadingRef"
                                     class="fixed z-10 flex h-screen w-screen items-center justify-center gap-2 bg-white text-gray-300">
                                    <SpinnerOne/>
                                    Fetching user information
                                </div>

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
