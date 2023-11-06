import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("leo la siguiente tabla aplicando Hashes", (DataTable) => {
  DataTable = DataTable.hashes();
  cy.log(JSON.stringify(DataTable));
  cy.log(JSON.stringify(DataTable[0]));
  cy.log(JSON.stringify(DataTable[0].num));
  cy.log(JSON.stringify(DataTable[0].mes));
});

Then("leo la siguiente tabla aplicando Rows", (DataTable) => {
  DataTable = DataTable.rows();

  cy.log(JSON.stringify(DataTable));
  cy.log(JSON.stringify(DataTable[0]));
  cy.log(JSON.stringify(DataTable[0][0]));
  cy.log(JSON.stringify(DataTable[0][1]));

  cy.log(JSON.stringify(DataTable[1]));
  cy.log(JSON.stringify(DataTable[1][0]));
  cy.log(JSON.stringify(DataTable[1][1]));

  cy.log(DataTable[2]);
  cy.log(DataTable[2][0]);
  cy.log(DataTable[2][1]);
});

Then(`leo la siguiente tabla aplicando RawTable`, (DataTable) => {
  DataTable = DataTable.rawTable();

  cy.log(DataTable);
  cy.log(DataTable[0]);
  cy.log(DataTable[0][0]);
  cy.log(DataTable[0][1]);

  cy.log(DataTable[1]);
  cy.log(DataTable[1][0]);
  cy.log(DataTable[1][1]);

  cy.log(DataTable[2]);
  cy.log(DataTable[2][0]);
  cy.log(DataTable[2][1]);
});

Then(`leo la siguiente tabla aplicando Rowshash`, (DataTable) => {
  DataTable = DataTable.rowshash();
  cy.log(DataTable);
  cy.log(DataTable[10]);
});

Then(`leo la siguiente tabla aplicando flat`, (DataTable) => {
  DataTable = DataTable.raw();
  DataTable = DataTable.flat();
  cy.log(DataTable);
});

Then(`leo la siguiente tabla aplicando flat en 1`, (DataTable) => {
  DataTable = DataTable.rawTable[1];
  DataTable = DataTable.flat();
  cy.log(DataTable);
});
