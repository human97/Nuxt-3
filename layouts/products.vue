<template>
    <div>
        <header class="bg-white shadow-sm">
            <nav class="container mx-auto p-4">
                <NuxtLink class="font-bold" to="/products">Products</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot/> 
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <nav class="container mx-auto">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
 .router-link-exact-active {
    color: #12b488;
  }
</style>