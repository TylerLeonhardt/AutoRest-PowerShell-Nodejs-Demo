@{
  GUID = '96440914-d422-4476-897e-ba0ce5eaeacb'
  RootModule = './FdicBankDataApiBeta.psm1'
  ModuleVersion = '0.1.0'
  CompatiblePSEditions = 'Core', 'Desktop'
  Author = ''
  CompanyName = ''
  Copyright = ''
  Description = ''
  PowerShellVersion = '5.1'
  DotNetFrameworkVersion = '4.7.2'
  RequiredAssemblies = './bin/FdicBankDataApiBeta.private.dll'
  FormatsToProcess = './FdicBankDataApiBeta.format.ps1xml'
  FunctionsToExport = 'Get-Failure', 'Get-Historical', 'Search-StructureInstitution', 'Search-StructureLocation', '*'
  AliasesToExport = '*'
  PrivateData = @{
    PSData = @{
      Tags = ''
      LicenseUri = ''
      ProjectUri = ''
      ReleaseNotes = ''
    }
  }
}
