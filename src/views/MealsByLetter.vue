<template>
<div>
  <div class="flex justify-center gap-3 p-4 text-white mt-3">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
      {{letter}}
    </router-link>
  </div>

  <div class="grid grid-cols-4 gap-4 pt-5">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</div>
</template>

<script setup>
import {computed, onMounted, watch} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const currentRoute = useRoute()
const meals  = computed(() => store.state.mealsByLetter)

watch(currentRoute, ()=>{
  store.dispatch('mealsByLetter',currentRoute.params.letter)
})

onMounted(() => {
  store.dispatch('mealsByLetter',currentRoute.params.letter)
})

</script>

<style scoped>

</style>