<template>
  <div class="p-6">
    <input
        v-model="keyword"
        @change="searchMeals"
        type="text"
        class="rounded border-2 border-gray-600 w-full"
        placeholder="Search For Meals">

    <div class="grid grid-cols-4 gap-4 pt-5">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import store from "../store";
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";


const currentRoute = useRoute()
const keyword = ref('');
const meals = computed(() => store.state.searchMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = currentRoute.params.name;
  if (keyword.value) {
    searchMeals();
  }
})

</script>

<style scoped></style>
