<script setup lang="ts">
// Stores
// ...

// Composable
const { t } = useI18n();

// Page meta
definePageMeta({
    title: "Coming soon"
});

defineOgImageComponent("Frame", {
    colorMode: "dark",
    title: "Coming soon",
    description: "Stay tuned for more updates",
    theme: "#056f37"
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
    <div class="flex flex-col justify-center items-center h-[calc(100vh-111px)]">
        <div class="text-7xl font-black tracking-widest">COMING</div>
        <div class="text-7xl font-black tracking-widest">SOON</div>

        <div class="text-2xl mt-4">Stay tuned for more updates</div>
    </div>
</template>

<style scoped>

</style>
