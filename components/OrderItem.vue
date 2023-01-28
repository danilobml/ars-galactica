<template>
    <div class="mt-5">
  <div class=" card-style mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
    <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" :src="`/images/${props.title}.jpg`" :alt="`${props.title}`" />
    <div class="p-4">
      <small class="text-blue-400 text-xs">Item summary:</small>
      <h1 class="text-2xl font-medium text-slate-600 pb-2">Title: {{props.title.replaceAll('_', " ")}}</h1>
      <p class="text-sm tracking-tight font-light text-slate-400 leading-6">  Price before VAT: {{price-calculateTax(price)}} €</p>
      <p class="text-sm tracking-tight font-light text-slate-400 leading-6">     + VAT: {{calculateTax(price)}} €</p>
      <p class="text-md font-bold tracking-tight text-black leading-6"> Final price: {{price}} €</p>
      <div class="flex flex-col">
            <button @click="removeFromCart" class="p-3 bg-indigo-700 fs-md text-white rounded-md mt-3 w-44 h-12">Remove from cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const props = defineProps({
        title: String
    })

    const object = ref([])
    const price = ref()

    onMounted(async () => {
        const { paintingByTitle } = await GqlPaintingByTitle({title: props.title})
        object.value = paintingByTitle
        price.value = paintingByTitle.price
    })
    
    
    function calculateTax(price){
        return 0.19*price
    }

    const cart = useCart()

    function removeFromCart() {
    if(object){
        cart.value = cart.value.filter((item) => item.title !== props.title)
        alert('Item removed!')
    }

    function onBuy() {

    }
}
</script>

<style scoped>
.card-style {
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.45);
}
/* .image-cart {
    width: 200px;
    height: 150px
} */
</style>