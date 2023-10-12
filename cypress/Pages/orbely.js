class OrbelyHome {
  //Header
  getMenuButtons() {
    return cy.get(".menu-desk > :nth-child(1)");
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
    return cy.get(":nth-child(2) > a > img");
  }

  getGenericLink() {
    return cy.get(".ml-2");
  }

  getButton() {
    return cy.get(".col-md-3 > .btn-border.btn-green.mt-4");
  }
}

module.exports = new OrbelyHome();
