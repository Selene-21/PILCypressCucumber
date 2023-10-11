class edenEvents {
  getEventTitle() {
    cy.get(".fechas-funciones span").first();
  }
}

module.exports = new edenEvents();
