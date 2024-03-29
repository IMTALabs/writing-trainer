<script setup>
import { lightTheme } from "naive-ui";

const route = useRoute();
const { t } = useI18n();

const title = computed(() => t(route.meta.title));

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${ titleChunk } - LAN Trainer` : "LAN Trainer";
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
});

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
</script>

<template>
    <Head>
        <Title>{{ title }}</Title>
    </Head>

    <NaiveConfig>
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
