<template>
  <div v-if="cat" class="mt-8 grid justify-items-center space-y-4">
    <h1 class="text-2xl font-bold font-serif mb-4">
      Category: {{ cat.categories[0].name }}
    </h1>
    <img class="h-5/6 w-5/6" :src="cat.url" :alt="cat.id" />
  </div>
  <div v-else class="text-black text-xl block text-center mt-8">Loading...</div>
</template>

<script setup>
import { cat } from '../helpers/useCatPics'
</script>
