/// <reference types="vite/client" />

// If you need to extend the env variables, you can do so here:
interface ImportMetaEnv {
  NEXT_PUBLIC_API_URL: string;
  readonly VITE_API_URL: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
