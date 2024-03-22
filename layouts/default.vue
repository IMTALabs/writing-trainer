<script setup>

</script>

<template>
  <header class="p-4 border-b border-solid flex items-center justify-between">
    <div class="flex items-center">
      <h1 class="text-xl font-normal m-0">Writing Trainer
      </h1>
      <NaiveIcon class="pl-1" name="ic:outline-mode-edit" />
    </div>
    <ul class="flex gap-3">
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:baseline-add-to-drive" /> Save</li>
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:round-share" />Share</li>
      <li class="px-[15px] flex items-center"> <NaiveIcon class="mr-2" name="ic:baseline-code" />Get code</li>
      <li class="pl-[15px] flex items-center"><NaiveIcon name="ic:baseline-more-vert" /></li>
    </ul>
  </header>
  <nav class="p-4 border-b border-solid flex items-center">
    <span class="text-slate-400">Insert : </span>
    <ul class="px-[5px] flex gap-3">
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:baseline-image" />Image</li>
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:baseline-videocam" />Video</li>
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:outline-insert-drive-file" />File</li>
      <li class="px-[15px] flex items-center"><NaiveIcon class="mr-2" name="ic:sharp-folder-open" />Folder</li>
    </ul>
  </nav>
  <slot></slot>
</template>

<style scoped>

</style>
