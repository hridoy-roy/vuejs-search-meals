<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{name: 'byName'}" class="px-2 inline-flex items-center hover:bg-amber-600 h-full">
        Search Meals
      </router-link>
      <router-link :to="{name: 'byLetter'}" class="px-2 inline-flex items-center  hover:bg-amber-600 h-full">
        Meals By Letter
      </router-link>
      <router-link :to="{name: 'ingredient'}"
                   class="px-2 inline-flex items-center transition-colors hover:bg-amber-600 h-full">
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script>

</script>