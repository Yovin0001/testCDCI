import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4321", // Cambia al URL donde corre tu blog
    setupNodeEvents(on, config) {
      // Puedes agregar hooks o integraciones adicionales aquí si es necesario
    },
  },
});
