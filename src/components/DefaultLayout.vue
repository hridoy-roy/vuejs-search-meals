<template>
  <navbar/>
  <div class="bg-gray-500 h-full">
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup >
import Navbar from './Navbar.vue'
</script>
