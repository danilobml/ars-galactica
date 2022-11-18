<template>
    <div class="container ml-20 mt-10 flex justify-center">
    <h2 v-if="cart.length<1" class="text-bold text-3xl m-5">No items selected yet</h2>
    <div v-else>
        <h1 class="text-3xl mt-5">Order Summary:</h1>
        <div  class="flex">
            <div v-for="item in cart" :key="item.title">
                <OrderItem :title="item.title"/>
            </div>
        </div>
        <button @click="navigateTo('/checkout')" class="justify-self-center self-center p-3 bg-indigo-700 text-white rounded-md mt-3 w-48 h-12">Proceed to Checkout</button>
    </div>
    </div>
</template>

<script setup>
   const cart = useCart()

// TODO: Total Price
</script>

<style scoped>

</style>