<template>
    <div class="container flex justify-center items-center flex-col p-5">
        <img :src="`/images/${painting}.jpg`" :alt="title" width="600" class="mt-5">
        <h1 class="text-3xl font-bold text-black mt-3">{{title}}</h1>
        <h2 class="text-xl text-black mt-1">{{object.type}}</h2>
        <h2 class="text-xl font-bold text-black mt-1">Price: {{object.price}}€ </h2>
        <button @click="addToCart" class="p-3 bg-indigo-700 text-black font-bold rounded-md mt-3 w-48 h-12">Buy (add to cart)</button>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const route = useRoute()

    const painting = route.params.image

    const object = ref([])

    onMounted(async () => {
        const { paintingByTitle } = await GqlPaintingByTitle({title: painting})
        object.value = paintingByTitle
        console.log(paintingByTitle)
      })
    
    const cart = useCart()

    const title = painting.replaceAll('_', " ")
    
    function isInCart() {
        return !!cart.value.find((item) => item.title === route.params.image)
    }
    function addToCart() {
        if(!isInCart()){
            cart.value.push({
                title: route.params.image,
            })
            alert('Product added to cart!')
        } else {
            alert('Product already in cart')
        }
}
</script>

<style scoped>

</style>