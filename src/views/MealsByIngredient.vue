<template>
  <Meals :meals="meals" />
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import Meals from "../components/Meals.vue";

const currentRoute = useRoute()

const meals = computed(() => store.state.mealsByIngredient)
console.log(currentRoute.params);
onMounted(() => {
  store.dispatch('searchMealsByIngredient', currentRoute.params.ingredient);
})
</script>

<style scoped>

</style>