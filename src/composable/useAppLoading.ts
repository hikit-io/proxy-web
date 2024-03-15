import { computed, ComputedRef } from 'vue'
import { createInjectionState, useToggle } from '@vueuse/core'

interface AppLoadingContext {
  loading: ComputedRef<boolean>
  toggleLoading: (value?: boolean | undefined) => void
  on: () => void
  off: () => void
}

const [useAppLoadingProvide, useAppLoadingInject] = createInjectionState((): AppLoadingContext => {
  const [loading, toggleLoading] = useToggle(false)
  const on = () => {
    loading.value = true
  }
  const off = () => {
    loading.value = false
  }
  return {
    loading: computed(() => loading.value),
    toggleLoading,
    on,
    off,
  }
})

const useAppLoading = () => {
  return useAppLoadingInject()!
}

export { useAppLoadingProvide, useAppLoading }
export type { AppLoadingContext }
