/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TITLE: string
  readonly VITE_URL: string
  readonly VITE_ROOT_DOMAIN: string
  readonly VITE_KEY_PRE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
