import FDIC from './lib/fDICBankDataAPIBeta'

const myFDIC = new FDIC();

myFDIC.searchInstitutions({
    filters: "STALP:NC AND ACTIVE:1 AND CITY:Charlotte",
    limit: 100
}).then(val => console.log(val.data));
