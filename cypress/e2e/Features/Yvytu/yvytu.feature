Feature: Home Yvytu

   Scenario: Verificar elementos del menu superior
      Given que un usuario está en la página de "Yvytu"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"

   Scenario: Verificar imagenes del banner principal
      Given que un usuario está en la página de "Yvytu"
      Then se visualizan las imágenes "01, 02, 03, 04" en el banner

   @focus

   Scenario: Verificar comportamiento de botón Ir Arriba
      Given que un usuario está en la página de "Yvytu"
      Then el botón "Ir Arriba" no se visualiza
      When el usuario hace scroll hasta "Conocé una historia mágica."
      Then el botón "Ir Arriba" se visualiza
      When el usuario presiona el botón "Ir Arriba"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
      And el botón "Ir Arriba" no se visualiza



