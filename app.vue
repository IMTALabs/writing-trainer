<script setup>
import { lightTheme } from "naive-ui";

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${ titleChunk } - Writing Trainer` : "Writing Trainer";
    },
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "favicon.png"
        }
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
    transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
