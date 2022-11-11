<template>
    <div class="container flex justify-center items-center flex-col p-5">
        <img :src="`/images/${painting}.jpg`" :alt="title" width="600" class="mt-5">
        <h1 class="text-3xl font-bold text-white">{{title}}</h1>
    </div>
</template>

<script setup>
    const route = useRoute()
    const painting = route.params.image
    const title = painting.replaceAll('_', " ")
</script>

<style scoped>

</style>