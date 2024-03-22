<script setup lang="ts">

</script>

<template>
    <nav class="p-4 border-b border-solid flex items-center space-x-4">
        <NuxtLink to="/" class="px-2">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="mdi:marker"/>
                    </n-icon>
                </template>
                Chấm điểm bài viết
            </n-button>
        </NuxtLink>

        <NuxtLink to="/typo" class="px-2">
            <n-button text>
                <template #icon>
                    <n-icon>
                        <NaiveIcon class="mr-2" name="material-symbols:auto-fix"/>
                    </n-icon>
                </template>
                Sửa lỗi chính tả
            </n-button>
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
// Active link in navbar
.router-link-exact-active {
    @apply bg-gray-100 rounded-md;
}
</style>
