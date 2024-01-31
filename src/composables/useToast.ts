import { ref, Ref } from 'vue'
import { TOAST_DELAY } from '../constants'

export interface Toast {
  message: string
  type: string
  global?: boolean
}

export default function useToast() {
  const toasts: Ref<Toast[]> = ref([])

  const showToast = (
    message: string,
    type: string = 'info',
    duration: number = TOAST_DELAY,
  ): void => {
    const toast: Toast = { message, type }
    toasts.value.push(toast)

    setTimeout(() => {
      removeToast(toasts.value.indexOf(toast))
    }, duration)
  }

  const showGlobalToast = (
    message: string,
    type: string = 'info',
    duration: number = TOAST_DELAY,
  ): void => {
    const toast: Toast = { message, type, global: true }
    toasts.value.push(toast)

    setTimeout(() => {
      removeToast(toasts.value.indexOf(toast))
    }, duration)
  }

  const removeToast = (index: number): void => {
    toasts.value.splice(index, 1)
  }

  return {
    toasts,
    showToast,
    showGlobalToast,
    removeToast,
  }
}
