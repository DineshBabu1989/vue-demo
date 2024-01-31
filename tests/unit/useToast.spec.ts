import { nextTick } from 'vue'
import useToast from '../../src/composables/useToast'

describe('useToast', () => {
  it('adds and removes toast', async () => {
    const { toasts, showToast, removeToast } = useToast()

    showToast('Test Message')

    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0].message).toBe('Test Message')
    expect(toasts.value[0].type).toBe('info')

    removeToast(0)

    await nextTick()

    // Check if the toast is removed
    expect(toasts.value.length).toBe(0)
  })

  it('shows global toast', async () => {
    const { toasts, showGlobalToast, removeToast } = useToast()

    // Add a global toast
    showGlobalToast('Global Test Message')

    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0].message).toBe('Global Test Message')
    expect(toasts.value[0].type).toBe('info')
    expect(toasts.value[0].global).toBe(true)

    removeToast(0)

    await nextTick()

    expect(toasts.value.length).toBe(0)
  })

  it('shows toast with custom type and duration', async () => {
    const { toasts, showToast } = useToast()

    // Add a toast with custom type and duration
    showToast('Custom Test Message', 'warning', 5000)

    // Check if the toast is added with the correct type
    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0].message).toBe('Custom Test Message')
    expect(toasts.value[0].type).toBe('warning')

    // Wait
    await new Promise((resolve) => setTimeout(resolve, 6000))

    expect(toasts.value.length).toBe(0)
  })
})
