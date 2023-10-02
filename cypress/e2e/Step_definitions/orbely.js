import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OrbelyHome = require("../../Pages/orbely.js");

Then(`visualiza el {string} que redirecciona a {string}`, (img, link) => {
  OrbelyHome.getGenericLink().contains(img).should("have.attr", "href", link);
});

When(`realiza un scroll hasta {string} al pie de la página`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});
