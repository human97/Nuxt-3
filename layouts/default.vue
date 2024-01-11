<template>
    <div>
        <header>
            <NuxtLink to="/">Nuxt 3</NuxtLink>
            <nav>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </nav>
        </header>

        <!-- output the page content -->
        <div>
            <slot/> 
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 .router-link-exact-active {
    color: #12b488;
  }
</style>