describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4321/')
    cy.contains("🧑‍🚀 Hello, YOvin001!"); // Verifica que el título esté presente
    cy.contains("Welcome to the official Astro blog starter template."); // Verifica que el texto de bienvenida esté presente
  });

});