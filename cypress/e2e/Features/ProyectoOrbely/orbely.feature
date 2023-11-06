Feature: Home orbely

    Scenario: Verificar elementos del menu superior
        Given que un usuario está en la página de "orbely"
        Then observa en el header los botones "Inicio, Nosotros, Nuestros Productos y Servicios, Experiencias, Novedades, Contacto"

    Scenario: Verificar logo/link "Whatsapp"
        Given que un usuario está en la página de "orbely"
        When realiza un scroll hasta "Comunicate con nosotros"
        Then visualiza el "logo-whatsapp" que redirecciona a "http://wa.me/+5493512252858"


    Scenario: Verificar funcionamiento de los "Botones flotantes en la Home"
        Given que un usuario está en la página de "orbely"
        Then visualiza una "imagen en la home"
        When se posiciona sobre los botones se visualiza la informacion

    Scenario: Verificar funcionamiento del botón "Conocer Más"
        Given que un usuario está en la página de "orbely"
        When visualiza y realiza un click en el boton "CONOCER MÁS"
        Then es redireccionado a la pagina "https://orbely.com/nosotros/"