<script setup lang="ts">

</script>

<template>
    <nav class="flex items-center border-b border-solid p-4 space-x-3 shadow-sm">
        <NuxtLink to="/" class="px-2 hover:bg-gray-200 rounded-md transition-all duration-300">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="ph:pencil-line-duotone"/>
                    </n-icon>
                </template>
                {{ $t("Essay Assessment") }}
            </n-button>
        </NuxtLink>

        <NuxtLink to="/typo" class="px-2 hover:bg-gray-200 rounded-md transition-all duration-300">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="ph:check-fat-duotone"/>
                    </n-icon>
                </template>
                {{ $t("Grammar Checker") }}
            </n-button>
        </NuxtLink>

        <NuxtLink to="/coming-soon" class="px-2 hover:bg-gray-200 rounded-md transition-all duration-300">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="ph:game-controller-duotone"/>
                    </n-icon>
                </template>
                {{ $t("Vocab Trainer") }}
            </n-button>
        </NuxtLink>

        <NuxtLink to="/coming-soon" class="px-2 hover:bg-gray-200 rounded-md transition-all duration-300">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="ph:pencil-simple-line-duotone"/>
                    </n-icon>
                </template>
                {{ $t("Dictation") }}
            </n-button>
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
// Active link in navbar
.router-link-exact-active {
    @apply bg-emerald-600;

    button {
        @apply text-white #{!important};
    }
}
</style>
