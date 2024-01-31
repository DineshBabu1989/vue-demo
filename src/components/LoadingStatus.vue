<template>
  <div
    v-if="loading"
    data-test="loading-status"
    class="w-full h-[80vh] flex items-center justify-center overscroll-none"
  >
    <div
      class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-indigo-600"
    />
  </div>
  <div v-else-if="error">Error: {{ error.message }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['loading', 'error'])
</script>
