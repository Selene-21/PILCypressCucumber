import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const yvytuHome = require("../../Pages/yvitupage");

//Aqui los When
When(`el usuario hace scroll hasta {string}`, (scrollToTxt) => {
  cy.contains(scrollToTxt).scrollIntoView();
});

When(`el usuario presiona el botón {string}`, (btnName) => {
  yvytuHome.getGebericBtn().contains(btnName).click();
});

//Aqui los Then
Then("visualiza en el header los botones {string}", (list) => {
  list = list.split(", ");

  yvytuHome.getMenuAllButton().each((btn, $index) => {
    if ($index != 0) {
      cy.wrap(btn).should("have.text", list[$index - 1]);
    }
  });
});

Then(`se visualizan las imágenes {string} en el banner`, (imglist) => {
  imglist = imglist.split(", ");

  imglist.forEach((banner, inx) => {
    yvytuHome
      .getCurrentImgBanner()
      .should(
        "have.class",
        `bg-[url('public/images/header-gallery/${banner}.png')]`
      );

    yvytuHome
      .getImgBtn()
      .its("length")
      .then((cantidad) => {
        if (cantidad != inx + 1) {
          yvytuHome
            .getImgBtn()
            .eq(inx + 1)
            .click();
          cy.wait(1000);
        }
      });
  });
});

Then(`el botón {string} no se visualiza`, (btnName) => {
  yvytuHome.getGebericBtn().contains(btnName).should("not.be.visible");
});

Then(`el botón {string} se visualiza`, (btnName) => {
  yvytuHome.getGebericBtn().contains(btnName).should("be.visible");
});
