<script setup lang="ts">
const props = defineProps({
  country: String,
  code: String,
  continent: String,
  awsRegion: String,
})
</script>

<template>
  <div
    data-test="country-list-item"
    class="rounded-lg w-[300px] md:w-[350px] col-span-1 divide-y divide-gray-200 bg-white shadow hover:shadow-md m-5 cursor-pointer"
  >
    <div class="truncate text-sm font-semibold text-gray-900 p-3">
      <div class="w-full flex">
        {{ country }}
        <span
          class="ml-2 inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
          >{{ code }}</span
        >
      </div>

      <p class="w-full flex mt-1 truncate text-sm text-gray-500">
        {{ continent }}
      </p>
    </div>
    <div
      class="w-full flex p-3 text-gray-500 text-sm font-semibold items-baseline"
    >
      aws-region : {{ awsRegion }}
    </div>
  </div>
</template>
