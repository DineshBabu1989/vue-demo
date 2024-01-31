import { mount } from '@vue/test-utils'
import CountryDetails from '../../src/components/CountryDetails.vue'
import { mockCountryDetailData } from '../fixtures'

describe('CountryDetails', () => {
  it('render component with props', () => {
    const wrapper = mount(CountryDetails, {
      props: mockCountryDetailData.props,
    })

    expect(wrapper.text()).toContain(mockCountryDetailData.expected)
  })
})
