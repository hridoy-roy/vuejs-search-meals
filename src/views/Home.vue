<template>
  <div class="grid grid-cols-4 gap-4 pt-5">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";




const meals = ref([]);

onMounted(() => {
  meals.value = computed(() => store.state.meals)
})
</script>
<style lang="">

</style>