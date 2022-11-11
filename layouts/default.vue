<template>
    <div class="main">
        <Navbar />
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style>
.main{
    background-image: url(/images/backgorund-stars.jpg);
    min-width: 100vw;
    min-height: 100vh;
}
</style>