# PILCypressCucumber

# INDICE

- [Instalacion](#instalacion)
- [Configuracion-de-cucumber](#configuracion-de-cucumber)
- [Configuracion-del-ENV](#configuracion-del-env-en-caso-de-no-usar-dotenv)
- [Reportes](#reportes)

## Instalacion

1. Realizar un npm install
2. Descargar las dependencias "@badeball/cypress-cucumber-preprocessor" y "@bahmutov/cypress-esbuild-preprocessor"
3. Realizar la configuracion.

## Configuracion de Cucumber

1. Instalar las extensiones "Cucumber(Gherkin) Full Suport", "Cucumber Formatter", "cypress-cucumber-steps".
2. Crear una carpeta "Feature" dentro de cypress/e2e
3. Crear las subcarpetas en base al proyecto a realizar, ejemplo: "Yvytu", "ClaroTienda", etc
4. Crear dentro de la subcarpeta un archivo con el nombre de los test a realizar y que sea ".feature", ejemplo: "yvytu.feature", "eden.feature", etc. Aqui iran los pasos de los test en formato BDD.
5. Crear dentro de cypress/e2e otra carpeta para los pasos de cada test, que se denomine "step_definitons", que es donde iran las lineas de codigo que haran funcionar el test.
6. Dentro de la carpeta Step_definitions crear un archivo "common.js", en el cual iran todos los "Given" de nuestros "Scenarios".

## Configuracion del ENV en caso de no usar .dotenv

1. ingresar a cypress.config.js y agregar el siguiente fragmento de código con los e-mail address y pass correspondientes a cada ENVIROMENT:

//Template.env

    E2E_TESTING_APLICATION_USERNAME_ACCESS:
    "xxxxxxx@gamil.com",
    E2E_TESTING_APLICATION_PASSWORD_ACCESS_DEV:
    "ZZZZZZZZ",
    E2E_TESTING_APLICATION_PASSWORD_ACCESS_TST:
    "LALALALALA",

---

## Reportes

Para generar los reportes es necesaria la siguiente configuracion:

1. Ingresar al package.json
2. Buscar donde se configuro la funcion de los step definitions
3. Agregar las siguientes lineas de codigo:

---

"html": {
"enabled": true,
"output": "reports/cucumber-report.html"
},
"messages": {
"enabled": true,
"output": "reports/messages.ndjson"
},

---

//Configuracion para el multiple-cucumber-reporter

1. Para que se pueda generar el reporte mediante el codigo "generate:report" es necesario:
   a) Instalar el multiple-cucumber-html-reporter desde: https://www.google.com/url?q=https://www.npmjs.com/package/multiple-cucumber-html-reporter&sa=D&source=editors&ust=1696974764212630&usg=AOvVaw19cQpCfhBRMpS18ePGsOh5
   b) Descargar el archivo "..." desde: https://www.google.com/url?q=https://github.com/cucumber/json-formatter&sa=D&source=editors&ust=1696974764213089&usg=AOvVaw2IyVElsZGuVtNG4a9GQAdX en la carpeta del proyecto y renombrarlo como "cucumber-json-formatter.exe"
   c) Crear un archivo .js denominado "cucumber-html-report" y escribir la siguiente configuracion, realizando los ajustes necesarios en caso de utilizar otro navegadores, versiones y/o sistema operativo:

const report = require("multiple-html-cucumber-reporter");

report.generate({
jsonDir: "report",
reportPath: "report/formateado",
metaData: {
browser: {
name: "chrome",
version: "117",
},
device: "Local machine",
platform: {
name: "windows",
version: "10",
},
},
});

2. Ejecutar el comando.
