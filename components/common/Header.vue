<script setup>
import Feedback from "~/components/common/Feedback.vue";
import LangSwitching from "~/components/svg/LangSwitching.vue";

const { locale, setLocale } = useI18n();
const router = useRouter();
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const message = useMessage();

const isSwitchingLang = ref(false);
const isLoggingOut = ref(false);
const profileOptions = [
    { label: "Profile", key: "profile" },
    { label: "Logout", key: "logout" }
];

const changeLocale = (lang) => {
    isSwitchingLang.value = true;
    setTimeout(() => {
        setLocale(lang);
        router.go();
    }, 1000);
};

const handleProfileOption = async (key) => {
    if (key === "logout") {
        isLoggingOut.value = true;
        await supabase.auth.signOut();
        navigateTo("/");
    } else {
        message.info("Coming soon...");
    }
};
</script>

<template>
    <header class="flex h-12 items-center justify-between border-b border-solid">
        <div class="flex items-center pl-4">
            <h1 class="m-0 flex items-center gap-2 text-lg font-semibold">
                <NuxtLink to="/" class="flex items-center gap-1">
                    <img src="https://img.icons8.com/pulsar-color/48/pencil.png" class="h-8 w-8" alt="">
                    <span class="text-black">LAN Trainer</span>
                </NuxtLink>
                <NTag type="error" size="tiny">
                    Beta
                </NTag>
            </h1>
        </div>
        <div class="flex items-center gap-4 pr-4">
            <!--<NaiveIcon v-if="locale === 'vi'" class="cursor-pointer" name="emojione-v1:flag-for-vietnam"-->
            <!--           @click="changeLocale('en')"/>-->
            <!--<NaiveIcon v-if="locale === 'en'" class="cursor-pointer" name="emojione-v1:flag-for-united-kingdom"-->
            <!--           @click="changeLocale('vi')"/>-->

            <NuxtLink class="flex items-center gap-1 hover:text-emerald-600" to="/privacy">
                <NaiveIcon name="ph:shield-check-duotone"/>
                {{ $t("Privacy") }}
            </NuxtLink>

            <NuxtLink class="flex items-center gap-1 hover:text-emerald-600" to="/term">
                <NaiveIcon name="ph:file-ts-duotone"/>
                {{ $t("Terms of Service") }}
            </NuxtLink>

            <Feedback/>

            <NSpin :show="isLoggingOut" size="small" v-if="user">
                <NDropdown trigger="hover" size="medium" :options="profileOptions" @select="handleProfileOption"
                           class="min-w-20">
                    <div class="flex h-12 items-center justify-center gap-2 border-x bg-gray-50 px-4">
                        <n-avatar
                            round
                            size="small"
                            :src="user.user_metadata.avatar_url"
                        />
                        <div class="flex flex-col text-xs gap-0.5 items-start">
                            <div class="truncate max-w-20">{{ user.user_metadata.full_name }}</div>
                            <div class="flex items-center text-violet-600 font-bold -ml-0.5">
                                <NaiveIcon name="mage:gem-c-fill" :size="16"/>
                                1000
                            </div>
                        </div>
                    </div>
                </NDropdown>
            </NSpin>
            <NuxtLink v-else to="/login"
                      class="flex h-12 items-center justify-center gap-2 border-x bg-gray-50 px-4 hover:text-emerald-600">
                <NaiveIcon name="ph:sign-in-duotone"/>
                Login
            </NuxtLink>
        </div>

        <!--<Transition name="fade" mode="out-in">-->
        <!--    <div v-if="isSwitchingLang"-->
        <!--         class="fixed top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-white">-->
        <!--        <LangSwitching/>-->
        <!--        <div>-->
        <!--            {{ $t("Filling website with new language...") }}-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</Transition>-->
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

.router-link-exact-active {
    @apply text-emerald-600;
}
</style>
