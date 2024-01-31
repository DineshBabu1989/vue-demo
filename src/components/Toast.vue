<template>
  <div
    data-test="toast"
    v-for="(toast, index) in toasts"
    :key="index"
    :class="getContainerClasses(toast.type)"
  >
    <span :class="getIconClasses(toast.type)"></span> {{ toast.message }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['toasts', 'removeToast'])

const getContainerClasses = (type: string) => {
  switch (type) {
    case 'success':
      return 'fixed bg-white top-20 min-w-[250px] flex items-center justify-start h-[50px] right-2 rounded font-semibold shadow-lg border p-2 border-green-500 text-green-700'
    case 'warning':
      return 'fixed bg-white top-20 min-w-[250px] flex items-center justify-start h-[50px] right-2 rounded font-semibold shadow-lg border p-2 border-yellow-500 text-yellow-700'
    case 'error':
      return 'fixed bg-white top-20 min-w-[250px] flex items-center justify-start h-[50px] right-2 rounded font-semibold shadow-lg border p-2 border-rose-500 text-rose-700'
    default:
      return 'fixed bg-white top-20 min-w-[250px] flex items-center justify-start h-[50px] right-2 rounded font-semibold shadow-lg border p-2 text-gray-600'
  }
}

const getIconClasses = (type: string) => {
  switch (type) {
    case 'success':
      return 'w-5 h-5 rounded-full mr-2 bg-green-500'
    case 'warning':
      return 'w-5 h-5 rounded-full mr-2 bg-yellow-500'
    case 'error':
      return 'w-5 h-5 rounded-full mr-2 bg-red-500'
    default:
      return 'w-5 h-5 rounded-full mr-2'
  }
}
</script>
