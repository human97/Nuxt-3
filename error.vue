<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="text-7xl font-bold mt-7">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button 
            @click="handleClearError" 
            class="btn my-7"
        >Go Home...</button>
    </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
  }
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>