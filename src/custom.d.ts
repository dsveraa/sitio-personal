// custom.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SJ_API_KEY: string;
      SJ_ENDPOINT: string;
      // Agrega otras variables de entorno aquí si es necesario
    }
  }
}
