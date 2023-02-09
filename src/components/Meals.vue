<template>
  <div class="w-full">
    <div class="grid grid-cols-4 gap-4 pt-5">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div class="flex justify-center text-2xl text-gray-800 pb-5" v-if="!meals.length">
      There Are No Data Here
    </div>
  </div>
</template>

<script setup>

import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Object,
  }
})
</script>

<style scoped>

</style>