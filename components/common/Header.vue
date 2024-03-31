<script setup>
import Feedback from "~/components/common/Feedback.vue";
import LangSwitching from "~/components/svg/LangSwitching.vue";

const { locale, setLocale } = useI18n();
const router = useRouter();

const isSwitchingLang = ref(false);

const changeLocale = (lang) => {
    isSwitchingLang.value = true;
    setTimeout(() => {
        setLocale(lang);
        router.go();
    }, 1000);
};
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
            <NaiveIcon v-if="locale === 'vi'" class="cursor-pointer" name="emojione-v1:flag-for-vietnam"
                       @click="changeLocale('en')"/>
            <NaiveIcon v-if="locale === 'en'" class="cursor-pointer" name="emojione-v1:flag-for-united-kingdom"
                       @click="changeLocale('vi')"/>
            <NuxtLink to="/privacy">{{ $t("Privacy") }}</NuxtLink>
            <NuxtLink to="/term">{{ $t("Terms of Service") }}</NuxtLink>
            <Feedback/>
        </div>

        <Transition name="fade" mode="out-in">
            <div v-if="isSwitchingLang"
                 class="bg-white fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-10">
                <LangSwitching/>
                <div>
                    Filling website with new language...
                </div>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
