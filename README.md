# PILCypressCucumber

# INDICE

## Instalacion

1. realizar un npm install
2. descargar las dependencias "@badeball/cypress-cucumber-preprocessor" y "@bahmutov/cypress-esbuild-preprocessor"
3. realizar la configuracion.

## Configuracion de Cucumber

1. Instalar las extensiones ""
2. Crear una carpeta "Feature" dentro de cypress/e2e
3. Crear las subcarpetas en base al proyecto a realizar, ejemplo: "Yvyty", "ClaroTienda", etc
4. Crear dentro de la subcarpeta un archivo con el nombre de los test a realizar y que sea ".feature", ejemplo: "yvytu.feature", "eden.feature", etc
5. Crear dentro de cypress/e2e otra carpeta para los pasos de cada test, que se denomine "step_definitons"
6. Dentro de la carpeta Step_definitions crear un archivo "common.js"

## Configuracion del ENV en caso de no usar .dotenv

1. ingresar a cypress.config.js y agregar el siguiente fragmento de código con los e-mail address y pass correspondientes a cada ENVIROMENT:

//Template.env

    E2E_TESTING_APLICATION_USERNAME_ACCESS:
    "xxxxxxx@gamil.com",
    E2E_TESTING_APLICATION_PASSWORD_ACCESS_DEV:
    "ZZZZZZZZ",
    E2E_TESTING_APLICATION_PASSWORD_ACCESS_TST:
    "LALALALALA",

## Reportes

Para generar los reportes es necesaria la siguiente configuracion:

1. Instalar la siguiente dependencia:

//Configuracion para el multiple cucumber reporter

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
