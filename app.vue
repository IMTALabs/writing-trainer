<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${ titleChunk } - Writing Trainer` : "Writing Trainer";
    }
});
</script>

<template>
    <naive-config>
        <NuxtLayout>
            <NConfigProvider inline-theme-disabled>
                <NMessageProvider>
                    <NNotificationProvider>
                        <NLoadingBarProvider>
                            <NDialogProvider>
                                <NuxtPage/>
                            </NDialogProvider>
                        </NLoadingBarProvider>
                    </NNotificationProvider>
                </NMessageProvider>
            </NConfigProvider>
        </NuxtLayout>
    </naive-config>
</template>
