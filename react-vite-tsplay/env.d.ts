/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    readonly test: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }