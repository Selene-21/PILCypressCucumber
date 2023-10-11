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
