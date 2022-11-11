<template>
    <div class="gallery flex flex-wrap gap-4 justify-center align-center">
        <NuxtLink :to="`/images/${image}`" v-for="(image, index) in images" :key="index" class="image-link">
            <!-- <ImageCard :image="image" /> -->
            <img :src="`/images/${image}.jpg`" :alt="image"  :transformation="[{ height: 300, width: 400 }]">
        </NuxtLink>
    </div>
</template>

<script setup>
    const images = ref(['A_bird', 'Burcus_Starry_Night', 'Darkness', 'Dear_Friend', 'Infinite', 'Picassing', 'Rick_and_Morty', 'Rickklimt', 'Worlds', 'Xenomorph'])
</script>

<style scoped>
.image-link{
    height: 200px;
    width: 250px;
}
</style>