import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}", // Cambia a la ruta donde están tus pruebas
    baseUrl: "http://localhost:4321", // URL de tu servidor
  },
});
