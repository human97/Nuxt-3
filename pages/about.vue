<template>
    <div>
        <h1>About</h1>
        <p>This is the About page</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor enim iusto mollitia vel ab? Sed tempora suscipit impedit facere enim, delectus alias sint accusamus consequuntur, iste eos dolores possimus nostrum architecto exercitationem!</p>
        <div>{{ data }}</div>
    </div>      
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 36px;
  }
p {
  margin: 20px 0;
}
</style>