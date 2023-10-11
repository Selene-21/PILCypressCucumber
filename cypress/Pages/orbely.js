class OrbelyHome {
  //Header
  getMenuButtons() {
    return cy.get("nav.menu-desk");
  }

  //Imagenes Home
  getImgHome() {
    return cy.get("div:nth-of-type(1)figure");
  }

  getImgHome2() {
    return cy.get(`.image__container > img:nth-of-type(1)`);
  }

  getImgBtn() {
    return cy.get("a.btn-border.btn-leer");
  }

  getBtnPolygon() {
    return cy.get(".botones__flotantes");
  }

  getBtnTxt() {
    return cy.get(".grupo__02g > span:nth-of-type(1)");
  }

  //Textos

  //Footer

  //Generic
  getImgBtnIg() {
    return cy.get(
      "bu[src='https://orbely.com/wp-content/themes/thefuzzyfish/img/png/instagram.svg']"
    );
  }

  getGenericLink() {
    return cy.get("section#contacto > .container a[target='_blank']");
  }

  getButton() {
    return cy.get(".col-md-3 > .btn-border.btn-green.mt-4");
  }
}

module.exports = new OrbelyHome();
