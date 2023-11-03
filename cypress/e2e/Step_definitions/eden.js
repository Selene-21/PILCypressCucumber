import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/edenpage");
const edenEvents = require("../../Pages/edenevents");

//Los When Aqui

When(`escribe {string} en el campo buscador`, (words) => {
  edenHome.getSeacrhInput().type(words);
});

When(`hace click en la sugerencia {string}`, (suggestionTxt) => {
  edenHome.getSearchSugestions().contains(suggestionTxt).click();
});

When(`presiona el botón del header {string}`, (btnName) => {
  edenHome.getNavBarBtn().contains(btnName).click();
});

When(`presiona el botón ver de {string}`, (showName) => {
  cy.intercept("GET", "FUNC022233").as("getShow");
  if (isNaN(showName)) {
    edenHome
      .getEventBlock()
      .contains(showName)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  } else {
    edenHome
      .getEventBlock()
      .eq(showName - 1)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  }
  cy.wait("@getShow").then((Response) => {
    cy.writeFile("cypress/fixtures/Intercept/show.json", Response);
  });
});

When(`presiona el botón ver de {string}`, (showName) => {
  cy.intercept("GET", "FUNC022211").as("getShow");
  if (isNaN(showName)) {
    edenHome
      .getEventBlock()
      .contains(showName)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  } else {
    edenHome
      .getEventBlock()
      .eq(showName - 1)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  }
  cy.wait("@getShow").then((Response) => {
    cy.writeFile("cypress/fixtures/Intercept/show.json", Response);
  });
});

//Los Then Aquí

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

Then(`el precio que se visualiza tiene el formato correcto`, () => {
  const precio = new RegExp(
    "\\$[0-9](1,3).[0-9]{3},[0-9]{2}.\\+ \\$[0-9](1,3).[0-9]{3},[0-9]{2}"
  );
  edenHome.getEventPrice().contains(precio);
});

Then(
  `el precio se verifica como correcto mediante respuesta de Intercep`,
  () => {
    cy.fixture("Intercept/show.json").then((resp) => {
      cy.log(`El body es: ${JSON.stringify(resp.Response.body)}`);
    });
  }
);

Then(
  `el precio se verifica como correcto mediante respuesta de Intercep`,
  () => {
    cy.fixture("Intercept/show.json").then((resp) => {
      const precios = resp.Response.body.Precios;
      //cy.log(`El body es: ${JSON.stringify(precios)}`);
      edenHome.getEventPrice().each((precioShow, inx) => {
        const precioUb = precios[inx];
        const precioEnt = precioUb.PrecioEntrada;
        const precioServ = precioUb.ServiceCharge;
        cy.wrap(precioShow).should(
          "contain.text",
          `${precioEnt} + ${precioServ}`
        );
      });
    });
  }
);

Then(
  `el precio se verifica como correcto mediante respuesta de Servicio`,
  () => {
    cy.request({
      method: "GET",
      url: "https://www.edenentradas.com.ar/edenventarestapi/api/contenido/funcion/FUNC022211",
    }).Then((resp) => {
      //cy.log(JSON.stringify(resp));
      const precios = resp.body.Precios;
      edenHome.getEventPrice().each((precioShow, inx) => {
        const precioUb = precios[inx];
        const precioShowTxt = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`;
        edenHome
          .getEventUbicaion()
          .eq(inx)
          .should("contain.text", precioUb.Nombre);
        cy.wrap(precioShow).should("contain.text", precioShowTxt);
      });
    });
  }
);
