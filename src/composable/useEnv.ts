interface Env {
  title: string
  url: string
  ignoreCheckPaths: string[]
  rootDomain: string
  keyPrefix: string
}

const useEnv = (): Env => {
  return {
    title: import.meta.env.VITE_TITLE,
    url: import.meta.env.VITE_URL,
    rootDomain: import.meta.env.VITE_ROOT_DOMAIN,
    keyPrefix: import.meta.env.VITE_KEY_PRE,
    ignoreCheckPaths: ['/welcome'],
  }
}

export default useEnv
