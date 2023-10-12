Feature: Home orbely

    Scenario: Verificar elementos del menu superior
        Given que un usuario está en la página de "orbely"
        Then visualiza en el header los botones "Inicio, Nosotros, Nuestros Productos y Servicios, Experiencias, Novedades, Contacto"

    Scenario: Verificar logo/link "Whatsapp"
        Given que un usuario está en la página de "orbely"
        When realiza un scroll hasta "Comunicate con nosotros"
        Then visualiza el "logo de WhatsApp" que redirecciona a "https://api.whatsapp.com/send/?phone=%2B5493512252858&text&type=phone_number&app_absent=0"


    Scenario: Verificar funcionamiento de los "Botones flotantes en la Home"
        Given que un usuario está en la página de "orbely"
        Then visualiza una "imagen en la home"
        When se posiciona sobre los "Botones" que aparecen sobre la misma
        Then se visualiza la "informacion" que contiene cada botón

    Scenario: Verificar funcionamiento del botón "Conocer Más"
        Given que un usuario está en la página de "orbely"
        When visualiza el boton "CONOCER MÁS" y le hace click
        Then es redireccionado a la pagina "https://orbely.com/nosotros/"