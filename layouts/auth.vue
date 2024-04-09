<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
    <SpeedInsights/>
    <main class="min-h-screen flex flex-col">
        <div class="flex p-4">
            <h1 class="m-0 flex items-center gap-2 text-lg font-semibold">
                <NuxtLink to="/" class="flex items-center gap-1">
                    <img src="https://img.icons8.com/pulsar-color/48/pencil.png" class="w-8 h-8" alt="">
                    <span class="text-black">LAN Trainer</span>
                </NuxtLink>
                <NTag type="error" size="tiny">
                    Beta
                </NTag>
            </h1>
        </div>

        <slot></slot>
    </main>
</template>

<style scoped>

</style>
