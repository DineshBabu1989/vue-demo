import { mount } from '@vue/test-utils'
import ToastContainer from '../../src/components/Toast.vue'

describe('ToastContainer', () => {
  it('renders success toast with correct classes and success icon', async () => {
    const toasts = [{ type: 'success', message: 'Success Message' }]
    const wrapper = mount(ToastContainer, {
      props: { toasts, removeToast: jest.fn() },
    })

    const toastElement = wrapper.find('.bg-green-500')
    const iconElement = wrapper.find('.w-5.h-5.rounded-full.mr-2.bg-green-500')

    expect(toastElement.exists()).toBe(true)
    expect(iconElement.exists()).toBe(true)
    expect(wrapper.text()).toContain('Success Message')
  })

  it('renders warning toast with correct classes and warning icon', async () => {
    const toasts = [{ type: 'warning', message: 'Warning Message' }]
    const wrapper = mount(ToastContainer, {
      props: { toasts, removeToast: jest.fn() },
    })

    const toastElement = wrapper.find('.bg-yellow-500')
    const iconElement = wrapper.find('.w-5.h-5.rounded-full.mr-2.bg-yellow-500')

    expect(toastElement.exists()).toBe(true)
    expect(iconElement.exists()).toBe(true)
    expect(wrapper.text()).toContain('Warning Message')
  })

  it('renders error toast with correct classes and error icon', async () => {
    const toasts = [{ type: 'error', message: 'Error Message' }]
    const wrapper = mount(ToastContainer, {
      props: { toasts, removeToast: jest.fn() },
    })

    const toastElement = wrapper.find('.bg-red-500')
    const iconElement = wrapper.find('.w-5.h-5.rounded-full.mr-2.bg-red-500')

    expect(toastElement.exists()).toBe(true)
    expect(iconElement.exists()).toBe(true)
    expect(wrapper.text()).toContain('Error Message')
  })

  it('renders default toast with correct classes and default icon', async () => {
    const toasts = [{ type: 'unknown', message: 'Default Message' }]
    const wrapper = mount(ToastContainer, {
      props: { toasts, removeToast: jest.fn() },
    })

    const toastElement = wrapper.find('.bg-white')
    const iconElement = wrapper.find('.w-5.h-5.rounded-full.mr-2')

    expect(toastElement.exists()).toBe(true)
    expect(iconElement.exists()).toBe(true)
    expect(wrapper.text()).toContain('Default Message')
  })
})
