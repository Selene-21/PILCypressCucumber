import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OrbelyHome = require("../../Pages/orbely.js");

Then(
  `visualiza el "link/botón" {string} que redirecciona a {string}`,
  (btn, link) => {
    OrbelyHome.getGenericLink().contains(btn).should("have.attr", "href", link);
  }
);

When(`realiza un scroll hasta {string} al pie de la página`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});
