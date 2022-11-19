<template>
    <h1 class="font-bold text-2xl text-center">My Works:</h1>
    <div class="gallery flex flex-wrap gap-4 justify-center align-center mt-1 px-6">
        <NuxtLink :to="`/images/${image.title}`" v-for="image in images" :key="image.title" class="image-link m-2 transform transition duration-500 hover:scale-110">
            <img :src="`/images/${image.title}.jpg`" :alt="image.title"  :transformation="[{ height: 300, width: 400 }]">
        </NuxtLink>
    </div>
</template>

<script setup>
    const images = usePaintings()
</script>

<style scoped>
.image-link{
    height: 200px;
    width: 250px;
}
img{
    border-radius: 0.2rem;
    height: 200px;
    width: 300px;   
}
</style>