<script setup lang="ts">
// Stores
// ...

// Composable
const { t } = useI18n();

// Page meta
definePageMeta({
    title: "Coming soon"
});

defineOgImageComponent("NuxtSeo", {
    title: t("Grammar Checker"),
    description: t("Check your grammar with ease"),
    theme: "#ff0000",
    colorMode: "dark"
});

// Props
//...

// Data
// ...

// Computed
// ...

// Event
// ...

// Methods
// ...

// Hooks
// ...
</script>

<template>
    <div class="flex flex-col justify-center items-center h-[calc(100vh-130px)]">
        <div class="text-7xl font-black tracking-widest">COMING</div>
        <div class="text-7xl font-black tracking-widest">SOON</div>

        <div class="text-2xl mt-4">Stay tuned for more updates</div>
    </div>
</template>

<style scoped>

</style>
