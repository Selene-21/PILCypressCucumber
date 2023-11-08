import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OrbelyHome = require("../../Pages/orbely.js");

Then(`observa en el header los botones {string}`, (list) => {
  list = list.split(", ");
  OrbelyHome.getMenuButtons()
    .find("li")
    .each((button, $index) => {
      cy.wrap(button).should("contain.text", list[$index]);
    });
});

Then(`visualiza el {string} que redirecciona a {string}`, (img, link) => {
  OrbelyHome.getGenericLink().should("have.class", `ion-${img}`);
  OrbelyHome.getGenericLink().parent().should("have.attr", "href", link);
});

Then(`visualiza una {string}`, (imgFlot) => {
  if (imgFlot === "imagen en la home") {
    OrbelyHome.getImgHome2()
      .should(
        "have.attr",
        "src",
        "https://orbely.com/wp-content/themes/thefuzzyfish/img/home/son.jpg"
      )
      .and("be.visible");
  }
});

When(`realiza un scroll hasta {string}`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});

When(`se posiciona sobre los botones se visualiza la informacion`, () => {
  OrbelyHome.getBtnPolygon().each((fieldBtn, $inx) => {
    cy.wrap(fieldBtn).trigger("mouseover", { force: true });
    OrbelyHome.getInfo().should("be.visible");
  });
});

When(`visualiza y realiza un click en el boton {string}`, (btnTxt) => {
  cy.contains(btnTxt).click();
});

Then(`es redireccionado a la pagina {string}`, (linkNos) => {
  cy.url().should("eq", linkNos);
});
