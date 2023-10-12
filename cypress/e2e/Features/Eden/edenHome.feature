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

