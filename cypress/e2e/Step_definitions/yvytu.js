import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
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
        `bg-[url('public/images/header-gallery/${banner}.png')])`
      );
  });

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

Then(`el botón {string} no se visualiza`, (btnName) => {
  yvytuHome.getGebericBtn().contains(btnName).should("not.be.visible");
});

Then(`el botón {string} se visualiza`, (btnName) => {
  yvytuHome.getGebericBtn().contains(btnName).should("be.visible");
});

Then(`visualiza el link {string} redirecciona a {string}`, (btn, link) => {
  yvytuHome.getGenericLink().contains(btn).should("have.attr", "href", link);
});

Then(`leo la siguiente tabla aplicando Hashes`, (DataTable) => {
  DataTable = DataTable.hashes();
  cy.log(JSON.strigify(DataTable));
  cy.log(JSON.strigify(DataTable[0]));
  cy.log(JSON.strigify(DataTable[0].num));
  cy.log(JSON.strigify(DataTable[0].mes));
});

Then(`leo la siguiente tabla aplicando Rows`, (DataTable) => {
  DataTable = DataTable.rows();

  cy.log(JSON.strigify(DataTable));
  cy.log(JSON.strigify(DataTable[0]));
  cy.log(JSON.strigify(DataTable[0][0]));
  cy.log(JSON.strigify(DataTable[0][1]));

  cy.log(JSON.strigify(DataTable[1]));
  cy.log(JSON.strigify(DataTable[1][0]));
  cy.log(JSON.strigify(DataTable[1][1]));

  cy.log(JSON.strigify(DataTable[2]));
  cy.log(JSON.strigify(DataTable[2][0]));
  cy.log(JSON.strigify(DataTable[2][1]));
});

Then(`leo la siguiente tabla aplicando RawTable`, (DataTable) => {
  DataTable = DataTable.rawTable();

  cy.log(JSON.strigify(DataTable));
  cy.log(JSON.strigify(DataTable[0]));
  cy.log(JSON.strigify(DataTable[0][0]));
  cy.log(JSON.strigify(DataTable[0][1]));

  cy.log(JSON.strigify(DataTable[1]));
  cy.log(JSON.strigify(DataTable[1][0]));
  cy.log(JSON.strigify(DataTable[1][1]));

  cy.log(JSON.strigify(DataTable[2]));
  cy.log(JSON.strigify(DataTable[2][0]));
  cy.log(JSON.strigify(DataTable[2][1]));
});

Then(`leo la siguiente tabla aplicando Rowhash`, (DataTable) => {
  DataTable = DataTable.rowhash();
  cy.log(JSON.strigify(DataTable));
  cy.log(JSON.strigify(DataTable[10]));
});

Then(`leo la siguiente tabla aplicando flat`, (DataTable) => {
  DataTable = DataTable.raw();
  DataTable = DataTable.flat();
  cy.log(JSON.strigify(DataTable));
});

Then(`leo la siguiente tabla aplicando flat en 1`, (DataTable) => {
  DataTable = DataTable.rawTable[1];
  DataTable = DataTable.flat();
  cy.log(JSON.strigify(DataTable));
});

Then(
  `se verifica que la cabaña {string} llamada {string} posee las siguientes caracteristicas {string}`,
  (num, cabNombre, list) => {
    list = list.split(", ");

    cy.get("h3")
      .eq(num - 1)
      .should("contain.text", `cabaña ${cabNombre}`);
    yvytuHome
      .getItemCabCont()
      .eq(num - 1)
      .find("span")
      .each((item, $index) => {
        cy.wrap(item).should("contain.text", list[$index]);
      });
  }
);
