Feature: Home Oberly

    Scenario: Verificar elementos del menu superior
        Given que un usuario está en la página de "Oberly"
        Then visualiza en el header los botones "Inicio, Nosotros, Nuestros Productos y Servicios, Experiencias, Novedades, Contacto"

    Scenario: Verificar link/botón "Contacto"
        Given que un usuario está en la página de "Oberly"
        Then visualiza el "link" que redirecciona a "https://lalalala.com/lalalala"