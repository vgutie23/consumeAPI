<!--Vanessa Gutierrez 03/28/2021-->
<template>
  <div v-if="cat" class="mt-8 grid justify-items-center">
    <div v-if="cat.categories">
      <h1 class="text-xl font-bold font-mono tracking-wider">
        Category: {{ cat.categories[0].name }}
      </h1>
    </div>
    <div v-else>
      <h1 class="text-xl font-bold font-mono tracking-wider">Category: none</h1>
    </div>
    <p
      class="text-center text-xs italic font-mono mt-2 mb-8 tracking-wider font-normal"
    >
      (Click on the title above to go back to home page so you can see more
      random cat pictures!)
    </p>
    <img class="h-5/6 w-5/6" :src="cat.url" :alt="cat.id" />
  </div>
  <div v-else class="text-black text-xl block text-center mt-8">Loading...</div>
</template>

<script setup>
import { cat } from '../helpers/useCatPics'
</script>
