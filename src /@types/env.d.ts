interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_ENABLE_MSW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
