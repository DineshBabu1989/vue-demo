export const mockCountriesData = [
  {
    name: 'Mock Country 1',
    code: 'MC1',
    continent: { name: 'Mock Continent 1' },
    awsRegion: 'Mock AWS Region 1',
  },
  {
    name: 'Mock Country 2',
    code: 'MC2',
    continent: { name: 'Mock Continent 2' },
    awsRegion: 'Mock AWS Region 2',
  },
]

export const mockCountryData = {
  name: 'Mock Country 1',
  capital: 'New Delhi',
  awsRegion: 'ap-south-1',
  code: 'MC1',
  continent: {
    code: 'AS',
    name: 'Asia',
  },
  currencies: ['INR'],
  languages: [
    {
      code: 'en',
      name: 'English',
      native: 'English',
      rtl: false,
    },
  ],
  native: 'भारत',
  phone: '91',
  phones: ['91'],
  states: [
    {
      code: 'AP',
      name: 'Andhra Pradesh',
    },
    {
      code: 'AR',
      name: 'Arunachal Pradesh',
    },
    {
      code: 'AS',
      name: 'Assam',
    },
  ],
  subdivisions: [],
}

export const mockCountryDetailData = {
  props: {
    name: 'Norway',
    countryCode: 'NO',
    currencies: ['NOK'],
    awsRegion: 'eu-zone-3',
    languages: [
      {
        code: 'nor',
        name: 'norwegain',
        native: 'nordic',
        rtl: 'ui',
      },
    ],
    states: [{ code: 'os', name: 'oslo' }],
    capital: 'oslo',
    continentName: 'europe',
    continentCode: 'eu',
    phoneCode: '78',
  },
  expected:
    'Country Details  Name: NorwayCode: NOCurrenciesNOKLanguagesnorwegainStatesoslo AWS region details  Region: eu-zone-3 Data center: oslo Country code: NO Continent: europe Continent code: eu Phone code: 78',
}

export const mockCountryItemData = {
  props: {
    country: 'germany',
    code: 'ge',
    continent: 'europe',
    awsRegion: 'eu-zone-2',
  },
  expected: 'germany geeurope aws-region : eu-zone-2',
}
