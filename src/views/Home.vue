<!--Vanessa Gutierrez 03/28/2021-->
<template>
  <p class="text-center font-mono mt-8 tracking-wider font-normal">
    Feel free to click on an image to see more details.
  </p>
  <div
    class="mt-8 container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
  >
    <router-link v-for="cat in cats" :key="cat.id" :to="`/${cat.id}`">
      <img :src="cat.url" alt="Cat Image" />
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { cats, getCats } from '../helpers/useCatPics'

onMounted(() => {
  getCats()
})
</script>
