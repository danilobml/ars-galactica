<template>
    <div class="mt-5">
        <h1 class="font-bold text-3xl italic text-center">Welcome to Ars Galactica!</h1>
        <div class="container ml-14">
            <Carousel />
        </div>
    </div>
</template>

<script setup>
    const auth = useAuth()
    onMounted(() => checkLogin(auth));
</script>

<style scoped>
</style>