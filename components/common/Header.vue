<script setup>
import Feedback from "~/components/common/Feedback.vue";

const { locale, setLocale } = useI18n();
</script>

<template>
    <header class="flex items-center justify-between border-b border-solid p-4">
        <div class="flex items-center">
            <h1 class="m-0 text-xl font-normal flex items-center gap-2">
                LAN Trainer
                <NTag type="success" size="tiny">
                    Beta
                </NTag>
            </h1>
        </div>
        <div class="flex items-center gap-4">
            <NaiveIcon class="cursor-pointer" v-if="locale === 'en'" @click="setLocale('vi')"
                       name="emojione-v1:flag-for-united-kingdom"/>
            <NaiveIcon class="cursor-pointer" v-else @click="setLocale('en')" name="emojione-v1:flag-for-vietnam"/>
            <NuxtLink to="/privacy">{{ $t("Privacy") }}</NuxtLink>
            <NuxtLink to="/term">{{ $t("Terms of Service") }}</NuxtLink>
            <Feedback/>
        </div>
    </header>
</template>

<style scoped>
</style>
