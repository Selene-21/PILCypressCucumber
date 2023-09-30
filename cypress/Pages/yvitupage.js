class Yvytu {
  //Header
  getMenuAllButton() {
    return cy.get("nav#menu-nav a");
  }

  //Banner de Imagenes
  getCurrentImgBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }

  getImgBtn() {
    return cy.get("ul").first().find("li button");
  }

  //Textos

  //Footer

  //Generic
  getGebericBtn() {
    return cy.get("button");
  }
  getLink() {
    return cy.get("link");
  }
}

module.exports = new Yvytu();
