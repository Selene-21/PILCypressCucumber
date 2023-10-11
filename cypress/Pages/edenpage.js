class edenHome {
  getSeacrhInput() {
    return cy.get("#espectaculoList");
  }
}

module.exports = new edenHome();
