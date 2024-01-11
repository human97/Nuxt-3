<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
            </div>
        </div>
        <h2>Products</h2>
        <p>This is the products page</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>