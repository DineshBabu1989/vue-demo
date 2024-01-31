<script setup lang="ts">
const props = defineProps({
  name: String,
  countryCode: String,
  currencies: Array<String>,
  awsRegion: String,
  languages: Array<{
    code: String
    name: String
    native: String
    rtl: String
  }>,
  states: Array<{ code: String; name: String }>,
  capital: String,
  continentName: String,
  continentCode: String,
  phoneCode: String,
})
</script>

<template>
  <div class="w-full flex md:flex-row flex-col gap-3" data-test="country-details">
    <section class="w-full md:w-[70%] rounded-lg bg-white shadow p-10">
      <header
        class="text-xl w-full flex mb-5 font-semibold border-b border-zinc-300 pb-5"
      >
      {{ $t('countryDetails') }}
      </header>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('name') }}
        <span class="font-light ml-5 text-gray-600">{{ name }}</span>
        <span class="ml-10"
          >{{ $t('countryCode') }}
          <span class="font-light ml-2 text-gray-600">{{
            countryCode
          }}</span></span
        >
      </div>
      <div class="w-full flex items-baseline mb-5">
        <span class="text-base font-medium">{{ $t('currencies') }}</span>
        <ul class="flex items-center p-0 ml-2 text-gray-600">
          <li v-for="currency in currencies" class="mr-2">{{ currency }}</li>
        </ul>
      </div>
      <div class="w-full flex items-baseline mb-5">
        <span class="text-base font-medium">{{ $t('languages') }}</span>
        <ul class="flex items-center p-0 ml-2 text-gray-600">
          <li v-for="lan in languages" class="mr-2">{{ lan.name }}</li>
        </ul>
      </div>
      <div v-if="states?.length" class="w-full flex flex-col">
        <div class="text-base font-medium flex mb-3">{{ $t('states') }}</div>
        <ul
          class="p-0 grid md:grid-cols-6 grid-cols-3 w-fit gap-5 text-gray-600"
        >
          <li
            v-for="state in states"
            class="border border-gray-200 p-2 rounded overflow-hidden text-ellipsis"
          >
            {{ state.name }}
          </li>
        </ul>
      </div>
    </section>
    <section class="w-full md:w-[30%] rounded-lg bg-white shadow p-10">
      <header
        class="text-xl w-full flex mb-5 font-semibold border-b border-zinc-300 pb-5"
      >
      {{ $t('awsRegionDetails') }}
      </header>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('region') }}
        <span class="font-light ml-5 text-gray-600">{{ awsRegion }}</span>
      </div>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('dataCenter') }}
        <span class="font-light ml-5 text-gray-600">{{ capital }}</span>
      </div>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('countryCode') }}
        <span class="font-light ml-5 text-gray-600">{{ countryCode }}</span>
      </div>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('continent') }}
        <span class="font-light ml-5 text-gray-600">{{ continentName }}</span>
      </div>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('continentCode') }}
        <span class="font-light ml-5 text-gray-600">{{ continentCode }}</span>
      </div>
      <div class="w-full flex text-base font-medium mb-5">
        {{ $t('phoneCode') }}
        <span class="font-light ml-5 text-gray-600">{{ phoneCode }}</span>
      </div>
    </section>
  </div>
</template>
