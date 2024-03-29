<script setup>
import Header from "~/components/common/Header.vue";
import Navbar from "~/components/common/Navbar.vue";
</script>

<template>
    <Header/>
    <Navbar/>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>

</style>
