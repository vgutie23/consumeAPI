<!--Vanessa Gutierrez 03/28/2021-->
<template>
  <p class="text-center font-bold font-mono mt-8 tracking-wider">
    See new random cat pictures every time you view this page! 🙂
  </p>
  <p
    class="text-center text-xs italic font-mono mt-2 tracking-wider font-normal"
  >
    (Feel free to click on an image to make it larger and to view its category.)
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
