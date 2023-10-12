class edenHome {
  getSeacrhInput() {
    return cy.get("#espectaculoList");
  }

  getSearchSugestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }

  getNavBarBtn() {
    return cy.get(".navbar-menu");
  }

  getEventBlock() {
    return cy.get(".fechas-funciones");
  }

  getVerbtn() {
    return cy.get(".contenido-todos-ver-funcion");
  }

  getEventPrice() {
    return cy.get('[class="col-12 mb-1"]');
  }
}

module.exports = new edenHome();
