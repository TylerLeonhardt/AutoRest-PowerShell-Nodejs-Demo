"use strict";
exports.__esModule = true;
var fDICBankDataAPIBeta_1 = require("./lib/fDICBankDataAPIBeta");
var myFDIC = new fDICBankDataAPIBeta_1["default"]();
myFDIC.searchInstitutions({
    filters: "STALP:NC AND ACTIVE:1 AND CITY:Charlotte",
    limit: 100
}).then(function (val) { return console.log(val.data); });
