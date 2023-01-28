<template>
    <div class="mt-10">
        <MainGallery />
    </div>
</template>

<script setup>
    const auth = useAuth()
    onMounted(() => checkLogin(auth));
</script>

<style scoped>

</style>