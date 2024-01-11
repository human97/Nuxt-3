<template>
    <div>
        <header>
            <NuxtLink to="/products">Products</NuxtLink>
            
        </header>

        <!-- output the page content -->
        <div>
            <slot/> 
        </div>

        <footer>
            <nav>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
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