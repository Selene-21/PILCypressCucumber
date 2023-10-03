Feature: Home orbely

    Scenario: Verificar elementos del menu superior
        Given que un usuario está en la página de "orbely"
        Then visualiza en el header los botones "Inicio, Nosotros, Nuestros Productos y Servicios, Experiencias, Novedades, Contacto"

    Scenario: Verificar logo/link "Instagram"
        Given que un usuario está en la página de "orbely"
        When realiza un scroll hasta "info@orbely.com" al pie de la página.
        Then visualiza el "logo de Instagram" que redirecciona a "https://www.instagram.com/orbely.agro/"

    Scenario: Verificar funcionamiento de los "Botones flotantes en la Home"
        Given que un usuario está en la página de "orbely"
        Then visualiza una "imagen en la home"
        When se posiciona sobre los "Botones" que aparecen sobre la misma
        Then se visualiza la "informacion" que contiene cada botón