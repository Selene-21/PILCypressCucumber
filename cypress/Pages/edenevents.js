class edenEvents {
  getEventTitle() {
    cy.get(".fechas-funciones span").first();
  }

  getEventmonth() {
    cy.get(".fechas-funciones span").last();
  }

  getEventDay() {
    cy.get("#calendarDay");
  }

  getEventHours() {
    cy.get("#calendarTime");
  }
}

module.exports = new edenEvents();
