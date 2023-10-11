import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OrbelyHome = require("../../Pages/orbely.js");

Then(`visualiza en el header los botones {string}`, (list) => {
  list = list.split(", ");

  OrbelyHome.getMenuButtons().each((btn, $index) => {
    if ($index != 0) {
      cy.wrap(btn).should("have.text", list[$index - 1]);
    }
  });
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

When(`realiza un scroll hasta {string}`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});

When(
  `se posiciona sobre los {string} que aparecen sobre la misma`,
  (btnName) => {
    OrbelyHome.getBtnPolygon().contains(btnName).click();
  }
);

When(`visualiza el boton {String} y le hace click`, (btnTxt) => {
  OrbelyHome.getButton(btnTxt).click();
});

Then(`es redireccionado a la pagina {string}`, (linkNos) => {});
