<script setup>
import Header from "~/components/common/Header.vue";
import Navbar from "~/components/common/Navbar.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
    <SpeedInsights/>
    <Header/>
    <Navbar/>
    <main class="bg-gray-50 min-h-[calc(100vh-112px)]">
        <slot></slot>
    </main>
</template>

<style scoped>

</style>
