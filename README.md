# Simplify testing of REST APIs using PowerShell and AutoRest

[A talk](https://www.meetup.com/Seattle-Web-App-Developers-Group/events/259603088/) I gave at the Seattle Web App Developers Group meetup on April 10th, 2019.

## Prereqs

1. Get [Node.js](https://nodejs.org/en/).
1. Get [PowerShell](https://github.com/powershell/powershell#get-powershell).
1. `npm install -g autorest@beta`

## AutoRest demos

### MtRainier

A simple web app and API that says whether Mt. Rainier is visible.

* OpenAPI Spec: mtrainier.yml & mtrainier.json
* Language: PowerShell
* Generated Code Folder: MtRainier

#### Build steps for MtRainier

1. `autorest --input-file=./mtrainier.yml --output-folder=./MtRainier --powershell`
1. `cd MtRainier`
1. `./build-module.ps1 -Run` - build and start a new instance of PowerShell with the module loaded.
1. `Get-MtRainier` - Run the command.

### FDIC

I got this from the [official FDIC API docs page](https://banks.data.fdic.gov/docs/)! The only modification was combining it into 1 single yml.

* OpenAPI Spec: fdic.yml
* Language: Node.js
* Generated Code Folder: FDIC

#### Build steps for FDIC

1. `autorest --input-file=./fdic.yml --output-folder=./FDIC --nodejs`
1. `cd FDIC`
1. `npm install` - to install dependencies.
1. `tsc fdic-test.ts` - optional, to compile the TypeScript.
1. `node fdic-test.js` - run the code.

## Links and Links

* PowerShell
  * [GitHub](https://github.com/PowerShell/PowerShell)
  * [Docs](https://aka.ms/powershell)
* AutoRest
  * [GitHub](https://github.com/Azure/AutoRest)
  * [PowerShell Generator GitHub](https://github.com/Azure/AutoRest.powershell)
  * [Great first blog post](https://devblogs.microsoft.com/powershell/cmdlets-via-autorest)
* [OpenApi Initiative](https://openapis.org)
* Cool OpenApi/Swagger tools
  * https://swagger.io
  * https://openapi.tools/
  * https://devkimchi.com/2019/02/02/introducing-swagger-ui-on-azure-functions/
