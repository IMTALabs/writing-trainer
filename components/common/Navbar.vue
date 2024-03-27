<script setup lang="ts">

</script>

<template>
    <nav class="flex items-center border-b border-solid p-4 space-x-2">
        <NuxtLink to="/" class="px-2">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="mdi:marker"/>
                    </n-icon>
                </template>
                {{ $t("Essay Assessment") }}
            </n-button>
        </NuxtLink>

        <NuxtLink to="/typo" class="px-2">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="material-symbols:auto-fix"/>
                    </n-icon>
                </template>
                {{ $t("Grammar Checker") }}
            </n-button>
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
// Active link in navbar
.router-link-exact-active {
    @apply rounded-md bg-gray-200;
}
</style>
