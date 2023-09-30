import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const OberlyHome = require("../../Pages/oberly.js");

Then(
  `visualiza el "link" {string} que redirecciona a "" {string}`,
  (btn, link) => {
    OberlyHome.getGenericLink().contains(btn).should("have.attr", "href", link);
  }
);
