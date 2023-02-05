<template>
  <div class="w-[1100px] text-center mx-auto my-0 bg-white p-5">
    <h2 class="text-3xl underline pb-3">{{ meal.strMeal }}</h2>
    <img class="w-full" :src="meal.strMealThumb" :alt="meal.strMeal">
    <div class="grid grid-cols-3 gap-4">
      <div>
        <strong class="font-bold">Category</strong>
        <p>{{ meal.strCategory }}</p>
      </div>
      <div>
        <strong class="font-bold">Area</strong>
        <p>
          {{ meal.strArea }}
        </p>
      </div>
      <div>
        <strong class="font-bold">Tag</strong>
        <p>{{ meal.strTags }}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h1>Ingredient</h1>
      </div>
      <div>
        <h1>Measure</h1>
      </div>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "../../axiosClient.js";
import {useRoute} from "vue-router";

const currentRoute = useRoute()
const meal = ref('')

onMounted(() => {
  axiosClient.get(`lookup.php?i=${currentRoute.params.id}`)
      .then(({data}) => {
        meal.value = data.meals[0];
      })
})
</script>

<style scoped>

</style>