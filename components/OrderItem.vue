<template>
    <div class="mt-5">
        <img :src="`/images/${props.title}.jpg`" :alt="`${props.title}`" class="image-cart w-full object-cover object-center rounded-lg shadow-md">
        <h2 class="text-2xl font-bold">Title: {{props.title}}</h2>
        <h2 class="text-lg">  Price before VAT: {{price-calculateTax(price)}}</h2>
        <h2 class="text-md">   + VAT: {{calculateTax(price)}}</h2>
        <h2 class="text-2xl font-bold">Final price: {{price}}</h2>
        <div class="flex flex-col">
            <button @click="removeFromCart" class="p-3 bg-indigo-700 fs-md text-white rounded-md mt-3 w-44 h-12">Remove from cart</button>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: String
    })

    const data = usePaintings()
    const found = data.value.find(x=>x.title === props.title)
    const price = found.price

    function calculateTax(price){
        return 0.19*price
    }

    const cart = useCart()

    function removeFromCart() {
    const found = cart.value.find((item) => item.title === props.title)
    if(found){
        cart.value = cart.value.filter((item) => item.name !== props.title)
        alert('Item removed!')
    }
}
</script>

<style scoped>
.image-cart {
    width: 200px;
    height: 150px
}
</style>