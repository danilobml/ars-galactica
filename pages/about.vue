<template>
    <div class="container flex m-12">
        <div class="flex mt-12">
            <img src="/images/Burcu.jpg" width=300 alt="My picture">
            <div class="flex flex-col ml-10">
                <h1 class="text-black text-3xl my-4 font-bold">Nice to meet you, I'm Burcu Ersoy!</h1>
                <p class="text-black text-xl text-justify mb-4 p-5 italic font-semibold">Painting and science, two of my greatest passions in life!</p>
                <p class="text-black text-2xl text-justify pr-7 font-semibold">Welcome to my world of art and stars! I was born in Turkey, graduated in Molecular Biology in Ankara and I'm currently a PhD candidate in neurobiology at the Charité Medical School in Berlin. Painting, especially scientific and astronomical themes, such as stars, supernovas and blackholes, as well as music and culture, are what move my artistic heart. I hope they inspire you too!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const auth = useAuth()
    onMounted(() => checkLogin(auth));
</script>

<style scoped>

</style>