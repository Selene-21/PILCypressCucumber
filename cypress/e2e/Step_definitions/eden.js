import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/edenpage");

//Los When Aqui

When(`escribe {string} en el campo buscador`, (words) => {
  edenHome.getSeacrhInput().type(words);
});

When(`hace click en la sugerencia {String}`, (suggestionTxt) => {
  edenHome.getSearchSugestions().contains(suggestionTxt).click();
});

Then(`se verifica que el titulo sea {string}`, () => {});

When(`la fecha es {string} de {string} a las {string} Hs`, () => {});

Then(`se verifican los suiguientes datos del evento`, (dataTable) => {
  dataTable = dataTable.rawTable();

  cy.log(DataTable);
  cy.log(DataTable[0]);
  cy.log(DataTable[0][0]);
  cy.log(DataTable[0][1]);

  cy.log(DataTable[1]);
  cy.log(DataTable[1][0]);
  cy.log(DataTable[1][1]);

  cy.log(DataTable[2]);
  cy.log(DataTable[2][0]);
  cy.log(DataTable[2][1]);
});
