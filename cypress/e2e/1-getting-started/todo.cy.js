describe("Blog Page Tests", () => {
  it("should load the home page", () => {
    cy.visit("/"); // Esto visitará la página principal
    cy.contains("🧑‍🚀 Hello, YOvin001!"); // Verifica que el título esté presente
    cy.contains("Welcome to the official Astro blog starter template."); // Verifica que el texto de bienvenida esté presente
  });


  it("should have a valid link to Astro website", () => {
    cy.get('a[href="https://astro.build/"]').should("have.attr", "href", "https://astro.build/");
  });

  it("should show the footer", () => {
    cy.get("footer").should("be.visible"); // Verifica que el footer se muestre
  });
});
