<script setup>
</script>

<template>
    <div class="h-full">
        <div class="max-w-3xl mx-auto border-x min-h-full">
            <div class="p-4">
                <label class="text-sm font-semibold flex items-center justify-between gap-1">
                    Evaluate
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <NaiveIcon :size="18" class="text-gray-400" name="material-symbols:help"/>
                        </template>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </n-tooltip>
                </label>
                <div class="p-4">
                    <TypoEditor/>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
