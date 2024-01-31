<template>
  <div class="w-[125px]">
    <select v-model="selectedLanguage" @change="switchLanguage" id="languageSelect" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <option :value="defaultLanguage" disabled>{{ t(`${defaultLanguage}`) }}</option>
      <option value="en">{{ t('en') }}</option>
      <option value="fr">{{ t('fr') }}</option>
      <option value="de">{{ t('de') }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const defaultLanguage = 'en'; // Set your default language here
const selectedLanguage = ref(defaultLanguage);

const switchLanguage = () => {
  if (selectedLanguage.value) {
    locale.value = selectedLanguage.value;
  }
};
</script>
