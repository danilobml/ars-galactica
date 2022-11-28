<template>
    <div class="mx-auto mb-14 flex w-96 flex-col justify-center bg-transparent rounded-md shadow-xl shadow-slate-300/60">
      <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" :src="`/images/${image.title}.jpg`" :alt="image.title" />
      <div class="p-4">
        <h1 class="text-xl font-medium text-black pb-2">{{image.title.replaceAll('_', ' ')}}</h1>
        <p class="text-sm tracking-tight font-light text-black leading-6">{{image.type}}</p>
        <p class="text-sm tracking-tight italic font-bold text-black leading-6">{{image.year}}</p>
      </div>
  </div>

</template>

<script setup>
    const props =  defineProps({
      image: {},
   })
</script>

<style scoped>

</style>