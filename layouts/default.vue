<script setup>
import Header from "~/components/common/Header.vue";
import Navbar from "~/components/common/Navbar.vue";

const route = useRoute();
const { t } = useI18n();

const title = computed(() => t(route.meta.title));
</script>

<template>
    <Head>
        <Title>{{ title }}</Title>
    </Head>

    <Header/>
    <Navbar/>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>

</style>
