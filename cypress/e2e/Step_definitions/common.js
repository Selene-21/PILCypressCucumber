import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario está en la página de {string}`, (urlName) => {
  const url = cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.visit(url);
});
