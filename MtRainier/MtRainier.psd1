@{
# region definition
  RootModule = './MtRainier.psm1'
  ModuleVersion = '0.1.0'
  CompatiblePSEditions = 'Core', 'Desktop'
  Author = ''
  CompanyName = ''
  Copyright = ''
  Description = ''
  PowerShellVersion = '5.1'
  DotNetFrameworkVersion = '4.7.2'
  RequiredAssemblies = './bin/MtRainier.private.dll'
  FormatsToProcess = './MtRainier.format.ps1xml'
# endregion

# region persistent data
  GUID = '7c73f464-0285-4313-cb86-2a7821b50c85'
# endregion

# region private data
  PrivateData = @{
    PSData = @{
      Tags = ''
      LicenseUri = ''
      ProjectUri = ''
      ReleaseNotes = ''
    }
  }
# endregion

# region exports
  CmdletsToExport = 'Get-MtRainier', '*'
# endregion

}