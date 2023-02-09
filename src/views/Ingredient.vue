<template>
  <div class="container m-auto p-4">
    <router-link
        :to="{
      name: 'byIngredient',
      params: {ingredient: ingredient.strIngredient},
      }"
        v-for="ingredient of ingredients"
        :key="ingredient.idIngredient"
        class="block bg-white shadow rounded box-content p-2 m-3 border-2 cursor-pointer">

      <h3 class="text-3xl underline font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p class="border-dashed border-2 bg-emerald-500">{{ ingredient.strDescription }}</p>
    </router-link>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "../../axiosClient.js";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({data}) => {
    ingredients.value = data.meals;
  })
})

</script>

<style scoped>

</style>