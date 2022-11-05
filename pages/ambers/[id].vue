<template>
  <div>
    <p>/ambers/{{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>