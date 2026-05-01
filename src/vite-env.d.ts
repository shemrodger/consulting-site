/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOTES_API?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
