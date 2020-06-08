---
external help file:
Module Name: FdicBankDataApiBeta
online version: https://docs.microsoft.com/en-us/powershell/module/fdicbankdataapibeta/search-structureinstitution
schema: 2.0.0
---

# Search-StructureInstitution

## SYNOPSIS
Returns a list of financial institutions.

## SYNTAX

```
Search-StructureInstitution [-Download <String>] [-Fields <String>] [-Filename <String>] [-Filters <String>]
 [-Format <String>] [-Limit <Int32>] [-Offset <Int32>] [-Search <String>] [-SortBy <String>]
 [-SortOrder <String>] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
Returns a list of financial institutions.

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
Comma delimited list of fields to search.

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
The filter for the bank search.
Examples:
* Filter by State name 
`STNAME:"West Virginia"` 
* Filter for any one of multiple State names 
`STNAME:("West Virginia","Delaware")` 
* Filter by last updated within an inclusive date range 
`DATEUPDT:["2010-01-01" TO "2010-12-31"]`
* Filter for deposits over 50,000,000 (50000 thousands of dollars) 
`DEP:[50000 TO *]`

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

### -Search
Flexible text search against institution records - currently only supporting name search.

Search supports text search and fuzzy matching, as opposed to filters that are exact matches.
Examples:
* Search by name
`NAME: Island`
* Search by name (fuzzy match)
`NAME: Iland`

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

### Sample.API.Models.IPathsEn61RzInstitutionsGetResponses200ContentApplicationJsonSchema

### System.String

## NOTES

ALIASES

## RELATED LINKS

