<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '~~/components/products/ProductCard.vue'

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>
