@yvytu
Feature: Home Yvytu

   Scenario: Verificar elementos del menu superior
      Given que un usuario está en la página de "Yvytu"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"

   Scenario: Verificar imagenes del banner principal
      Given que un usuario está en la página de "Yvytu"
      Then se visualizan las imágenes "01, 02, 03, 04" en el banner

   Scenario: Verificar comportamiento de botón Ir Arriba
      Given que un usuario está en la página de "Yvytu"
      Then el botón "Ir arriba" no se visualiza
      When el usuario hace scroll hasta "Conocé una historia mágica."
      Then el botón "Ir arriba" se visualiza
      When el usuario presiona el botón "Ir arriba"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
      And el botón "Ir arriba" no se visualiza

   Scenario: Link reservar Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then visualiza el link "Reservar" redirecciona a "https://wa.me/5493757454400"
      Then visualiza el link "reserva_yvytu" redirecciona a "https://www.instagram.com/reserva_yvytu/"
      And visualiza el link "Enviar mensaje" redirecciona a "https://wa.me/5493757454400"


   Scenario Outline: verificar cabaña <num>: <tipo-cabaña>
      Given que un usuario está en la página de "Yvytu"
      When el usuario hace scroll hasta "Nuestras Cabañas"
      Then se verifica que la cabaña "<num>" llamada "tipo-cabaña" posee las siguientes caracteristicas "<items>"
      Examples:
         | num | tipo-cabaña | items                                                                                   |
         | 1   | Yaguarete   | para 4 personas, 2 habitaciones, baño con ducha, ropa de cama, wifi, aire acondicionado |
         | 2   | Arasari     | para 4 personas, 2 habitaciones, baño con ducha, ropa de cama, wifi                     |

