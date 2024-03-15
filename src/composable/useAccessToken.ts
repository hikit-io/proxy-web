import { useCookies } from '@vueuse/integrations/useCookies'
import { computed, Ref } from 'vue'
import useEnv from './useEnv'

export interface AccessTokenContext {
  name: Ref<string>
  get: () => string
  del: () => void
}

const useAccessToken = (): AccessTokenContext => {
  const cookies = useCookies()
  const { rootDomain, keyPrefix } = useEnv()
  const get = () => {
    const cookie = cookies.get<string>(keyPrefix)
    console.log(cookie)
    return cookie
  }
  const del = () => {
    cookies.remove(keyPrefix, {
      path: '/',
      domain: rootDomain,
    })
    cookies.remove(`${keyPrefix}_NAME`, {
      path: '/',
      domain: rootDomain,
    })
  }
  const name = computed(() => cookies.get<string>(`${keyPrefix}_NAME`))
  return {
    name,
    get,
    del,
  }
}

export { useAccessToken }
