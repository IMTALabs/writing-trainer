<script setup>
import Feedback from "~/components/common/Feedback.vue";
</script>

<template>
    <header class="flex items-center justify-between border-b border-solid p-4">
        <div class="flex items-center">
            <h1 class="m-0 text-xl font-normal">
                Writing Trainer
            </h1>
            <NaiveIcon class="ml-1" name="ic:outline-mode-edit"/>
        </div>
        <Feedback/>
    </header>
</template>

<style scoped>
</style>
