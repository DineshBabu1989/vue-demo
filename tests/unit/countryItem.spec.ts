import { mount } from '@vue/test-utils'
import CountryItem from '../../src/components/CountryItem.vue'
import { mockCountryItemData } from '../fixtures'

describe('CountryItem', () => {
  it('render component with props', () => {
    const wrapper = mount(CountryItem, {
      props: mockCountryItemData.props,
    })

    expect(wrapper.text()).toContain(mockCountryItemData.expected)
  })
})
