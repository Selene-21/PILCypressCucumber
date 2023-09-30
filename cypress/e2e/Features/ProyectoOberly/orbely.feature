Feature: Home orbely

    Scenario: Verificar elementos del menu superior
        Given que un usuario está en la página de "orbely"
        Then visualiza en el header los botones "Inicio, Nosotros, Nuestros Productos y Servicios, Experiencias, Novedades, Contacto"

    Scenario: Verificar botón/link "Instagram"
        Given que un usuario está en la página de "orbely"
        When realiza un scroll hasta "info@orbely.com" al pie de la página.
        Then visualiza el "botón" de Instagram que redirecciona a "https://www.instagram.com/orbely.agro/"