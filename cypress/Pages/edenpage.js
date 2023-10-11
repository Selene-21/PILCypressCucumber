class edenHome {
  getSeacrhInput() {
    return cy.get("#espectaculoList");
  }

  getSearchSugestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }
}

module.exports = new edenHome();
