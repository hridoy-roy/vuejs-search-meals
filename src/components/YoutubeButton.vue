<template>
  <a class="text-base rounded-full bg-red-500 px-2 py-1 text-white" :href="href">

    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>