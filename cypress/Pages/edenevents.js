class EdenEvents {
  getEventTitle() {
    return cy.get(".fechas-funciones span").first();
  }

  getEventmonth() {
    return cy.get(".fechas-funciones span").last();
  }

  getEventDay() {
    return cy.get("#calendarDay");
  }

  getEventHours() {
    return cy.get("#calendarTime");
  }
}

module.exports = new EdenEvents();
