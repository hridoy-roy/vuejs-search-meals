<template>
  <div class="bg-white shadow rounded p-2 text-center">
    <router-link :to="{name: 'mealDetails',params: {id: meal.idMeal}}">
      <img class="rounded w-full" :src="meal.strMealThumb" :alt="meal.strMeal">
    </router-link>
    <div class="p-1">
      <h3 class="text-2xl font-bold underline">{{ meal.strMeal }}</h3>
      <p class="py-2 text-justify font-medium text-sm">{{ meal.strInstructions.substring(0, 180) + "..." }}</p>
      <YoutubeButton :href="meal.strYoutube"/>
      <router-link class="text-base bg-green-500 px-2 py-1 rounded-full ml-3"
                   :to="{name: 'mealDetails',params: {id: meal.idMeal}}">
        view
      </router-link>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<style scoped>

</style>