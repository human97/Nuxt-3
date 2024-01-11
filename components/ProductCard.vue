
import type { NuxtLink } from '#build/components';
<template>
    <div class="card text-center bg-white rounded-lg">
        <img class="thumb" :src="product.image" alt="thumb product">
        <p class="font-bold text-grey-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="btn my-4">View Details</NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
 .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>