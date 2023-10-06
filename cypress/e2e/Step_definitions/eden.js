import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/edenpage");

//Los When Aqui

When(`escribe {string} en el campo buscador`, (words) => {
  edenHome.getSeacrhInput().type(words);
});
