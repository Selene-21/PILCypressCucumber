Feature: Home Yvytu

   Scenario: Verificar elementos del menu superior
      Given que un usuario está en la página de "Yvytu"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"

   Scenario: Verificar imagenes del banner principal
      Given que un usuario está en la página de "Yvytu"
      Then se visualizan las imágenes "01, 02, 03, 04" en el banner

   Scenario: Verificar comportamiento de botón Ir Arriba
      Given que un usuario está en la página de "Yvytu"
      Then el botón "Ir Arriba" no se visualiza
      When el usuario hace scroll hasta "Conocé una historia mágica."
      Then el botón "Ir Arriba" se visualiza
      When el usuario presiona el botón "Ir Arriba"
      Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
      And el botón "Ir Arriba" no se visualiza

   Scenario: Link reservar Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then visualiza el link "reserva_yvytu" redirecciona a "https://www.instagram.com/reserva_yvytu"

   Scenario: Ejemplo con Hashes en Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando Hashes
         | num | mes        |
         | 1   | enero      |
         | 2   | febrero    |
         | 3   | marzo      |
         | 4   | abril      |
         | 5   | mayo       |
         | 6   | junio      |
         | 7   | julio      |
         | 8   | agosto     |
         | 9   | septiembre |
         | 10  | octubre    |
         | 11  | noviembre  |
         | 12  | diciembre  |

   Scenario: Ejemplo de tablas con Rows en Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando Rows
         | nombre | apellido |
         | Agus   | Edme     |
         | Maria  | Vega     |
         | Des    | Mar      |

   Scenario: Ejemplo de tablas con RawTable en Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando RawTable
         | nombre | apellido |
         | Agus   | Edme     |
         | Maria  | Vega     |
         | Des    | Mar      |

   Scenario: Ejemplo con RowHash en Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando Rowhashash
         | num | mes        |
         | 1   | enero      |
         | 2   | febrero    |
         | 3   | marzo      |
         | 4   | abril      |
         | 5   | mayo       |
         | 6   | junio      |
         | 7   | julio      |
         | 8   | agosto     |
         | 9   | septiembre |
         | 10  | octubre    |
         | 11  | noviembre  |
         | 12  | diciembre  |

   Scenario: Ejemplo de tablas con flat en Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando flat
         | nombre | apellido | dni     |
         | Agus   | Edme     | 34xxxxx |
         | Maria  | Vega     | 16xxxxx |
         | Des    | Mar      | 34xxxxx |

   Scenario: Ejemplo de tablas con flat en 1 Yvytu
      Given que un usuario está en la página de "Yvytu"
      Then leo la siguiente tabla aplicando flat en 1

         | nombre | apellido | dni     |
         | Agus   | Edme     | 34xxxxx |
         | Maria  | Vega     | 16xxxxx |
         | Des    | Mar      | 34xxxxx |

   Scenario Outline: verificar cabaña <num>: <tipo-cabaña>
      Given que un usuario está en la página de "Yvytu"
      Then se verifica que la cabaña "<num>" llamada "tipo-cabaña" posee las siguientes caracteristicas "<items>"
      Examples:
         | num | tipo-cabaña | items                                                                                   |
         | 1   | Yaguarete   | para 4 personas, 2 habitaciones, baño con ducha, ropa de cama, wifi, aire acondicionado |
         | 2   | Arasari     | para 4 personas, 2 habitaciones, baño con ducha, ropa de cama, wifi                     |