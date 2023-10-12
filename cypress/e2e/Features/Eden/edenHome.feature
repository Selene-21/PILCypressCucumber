Feature: Test Eden

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Eden"
        When escribe "rock" en el campo buscador
        And hace click en la sugerencia "Cosquin Rock 2024"
        Then se verifica que el titulo sea "Cosquin Rock 2024"
        And la fecha es "10" de "febrero" a las "14:00" Hs

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Eden"
        When escribe "rock" en el campo buscador
        And hace click en la sugerencia "Cosquin Rock 2024"
        Then se verifican los suiguientes datos del evento
            | Titulo | Cosquin Rock 2024 |
            | Fecha  | 10                |
            | Mes    | febrero           |
            | Hora   | 14:00             |

    Scenario: Verificar precio de 1 cuarteto
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "CUARTETOS"
        And presiona el botón ver de "El Loco Amato"
        Then el precio que se visualiza tiene el formato correcto

    Scenario: Validar precio mediante Intercep
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "CUARTETOS"
        And presiona el botón ver de "2"
        Then el precio se verifica como correcto mediante respuesta de Intercep