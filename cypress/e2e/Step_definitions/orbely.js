import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OrbelyHome = require("../../Pages/orbely.js");

Then(`visualiza en el header los botones {string}`, () => {
  OrbelyHome.getMenuButtons().contains(string);
});

Then(`visualiza el {string} que redirecciona a {string}`, (img, link) => {
  OrbelyHome.getGenericLink().contains(img).should("have.attr", "href", link);
});

Then(`visualiza una {string}`, (imgFlot) => {
  OrbelyHome.getImgHome2().contains(imgFlot);
});

Then(`se visualiza la {string} que contiene cada botón`, (showTxt) => {
  OrbelyHome.getBtnTxt().contains(showTxt);
});

When(`realiza un scroll hasta {string} al pie de la página`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});

When(
  `se posiciona sobre los {string} que aparecen sobre la misma`,
  (btnName) => {
    OrbelyHome.getBtnPolygon().contains(btnName).click();
  }
);
