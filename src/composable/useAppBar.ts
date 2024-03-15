import { computed, ComputedRef, Ref } from 'vue'
import { BasicColorSchema, createInjectionState, useColorMode, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useAccessToken } from './useAccessToken'
import { StyleProvider, Themes } from '@varlet/ui'
import { useCookies } from '@vueuse/integrations/useCookies'
import useEnv from './useEnv'

const [useAppBarProvide, useAppBarInject] = createInjectionState((): AppBarContext => {
  // state
  const { push } = useRouter()
  const { url, rootDomain, keyPrefix } = useEnv()
  const token = useAccessToken()

  const [showRight, toggleRight] = useToggle(false)
  const [showLeft, toggleLeft] = useToggle(false)

  const logout = () => {
    token.del()
    toggleRight(false)
    toggleLeft(false)
    window.location.href = `${url}/welcome`
  }
  const onProfile = () => {
    push('/profile').then(() => {})
  }

  const [showRightPop, toggleRightPop] = useToggle(false)
  const [showLeftPop, toggleLeftPop] = useToggle(false)

  const on = () => {
    toggleRight(true)
    toggleLeft(true)
  }
  const off = () => {
    toggleRight(false)
    toggleLeft(false)
  }

  const { get: getItem, set, remove: removeItem } = useCookies()
  const setItem = (key: string, value: string): void => {
    set(key, value, {
      domain: rootDomain,
      path: '/',
      expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 24),
    })
  }
  const COLOR_COOKIE_KEY = `${keyPrefix}_THEME`
  const colorMode = useColorMode({
    initialValue: 'light',
    storageKey: COLOR_COOKIE_KEY,
    storage: {
      getItem,
      setItem,
      removeItem,
    },
  })

  const toggleColor = (value: BasicColorSchema) => {
    switch (value) {
      case 'dark': {
        StyleProvider(Themes.dark)
        colorMode.value = 'dark'
        break
      }
      case 'light': {
        StyleProvider(null)
        colorMode.value = 'light'
        break
      }
    }
  }

  toggleColor(colorMode.value as 'dark' | 'light')
  setItem(COLOR_COOKIE_KEY, colorMode.state.value) // refresh expires

  return {
    showRight: computed(() => showRight.value),
    toggleRight,
    showLeft: computed(() => showLeft.value),
    toggleLeft,
    showRightPop,
    toggleRightPop,
    showLeftPop,
    toggleLeftPop,
    colorMode: colorMode.state,
    toggleColor,
    on,
    off,
    logout,
    onProfile,
  }
})

interface AppBarContext {
  showRight: ComputedRef<boolean>

  toggleRight: (value?: boolean | undefined) => boolean

  showLeft: ComputedRef<boolean>

  toggleLeft: (value?: boolean | undefined) => boolean

  showLeftPop: Ref<boolean>
  toggleLeftPop: (value?: boolean | undefined) => boolean

  showRightPop: Ref<boolean>
  toggleRightPop: (value?: boolean | undefined) => boolean

  colorMode: ComputedRef<BasicColorSchema>
  toggleColor: (value: BasicColorSchema) => void

  on: () => void
  off: () => void

  logout: () => void

  onProfile: () => void
}

const useAppBar = () => {
  return useAppBarInject()!
}

export { useAppBarProvide, useAppBar }
export type { AppBarContext }
