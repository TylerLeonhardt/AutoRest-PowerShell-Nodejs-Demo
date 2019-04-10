Describe "Get-MtRainier tests" {
    Context "E2E" {
        It "should return a MtRainier type" {
            Get-MtRainier | Should -BeOfType ([Sample.API.Models.MtRainier])
        }
        It "should return false because it's always cloudy in Seattle" {
            (Get-MtRainier).result | Should -BeFalse
        }
    }
}