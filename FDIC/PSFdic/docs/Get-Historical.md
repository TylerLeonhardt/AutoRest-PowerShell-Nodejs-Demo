---
external help file:
Module Name: FdicBankDataApiBeta
online version: https://docs.microsoft.com/en-us/powershell/module/fdicbankdataapibeta/get-historical
schema: 2.0.0
---

# Get-Historical

## SYNOPSIS
Returns aggregate financial and structure data, subtotaled by year, regarding finanical institutions.

## SYNTAX

```
Get-Historical [-AggBy <String>] [-AggLimit <Int32>] [-AggSumFields <String>] [-AggTermFields <String>]
 [-Download <String>] [-Fields <String>] [-Filename <String>] [-Filters <String>] [-Format <String>]
 [-Limit <Int32>] [-Offset <Int32>] [-SortBy <String>] [-SortOrder <String>] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
Returns aggregate financial and structure data, subtotaled by year, regarding finanical institutions.

## EXAMPLES

### Example 1: {{ Add title here }}
```powershell
PS C:\> {{ Add code here }}

{{ Add output here }}
```

{{ Add description here }}

### Example 2: {{ Add title here }}
```powershell
PS C:\> {{ Add code here }}

{{ Add output here }}
```

{{ Add description here }}

## PARAMETERS

### -AggBy
The field(s) by which data will be aggregated.
Valid values are 'YEAR' or 'YEAR,STNAME'.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggLimit
The limit on how many aggregated results will be displayed

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggSumFields
The field(s) for which aggregations will be summed or aggregated.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggTermFields
The field(s) for which aggregations will be counted for each unique term.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Download
Whether the data should be downloaded as a file.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fields
Comma delimited list of fields with aggregated annual financial data to return.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filename
The filename to use when downloading data.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filters
The filter criteria that refines the records included in the calculated result.
example: \>-
STNAME:"Alabama" AND YEAR:2005
Examples:
* Filter by Community Banks (CB) vs.
Savings Institutions (SI) 
`CB_SI:CB` 
* Filter by State name 
`STNAME:"Virginia"` 
* Filter for any one of multiple State names 
`STNAME:("West Virginia","Delaware")` 
* Filter data by the year range 
`YEAR:["2015" TO "2017"]`

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Format
The format of the data to return.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
The number of records to return.
Default is 10 and maximum is 10,000.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Offset
The offset of page to return.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns true when the command succeeds

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
Field name by which to sort returned data

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortOrder
Indicator if ascending (ASC) or descending (DESC)

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Sample.API.Models.IPaths7H3Qd6SummaryGetResponses200ContentApplicationJsonSchema

### System.String

## NOTES

ALIASES

## RELATED LINKS

