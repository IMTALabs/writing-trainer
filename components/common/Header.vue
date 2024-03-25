<script setup lang="ts">

</script>

<template>
    <header class="p-4 border-b border-solid flex items-center justify-between">
        <div class="flex items-center">
            <h1 class="text-xl font-normal m-0">
                Writing Trainer
            </h1>
            <NaiveIcon class="ml-1" name="ic:outline-mode-edit"/>
        </div>
        <n-button color="#000000">
            <template #icon>
                <NaiveIcon name="ic:baseline-feedback" :size="16"/>
            </template>
            Feedback
        </n-button>
    </header>
</template>

<style scoped>

</style>
