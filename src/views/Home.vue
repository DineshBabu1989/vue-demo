<template>
   <!-- Country List with filter -->
  <section v-if="!selectedCountryCode">
    <header class="text-xl mt-5 font-bold">{{ $t('countryList') }}</header>
    <div className="w-full flex justify-center">
      <input
        type="text"
        name="country"
        id="country"
        data-test="search-term"
        v-model="searchTerm"
        :disabled="loading"
        className="block w-5/6 m-5 md:w-[375px] rounded-md border-0 p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:leading-6"
        :placeholder="$t('searchCountry')"
      />
    </div>
    <LoadingStatus :loading="loading" :error="error" />
    <ul v-if="filteredCountries" class="w-full grid grid-cols-1 md:grid-cols-3">
      <li
        v-for="country in filteredCountries"
        data-test="select-country"
        v-bind:key="country.code"
        v-on:click="selectCountry(country.code)"
      >
        <CountryItem
          :country="country.name"
          :code="country.code"
          :continent="country.continent.name"
          :aws-region="country.awsRegion"
        />
      </li>
    </ul>
  </section>
  <!-- Country Details -->
  <div v-if="selectedCountryCode" class="w-full p-5">
    <button
      data-test="show-country-list"
      class="text-base font-medium flex mb-5 border bg-white w-fit px-3 py-1 rounded shadow hover:shadow-md"
      v-on:click="selectCountry(null)"
    >
     {{ $t('back') }}
    </button>
    <LoadingStatus :loading="detailsLoading" :error="detailsError" />
    <div v-if="countryDetails && countryDetails.country">
      <CountryDetails
        :name="countryDetails.country.name"
        :country-code="countryDetails.country.code"
        :currencies="countryDetails.country.currencies"
        :awsRegion="countryDetails.country.awsRegion"
        :languages="countryDetails.country.languages"
        :states="countryDetails.country.states"
        :capital="countryDetails.country.capital"
        :continentName="countryDetails.country.continent.name"
        :phoneCode="countryDetails.country.phone"
        :continentCode="countryDetails.country.continent.code"
      />
    </div>
  </div>
  <Toast :toasts="toasts" />
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { useQuery, useLazyQuery } from '@vue/apollo-composable';
import { Country } from '../types/exercise';
import { SEARCH_DELAY, TOAST_MESSAGES, TOAST_STATUS } from '../constants';
import { COUNTRIES_QUERY, COUNTRY_DETAILS_QUERY } from '../graphql/queries';
import CountryItem from '../components/CountryItem.vue';
import CountryDetails from '../components/CountryDetails.vue';
import Toast from '../components/Toast.vue';
import LoadingStatus from '../components/LoadingStatus.vue';
import { debounce, filterCountries } from '../utils/utils';

import useToast from '../composables/useToast'

const { toasts, showToast } = useToast()

// Countries list
const { result, loading, error } = useQuery(COUNTRIES_QUERY, null, {
  fetchPolicy: 'cache-and-network',
})

const selectedCountryCode: Ref<string | null> = ref('')
const searchTerm: Ref<string> = ref('')

// Country details
const {
  result: countryDetails,
  loading: detailsLoading,
  load,
  error: detailsError,
} = useLazyQuery(
  COUNTRY_DETAILS_QUERY,
  () => ({ code: selectedCountryCode.value }),
  () => ({
    enabled: !!selectedCountryCode.value,
    fetchPolicy: 'cache-and-network',
  }),
)

const filteredCountries = ref<Country[]>(
  filterCountries(result.value?.countries || [], ''),
)

const detailsErrorRef = ref(detailsError)
const errorRef = ref(error)

watch(
  () => result.value,
  (newResult) => {
    showToast(TOAST_MESSAGES.successCountry, TOAST_STATUS.success)
    filteredCountries.value = filterCountries(
      newResult.countries,
      searchTerm.value,
    )
  },
)

watch(
  searchTerm,
  debounce(async (newSearchTerm: string, oldSearchTerm: string) => {
    if (newSearchTerm !== oldSearchTerm) {
      filteredCountries.value = filterCountries(
        result.value.countries,
        newSearchTerm,
      )
    }
  }, SEARCH_DELAY),
)

watch(selectedCountryCode, (newCode, oldCode) => {
  if (newCode !== null && newCode !== oldCode) {
    load()
    showToast(TOAST_MESSAGES.successCountryDetails, TOAST_STATUS.success)
  }
})

watch([detailsErrorRef, errorRef], ([countryDetailsError]) => {
  const errorMsg = countryDetailsError
    ? TOAST_MESSAGES.errorCountryDetails
    : TOAST_MESSAGES.errorCountry

  showToast(errorMsg, TOAST_STATUS.error)
})


function selectCountry(code: string | null) {
  selectedCountryCode.value = code
}
</script>
