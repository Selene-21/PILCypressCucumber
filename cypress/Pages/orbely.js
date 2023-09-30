class OrbelyHome {
  //Header
  getMenuButtons() {
    return cy.get(".menu-desk");
  }

  //Imagenes Home
  getImgHome() {
    return cy.get(`div:nth-of-type(1)figure`);
  }

  getImgBtn() {
    return cy.get("a.btn-border.btn-leer");
  }

  //Textos

  //Footer

  //Generic
  getBtn() {
    return cy.get(
      "bu[src='https://orbely.com/wp-content/themes/thefuzzyfish/img/png/instagram.svg']"
    );
  }

  getGenericLink() {
    return cy.get("linkli:nth-of-type(2) [target]");
  }
}

module.exports = new OrbelyHome();
