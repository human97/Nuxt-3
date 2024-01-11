<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illo libero assumenda amet iusto quis adipisci modi officia ex eius cum exercitationem excepturi!</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>