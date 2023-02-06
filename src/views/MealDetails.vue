<template>
  <div class="container text-center mx-auto my-0 bg-white p-5">
    <h2 class="text-3xl underline pb-3">{{ meal.strMeal }}</h2>
    <img class="max-w-full m-auto rounded-full" :src="meal.strMealThumb" :alt="meal.strMeal">
    <div class="p-4">
      <p>
        {{meal.strInstructions}}
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 border-4 rounded mt-5">
      <div class=" bg-red-500">
        <strong class="font-bold text-stone-700 underline text-2xl">Category</strong>
        <p>{{ meal.strCategory }}</p>
      </div>
      <div class="bg-green-500">
        <strong class="font-bold text-stone-700 underline text-2xl">Area</strong>
        <p>
          {{ meal.strArea }}
        </p>
      </div>
      <div class="bg-emerald-500 rounded">
        <strong class="font-bold text-stone-700 underline  text-2xl">Tag</strong>
        <p>{{ meal.strTags }}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h1 class="font-bold underline text-2xl bg-amber-500">Ingredient</h1>
        <ul>
          <li v-for="i of 20" class="pt-0.5">
            <span v-if="meal[`strIngredient${i}`]"><strong>{{i}}</strong>:  {{meal[`strIngredient${i}`]}} </span>
          </li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold underline text-2xl bg-cyan-500">Measure</h1>
        <ul>
          <li v-for="i of 20" class="pt-0.5">
            <span v-if="meal[`strMeasure${i}`]"><strong>{{i}}</strong>:
                    {{meal[`strMeasure${i}`]}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <YoutubeButton :href="meal.strYoutube"> Go To Youtube </YoutubeButton>
      <a class=" ml-3 text-base rounded-full bg-indigo-500 px-2 py-1 text-white" :href="meal.strSource">View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "../../axiosClient.js";
import {useRoute} from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

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