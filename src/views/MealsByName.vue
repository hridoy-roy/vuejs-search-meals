<template>
<div class="p-6">
  <input
      v-model="keyword"
      @change="searchMeals"
      type="text"
      class="rounded border-2 border-gray-600 w-full"
      placeholder="Search For Meals">

  <div class="grid grid-cols-4 gap-4 pt-5">
    <div class="bg-white shadow rounded p-2 text-center" v-for="meal of meals" :key="meal.idMeal">
      <router-link :to="{name: 'mealDetails',params: {id: meal.idMeal}}">
      <img class="rounded w-full" :src="meal.strMealThumb" :alt="meal.strMeal">
      </router-link>
      <div class="p-1">
        <h3 class="text-2xl font-bold underline">{{meal.strMeal}}</h3>
        <p class="py-2 text-justify font-medium text-sm">{{ meal.strInstructions.substring(0, 180) + "..." }}</p>
        <a class="text-base rounded-full bg-red-500 px-2 py-1 text-white" :href="meal.strYoutube">YouTube</a>
        <router-link class="text-base bg-green-500 px-2 py-1 rounded-full ml-3" :to="{name: 'mealDetails',params: {id: meal.idMeal}}">
          view
        </router-link>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import axiosClient from "../../axiosClient.js";
import store from "../store";
import {useRoute} from "vue-router";


const currentRoute = useRoute()
const keyword = ref('');
const meals = computed(() => store.state.searchMeals)

function searchMeals(){
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = currentRoute.params.name;
  if(keyword.value){
    searchMeals();
  }
})

</script>

<style scoped></style>
