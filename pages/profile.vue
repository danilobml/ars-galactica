<template>
    <div class="container">
        <h1 class="text-white text-3xl">Profile</h1>
    </div>
</template>

<script setup>
    const auth = useAuth()
    onMounted(() => checkLogin(auth));
</script>

<style scoped>

</style>