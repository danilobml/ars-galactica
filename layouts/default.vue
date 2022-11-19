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
    background-image: url(/images/background-andromeda.jpg);
    min-width: 100vw;
    min-height: 100vh;
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.45);
}

</style>