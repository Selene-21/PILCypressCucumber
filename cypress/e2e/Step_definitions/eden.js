import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/edenpage");
const edenEvents = require("../../Pages/edenevents");

//Los When Aqui

When(`escribe {string} en el campo buscador`, (words) => {
  edenHome.getSeacrhInput().type(words);
});

When(`hace click en la sugerencia {String}`, (suggestionTxt) => {
  edenHome.getSearchSugestions().contains(suggestionTxt).click();
});

Then(`se verifica que el titulo sea {string}`, (eventTitle) => {
  edenEvents.getEventTitle().should("contain.text", eventTitle);
});

Then(
  `la fecha es {string} de {string} a las {string} Hs`,
  (day, month, hour) => {
    edenEvents.getEventDay.should("contain.text", day);
    edenEvents.getEventmonth.should("contain.text", month);
    edenEvents.getEventHours.should("contain.text", hour);
  }
);

Then(`se verifican los suiguientes datos del evento`, (Table) => {
  Table = Table.rowHash();
  edenEvents.getEventTitle().should("contain.text", Table["Titulo"]);
  edenEvents.getEventDay.should("contain.text", Table["Dia"]);
  edenEvents.getEventmonth.should("contain.text", Table["Mes"]);
  edenEvents.getEventHours.should("contain.text", Table["Hora"]);
});
