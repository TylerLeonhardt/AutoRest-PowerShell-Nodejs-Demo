import { FDICBankDataAPIBeta } from './fdic.js/lib/fDICBankDataAPIBeta'

const myFDIC = new FDICBankDataAPIBeta();

myFDIC.searchInstitutions({
    filters: "STALP:NC AND ACTIVE:1 AND CITY:Charlotte",
    limit: 100
}).then(val => console.log(val.data));
