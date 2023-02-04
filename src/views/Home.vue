<template>
<div class="flex flex-col p-8 justify-center">
  <input type="text" name="" class="rounded border-2 border-gray-600 w-full" placeholder="Search For Meals" id="">

  
  <div class="flex justify-center gap-3 mt-3">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
      {{letter}}
    </router-link>
  </div>
  <pre>
    {{ingredients}}
  </pre>
</div>
</template>
<script setup>


import {computed, onMounted,ref} from "vue";
import store from "../store";
import axiosClient from "../../axiosClient.js";

const meals = computed(() => store.state.meals)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');


const ingredients = ref([]);

onMounted( async () => {
  const response =  await axiosClient.get('list.php?i=list');
  ingredients.value= response.data
})
</script>
<style lang="">

</style>