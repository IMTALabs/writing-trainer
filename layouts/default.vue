<script setup>
import Header from "~/components/common/Header.vue";
import Navbar from "~/components/common/Navbar.vue";
</script>

<template>
    <Header/>
    <Navbar/>
    <main class="h-[calc(100vh-130px)]">
      <slot></slot>
    </main>
</template>

<style scoped>

</style>
