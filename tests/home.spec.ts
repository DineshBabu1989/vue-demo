import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Home from '../src/views/Home.vue'
import { COUNTRIES_QUERY, COUNTRY_DETAILS_QUERY } from '../src/graphql/queries'
import { mockCountriesData, mockCountryData } from './fixtures'

const mockCOUNTRIES_QUERY = jest.fn()
const mockCOUNTRY_DETAILS_QUERY = jest.fn()

jest.mock('@vue/apollo-composable', () => ({
  useQuery: (query: any, variables: any, options: any) => {
    if (query === COUNTRIES_QUERY) {
      return mockCOUNTRIES_QUERY(variables, options)
    }
  },
  useLazyQuery: (query: any, variables: any, options: any) => {
    if (query === COUNTRY_DETAILS_QUERY) {
      return mockCOUNTRY_DETAILS_QUERY(variables, options)
    }
  },
}))

describe('Home.vue', () => {
  it('renders country list,\
      filter by name, selects a country,\
      fetches and displays details, \
      and navigates back to the list', async () => {
    mockCOUNTRIES_QUERY.mockReturnValue({
      result: {
        value: {
          countries: mockCountriesData,
        },
      },
      loading: false,
      error: null,
    })

    mockCOUNTRY_DETAILS_QUERY.mockReturnValue({
      result: {
        country: mockCountryData,
      },
      loading: false,
      error: null,
      load: jest.fn(),
    })

    const wrapper = mount(Home)

    await flushPromises()

    // Api list data
    expect(wrapper.findAll('[data-test="country-list-item"]')).toHaveLength(2)

    // No loading
    expect(wrapper.findAll('[data-test="loading-status"]')).toHaveLength(0)

    await nextTick()

    // Try searching
    await wrapper.get('[data-test="search-term"]').setValue('Mock Country 1')

    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Search results
    expect(wrapper.findAll('[data-test="country-list-item"]')).toHaveLength(1)

    // Country select
    await wrapper.get('[data-test="select-country"]').trigger('click')

    await flushPromises()

    // Show toast on succesful fetch
    expect(wrapper.get('[data-test="toast"]').text()).toBe(
      'fetched country details',
    )

    // Show country details
    expect(wrapper.get('[data-test="country-details"]').text()).toBe(
      'Country Details  Name: Mock Country 1Code: MC1CurrenciesINRLanguagesEnglishStatesAndhra PradeshArunachal PradeshAssam AWS region details  Region: ap-south-1 Data center: New Delhi Country code: MC1 Continent: Asia Continent code: AS Phone code: 91',
    )

    // Back button
    await wrapper.get('[data-test="show-country-list"]').trigger('click')

    await nextTick()

    // Check if we see the list again
    expect(wrapper.findAll('[data-test="country-list-item"]')).toHaveLength(1)
  })
})
