define({"624":{y:0,u:"../Content/179377.htm",l:-1,t:"TraceFileLocation",i:2.99170504074534E-05,a:"Description Specifies the directory location to place the log file and trace messages saved by Bank Importer. NOTE: The log file name will always have the same root name as the Configuration file name. Syntax TraceFileLocation = directory path Default TraceFileLocation = Importer directory Examples ..."},"625":{y:0,u:"../Content/179378.htm",l:-1,t:"LoadData",i:2.67661985126024E-05,a:"LoadData Description Determines whether or not data read from input files is loaded into Quantum. If this parameter is set to No, Bank Importer will process all data files as normal, except that none of the processed data will be loaded into Quantum. Syntax LoadData = Yes | No Default LoadData = Yes"},"626":{y:0,u:"../Content/179379.htm",l:-1,t:"TraceData",i:2.99170504074534E-05,a:"Description Determines whether Bank Importer will output, to the log file, a text representation of the bank flow contents as they are transformed via the data manipulation parameters (ie transaction rules) and loaded into Quantum. Note: There are no dependencies between the TraceData parameter and the ..."},"627":{y:0,u:"../Content/179380.htm",l:-1,t:"DebugPrintOutputToLogOnly",i:2.67661985126024E-05,a:"DebugPrintOutputToLogOnly This parameter is not recommended. It exists for backwards compatibility only. Use the LoadData, TraceData, and TraceLevel parameters to achieve the same effect."},"628":{y:0,u:"../Content/194122.htm",l:-1,t:"RollOnLogFile",i:2.67661985126024E-05,a:"RollOnLogFile Description Specifies whether or not the current Log file will be closed when it reaches the specified or default  maximum size  (if so, a new Log file will then be opened).  Log file names are date- and time-stamped. Syntax RollOnLogFile = Yes | No Default RollOnLogFile = No"},"629":{y:0,u:"../Content/194123.htm",l:-1,t:"MaximumLogFileSize",i:4.95174867581506E-05,a:"Description When RollOnLogFile is set to Yes , this parameter specifies the maximum size the current Log file can reach, after which it will be closed and a new one started. NOTE: Log file names are date- and time-stamped. Syntax MaximumLogFileSize = nnn kb | mb | gb Default MaximumLogFileSizeRoll = ..."},"630":{y:0,u:"../Content/179381.htm",l:-1,t:"Miscellaneous Parameters",i:2.67661985126024E-05,a:"Miscellaneous Parameters"},"631":{y:0,u:"../Content/179382.htm",l:-1,t:"Today",i:2.67661985126024E-05,a:"Description Sets the value to use for the date that the input files are processed on. This allows a different date than the current system date to be specified where old files are being processed, and an older \"processed on\" date is appropriate for the data in the file. Syntax Today = user-defined date ..."},"632":{y:0,u:"../Content/179684.htm",l:-1,t:"Manipulating Data",i:0.000102603825997763,a:"Two types of data manipulation syntax are currently supported by Bank Importer: IronPython scripting, and Legacy syntax. Data manipulation details are specified using Transaction Rules, which can be supplied via: one or more INI or TXT files - each specified with an  IncludeFile  parameter in the ..."},"633":{y:0,u:"../Content/179685.htm",l:-1,t:"IronPython Scripting for Data Manipulation",i:4.78111502420657E-05,a:"IronPython Scripting for Data Manipulation IronPython script syntax is supported for data manipulation via included Transaction Rule configuration files only (not Bank Transaction Rule Set records in Quantum Six, which currently support only Legacy syntax).."},"634":{y:0,u:"../Content/179703.htm",l:-1,t:"General Syntax",i:2.67661985126024E-05,a:"FOR ( ACCOUNT number | ACCOUNTSrange) | ALL ACCOUNTS ON STATEMENT | TRANSACTION { IronPython Code } Where: The FOR Account Selection clause  is the same as with legacy data manipulation syntax - namely: number is an account number string. If the account number has hyphens in it, then the account number ..."},"635":{y:0,u:"../Content/179704.htm",l:-1,t:"Source Object",i:2.67661985126024E-05,a:"The Source object is available for the ON STATEMENT clause only. Within the Iron Python code, Source object data fields can be accessed in the form source.FieldName, where FieldName is one of the following: SourceType - Returns the type of Import source: either BAI or TML. Balances - Returns either a ..."},"636":{y:0,u:"../Content/179705.htm",l:-1,t:"BAI Balances Object\n        ",i:2.67661985126024E-05,a:"BAI Balances Object\n         The BAI Balances object can be accessed from the Source object via the Balances field name. Methods HasBalance (Code as String) as Boolean Returns true if a balance exists for the specified Code. Properties Balance (Code as String) as BaiBankBalance Returns a BaiBankBalance ..."},"637":{y:0,u:"../Content/179706.htm",l:-1,t:"BaiBankBalance Object",i:2.67661985126024E-05,a:"BaiBankBalance Object The BaiBankBalance object is accessed either from the Balance property of the BAI Balances object, or by iterating over its Items property. The Available fields are: Code Amount"},"638":{y:0,u:"../Content/179707.htm",l:-1,t:"TML Balances Object",i:2.67661985126024E-05,a:"The TML Balances object can be accessed from the Source object via the Balances field name. Methods HasBalance (Name, BalanceType as String) as Boolean Returns true if the Balance exists. Name is ledgerBalance, collectedBalance, or availableBalance. Properties Balance (Name, BalanceType as String) as ..."},"639":{y:0,u:"../Content/179708.htm",l:-1,t:"TMLBankBalance Object",i:2.67661985126024E-05,a:"TMLBankBalance Object The TMLBankBalance object is accessed either from the Balance property of the TML Balances object, or by iterating over its Items property. The Available fields are. Name BalanceType Ccy Amount BalanceDate"},"640":{y:0,u:"../Content/179709.htm",l:-1,t:"Statement Object",i:2.67661985126024E-05,a:"The Statement object is available for both the ON TRANSACTION and ON STATEMENT clauses. Within the Iron Python code, Statement object data fields can be accessed in the form statement.FieldName, where FieldName is one of the following: Floats - Returns a collection of  Float  objects. Transactions - ..."},"641":{y:0,u:"../Content/179710.htm",l:-1,t:"Transaction Object",i:3.81418426353765E-05,a:"The Transaction object is available for the ON TRANSACTION clause only. TIP: The Transactions may also be accessed through the Statement.Transactions collection. Within the Iron Python code, Transaction object data fields can be accessed in the form transaction.FieldName, where FieldName is one of the ..."},"642":{y:0,u:"../Content/179711.htm",l:-1,t:"Float Object",i:3.81418426353765E-05,a:"Float Object The Float object must be accessed via the Statement.Floats collection. Float object data fields can be accessed in the form float.FieldName, where FieldName is one of the following: OffSet FloatAmount ForwardDate ForwardBalance"},"643":{y:0,u:"../Content/179686.htm",l:-1,t:"Legacy Syntax for Data Manipulation",i:6.12910205089499E-05,a:"Legacy syntax is supported for data manipulation via both rule entries in Quantum Six  Bank Transaction Rule Set  records*and Transaction Rules in included TXT or INI files. *NOTE: Bank Transaction Rule Sets currently do not support: Iron Python scripting, Summarizing Clauses, and specifying a ..."},"644":{y:0,u:"../Content/179688.htm",l:-1,t:"Account Selection Clause",i:4.95174867581506E-05,a:"This Account Selection clause syntax also applies when  Iron Python Scripting  is used for data manipulation. Within a  Bank Transaction Rule Set  entry, the Bank Account multi-select field corresponds to this Selection clause, and if an existing Rule is uploaded from a file, that field is populated ..."},"645":{y:0,u:"../Content/179689.htm",l:-1,t:"Condition Clause",i:0.000105860479103989,a:" Within a  Bank Transaction Rule Set  entry, the Additional Conditions text box content corresponds to the Condition clause, and if an existing Rule is uploaded from a file, that text box is populated from the Condition clause content. Description Specifies a condition that the applicable data must ..."},"646":{y:0,u:"../Content/179690.htm",l:-1,t:"Assignments Clause",i:0.000105860479103989,a:" Within a  Bank Transaction Rule Set  entry, the Assignments text box corresponds to this clause, and if an existing Rule is uploaded from a file, the text box is populated from the clause content. Description Sets bank statement and transaction data values to values that you specify (when the ..."},"647":{y:0,u:"../Content/179691.htm",l:-1,t:"Summarizing Clause",i:2.67661985126024E-05,a:" Summarizing clauses are currently not supported within a  Bank Transaction Rule Set  entry, and if an existing Rule is uploaded from a file, they will be ignored. Description A Summarizing clause: summarizes transactions satisfying the associated selection and/or condition clauses (if present), ..."},"648":{y:0,u:"../Content/179692.htm",l:-1,t:"Expression Elements",i:2.67661985126024E-05,a:"Expression Elements The following elements can be used in Condition and Assignments clauses, both in: Transaction Rules in included INI or TXT files and Bank Transaction Rule Set  entries (Additional Conditions and Assignments text box content)."},"649":{y:0,u:"../Content/179693.htm",l:-1,t:"Field Keywords in Expressions",i:6.844663292243E-05,a:"Field Keywords can be used to assign values to bank flow record fields prior to being imported into Quantum. There are two types: Read-only Statement Header fields, whose values can be used, but not changed; and Modifiable Transaction detail fields, whose values may be changed, and whose assignment ..."},"650":{y:0,u:"../Content/179694.htm",l:-1,t:"String Values in Expressions",i:6.27588108610429E-05,a:"Description Non-numeric character strings that may be included in expressions. Enclose the string within double quotes where the string value: includes punctuation characters (commas, colons, and so on) Could be wrongly interpreted as a Field Keyword is numeric but is to be treated as a character ..."},"651":{y:0,u:"../Content/179695.htm",l:-1,t:"Functions in Expressions",i:6.27588108610429E-05,a:"Description A built-in function applied to Field Keyword and/or value arguments and return a result. NOTE: Functions do not modify any arguments passed to them. Because functions return a result, they can be used in expressions in place of any field code or other specified value. Full details of ..."},"652":{y:0,u:"../Content/179696.htm",l:-1,t:"Operators in Expressions",i:6.27588108610429E-05,a:"Description Any of the following mathematical and logical operators (listed in their order of precedence): ^, +, -, *, /, \\, MOD, +, -, =, \u003c\u003e, \u003c, \u003e, \u003c=, \u003e=, LIKE, IS, NOT, AND, OR, XOR, EQV, IMP, MOD, AND, OR, XOR, LIKE These operators have the same characteristic as in Visual Basic or VB Script, ..."},"653":{y:0,u:"../Content/179697.htm",l:-1,t:"Types of Functions",i:8.01112584915942E-05,a:"Types of Functions"},"654":{y:0,u:"../Content/179698.htm",l:-1,t:"String Functions",i:2.67661985126024E-05,a:"LEN (string) Returns the length of a string. TRIM(text) Trims leading and trailing spaces from the specified text. LTRIM(text) Trims leading spaces only from the specified text. RTRIM(text) Trims trailing spaces only from the specified text. MID(text,start,length) Extracts a sub-string from the ..."},"655":{y:0,u:"../Content/179699.htm",l:-1,t:"Date Functions",i:2.67661985126024E-05,a:"Date Functions TODAY Returns today\u0027s date. TOMORROW Returns tomorrow\u0027s date. YESTERDAY Returns yesterday\u0027s date."},"656":{y:0,u:"../Content/179700.htm",l:-1,t:"Constants",i:2.67661985126024E-05,a:"Constants Constants are functions that take no parameters and always return the same value. CRLF Returns the Carriage Return/Line Feed sequence of characters (0x0D0A)."},"657":{y:0,u:"../Content/179701.htm",l:-1,t:"Regular Expression Functions",i:0.000951903704052891,a:"Regular expression functions allow complex searches of text data to be carried out. Functions RXTEST(expression, pattern[, ignorecase[, multiline]]) Returns true if a match is found for the specified regular expression. RXMATCH(expression, pattern[, ignorecase[, multiline [,multimatch [,delimiter]]]]) ..."},"658":{y:0,u:"../Content/179702.htm",l:-1,t:"Data Manipulation Examples (File)",i:0.000360616841272779,a:"The following example correspond to the example entries under  Bank Transaction Rule Entry Examples . That topic shows how these examples would appear in the Edit Transaction Rule dialog box following an Upload of the Configuration file containing them. IMPORTANT: Although each clause is shown here on ..."},"659":{y:0,u:"../Content/192571.htm",l:-1,t:"Using Bank Transaction Rule Sets ",i:5.56031984475628E-05,a:" Instead of using an IncludeFile parameter to provide Transaction Rules (for data manipulation) in a file, you can use a TransactionRuleSet parameter after creating rules in (or uploading them into) a Bank Transaction Rule Set record in Quantum Six. You can use the Quantum Six Bank Transaction Rule Set ..."},"660":{y:0,u:"../Content/192572.htm",l:-1,t:"TransactionRuleSet parameter",i:0.00015730377106686,a:"Description Applies the data manipulation details specified in a  Bank Transaction Rule Set  record defined in Quantum Six. Such records contain one or more rule entries, each with selected Accounts and a  Condition Clause  and  Assignments Clause  in Legacy syntax. Only one of these parameters is ..."},"661":{y:0,u:"../Content/192599.htm",l:-1,t:"Transaction Rule Entry Examples",i:0.000362149610950613,a:"The following Bank Transaction Rule Set page example entries correspond to Examples 1 through 7 under  Data Manipulation Examples (File) , and show how those examples would appear on the page following an Upload of the Configuration file containing them. NOTE: If these Rules had been uploaded from the ..."},"662":{y:0,u:"../Content/179285.htm",l:-1,t:"Bank Importer Command-Line support",i:2.67661985126024E-05,a:"Bank Importer Command-Line support Refer to  Command-Line Support ."},"663":{y:0,u:"../Content/179264.htm",l:-1,t:"Importing Deals using the Deal Import Service",i:0.000182987315102366,a:"Quantum readily accepts deal data in files produced by any process or application, provided they conform to the Quantum Import Data (*.QID), the Quantum RAW Data (*.QXT), or the tab-delimited(*.TXT) formats defined in  Import file formats and commands . Some deals also allow you to import  JSON format  ..."},"664":{y:0,u:"../Content/181836.htm",l:-1,t:"Configuring Import Folders (Deal Import Service)",i:0.000233086191012291,a:"The Deal Import Service watches the AppDataPath\\DealImportation\\Import folder for new files to import. See AppData Folder for more information on configuring the AppData location. The service will automatically create folders to store error logs, files in processing and processed files when it is run ..."},"665":{y:0,u:"../Content/179469.htm",l:-1,t:"Importing Files Using the Quantum Utility",i:2.67661985126024E-05,a:"NOTE: Before you can import files, the necessary  folder structure  must exist on the Quantum Server. CAUTION: The field order in your import file must match the field order on the deal form exactly. Any differences in the order of values may cause deals to save with incorrect calculations. Use a ..."},"666":{y:0,u:"../Content/179474.htm",l:-1,t:"Importing Files Automatically",i:2.67661985126024E-05,a:"NOTE: Before you can import files, the necessary  folder structure  must exist on the Quantum Server. CAUTION: Ensure the field order in your import file matches the field order on the relevant form exactly. Any differences in the order of values may cause deals to save with incorrect calculations. ..."},"667":{y:0,u:"../Content/179566.htm",l:-1,t:"Importing Actual and Projected Cash Flows ",i:0.0022893325378449,a:" The Actual and Projected Cash Flows Deal Importer supports the following QID-format fields: This Deal Importer operates in either Actual Cashflows Mode or Projected Cashflows mode. Additionally, G/L postings can be segregated into Bank flows and Broker flows. When using the QID format, you can use ..."},"668":{y:0,u:"../Content/179568.htm",l:-1,t:"Importing Bank Account Transfers  ",i:2.67661985126024E-05,a:"  The Bank Account Transfers Deal Importer supports the following QID-format fields. Mandatory fields bankacc1 entity1 bankacc2 entity2 cflowstype1 face_value cflowstype2 sectype dealer deal_dt Optional fields bank1 bank2 ccy comments external_ref_id external_ref_text settle_dt ticket_no NOTE:  Since ..."},"669":{y:0,u:"../Content/179569.htm",l:-1,t:"Importing Stock Account Transfers  ",i:2.67661985126024E-05,a:"  The Stock Account Transfers Deal Importer supports the following QID-format fields. Mandatory fields deal_dt settle_dt ccy face_value sectype dealer deal_set_id external_ref_id src_bankacc dst_bankacc src_cpdelacc (see Note below) dst_cpdelacc (see Note below) src_payment_category ..."},"670":{y:0,u:"../Content/179571.htm",l:-1,t:"Importing Deal Sets ",i:2.67661985126024E-05,a:" Before you import a Deal Set you need to specify the Deal Set mode: either Forecast or Standard, by using a corresponding  Deal Set Import file command . NOTE: If you do not specify the mode, the Deal Set is imported using the current mode set for the program. Fields that the importer supports vary ..."},"671":{y:0,u:"../Content/179572.htm",l:-1,t:"Importing Deals that Belong to a Deal Set ",i:2.67661985126024E-05,a:" The following deal types can be imported with a Deal Set. To import a deal belonging to a Deal Set Add the following text to the deal importation: deal_set_id=deal set number Importing example The following example shows the QID-format importation of an Actual Cash flow that belongs to Deal Set Number ..."},"672":{y:0,u:"../Content/179573.htm",l:-1,t:"Importing Deals with an External Reference",i:2.67661985126024E-05,a:"External Reference details can be optionally included in imported data for the following deal types: To import a deal with External Reference Details Add the following text as required to the deal importation: external_ref_id=user-specified id external_ref_text=user-specified text Importing example The ..."},"673":{y:0,u:"../Content/179570.htm",l:-1,t:"Importing Currency Option Deals ",i:2.67661985126024E-05,a:" For Currency Options deals, the following QID-format fields are supported. Premium Points There are two ways to import premium points for Currency Option deals: To import data that is in the same format as used in the Currency Options text box (as points), use the field name entrypremiumpt. To import ..."},"674":{y:0,u:"../Content/179631.htm",l:-1,t:"Importing Currency and Interest Rate Swap Deals ",i:2.67661985126024E-05,a:" The Swap Deal Importer currently supports the following QID-format fields. NOTES: Do not use Carriage Return/Line Feed in the Comments field. For multi-line comments, use the pipe character | to represent a new display line. For example, the following import file content: comments=Multi-line ..."},"675":{y:0,u:"../Content/194285.htm",l:-1,t:"Importing Commodity Swap Deals",i:2.67661985126024E-05,a:"Examples (QXT format) Fixed for Floating deal @CommoditySwapDeal *DealNumber=5260 $NEW Instrument=555 SwapTypeDeal=Fixed for Floating Counterparty=ABN Singapore Entity=Entity 1 PaymentDateOffsetType=End of Month BuySellPriceType=Buy Strategy=D24657 DealDate=2018-08-06 StartDate=2018-08-06 ..."},"676":{y:0,u:"../Content/179574.htm",l:-1,t:"Importing Futures Deals",i:2.67661985126024E-05,a:"The Futures Deal Importer supports the following QID-format fields: NOTE: The Strike Price field (now strike_dsp) was previously named strike_p. Update any Import files that include this field. Example (QXT format) @FuturesDeal *DealNumber=6334 $NEW TicketNumber=test Instrument=Coffee C Exchange=CBOT ..."},"677":{y:0,u:"../Content/179575.htm",l:-1,t:"Importing FRA Deals ",i:2.67661985126024E-05,a:" The FRA Deals Importer supports the following QID-format fields: Example (QXT format) @FraDeal *DealNumber=6322 $NEW TicketNumber=test Instrument=3v6 FRA BorrowInvest=BORROWING Counterparty=NZC Entity=Transactor - Level 2 Strategy=Strategy1 Currency=NZD FaceValue=10000000.0000 DealtRate=5 ..."},"678":{y:0,u:"../Content/179576.htm",l:-1,t:"Importing FX Deals ",i:0.0022893325378449,a:" The FX Deal Importer supports the following QID-format fields. Notes: \"Two-sided\" FX Deals use a field name prefix to enable the two copies of each field to be uniquely identified and populated. See Back-to-back FX deals and FX Swap deals below. Do not use Carriage Return/Line Feed in the Comments ..."},"679":{y:0,u:"../Content/179577.htm",l:-1,t:"Importing G/L Journal Entries",i:2.67661985126024E-05,a:"G/L Adjustments differ from the other import formats in that each G/L Adjustment record consists of a header and multiple spreadsheet rows. The Importer uses the SSRow command to support this. To understand how SSRow is used in both tab-separated and QID formats, see G/L Journal Entries, QID Format ..."},"680":{y:0,u:"../Content/179580.htm",l:-1,t:"Importing Hedge Relationships",i:2.67661985126024E-05,a:"The Hedge Relationships Deal Importer supports fields that relate to: The Hedge Relationship as a whole - see  Importer fields for Hedge Relationships Linked deals - see Importer fields for linked deals. Once your Import files are correctly set up, subsequent importing requires little or no ..."},"681":{y:0,u:"../Content/179581.htm",l:-1,t:"Importer Fields For Hedge Relationships ",i:5.2767670793229E-05,a:" In this section, fields supported specifically for the import of Hedge Relationships are grouped by the tabs on which they appear on the Hedge Relationships form.  Other tabs on that form are: Documentation tab You cannot import Documentation tab content using the Hedge Relationships Deal Importer. It ..."},"682":{y:0,u:"../Content/179582.htm",l:-1,t:"Deal Details tab fields, Imported Hedge Relationships",i:2.67661985126024E-05,a:"The Hedge Relationships Deal Importer supports the following QID-format fields from the Deal Details tab (Hedge Relationships). A setting of Y indicates that the corresponding check box in Hedge Relationships would be selected (on). N indicates that it would be cleared (off)."},"683":{y:0,u:"../Content/179590.htm",l:-1,t:"Events tab fields, Imported Hedge Relationships",i:2.67661985126024E-05,a:"The Hedge Relationships Deal Importer supports the following QID-format fields, from the Events tab. A setting of Y indicates that the corresponding check box in Hedge Relationships would be selected (on). N indicates that it would be cleared (off). NOTE: Values that must be calculated by Quantum are ..."},"684":{y:0,u:"../Content/179608.htm",l:-1,t:"Effectiveness tab fields, Imported Hedge Relationships",i:2.67661985126024E-05,a:"The Hedge Relationships Deal Importer supports QID-format fields corresponding to those fields on the Effectiveness tab. Method The Prospective Effectiveness method you select determines the fields available for you to enter data into.  * A setting of Y indicates that the corresponding check box in ..."},"685":{y:0,u:"../Content/179609.htm",l:-1,t:"Analysis Codes tab fields, Imported Hedge Relationships",i:2.67661985126024E-05,a:"There are ten separate fields for importing Analysis Codes for Hedge Relationships; named analyse01 through analyse10. Each contains an existing Analysis Set name, followed by one Analysis Code. See  Importing Analysis Codes .  The ability to add or change an Analysis Code during importation is ..."},"686":{y:0,u:"../Content/179611.htm",l:-1,t:"Importer fields for Linked Deals ",i:2.67661985126024E-05,a:" A linked deal in a Hedge Relationship is identified by a unique combination of three keys: Deal number Transaction type Start Date (the date from which the deal is linked to this Hedge Relationship) Values are required in these fields when you add, modify, or delete a linked deal. Default settings As ..."},"687":{y:0,u:"../Content/179617.htm",l:-1,t:"Editing a Linked Deal Using the Deal Importer ",i:3.00163825476807E-05,a:" If a defaulted setting for a linked deal can be changed on the Hedge Relationships form, it can also be changed through the Hedge Relationships Deal Importer. Of the three key fields (Deal Number, Transaction Type, and Start Date) that identify a particular linked deal however, only the Start Date can ..."},"688":{y:0,u:"../Content/179621.htm",l:-1,t:"Importing Hypothetical Derivative Deals ",i:2.67661985126024E-05,a:" Hypothetical deals of the following transaction types can be imported. Currency Options (Vanilla) Futures and Exchange Traded Options (ETOs) FX deals Interest Rate Options (Caps, Floors and Collars only) Swaps (Currency and Interest Rate) Once the dealing application is in Hypothetical mode, importing ..."},"689":{y:0,u:"../Content/179622.htm",l:-1,t:"Importing Interest Rate Option Deals ",i:2.67661985126024E-05,a:" The Interest Rate Options Deal Importer supports the following QID-format fields: To import customized Interest Rate Options deals, you must: Use the dm_data field. Set the customised field to Y. Supply deal map row items (dm_data entries) in the following order, with a pipe character (l) separating ..."},"690":{y:0,u:"../Content/179624.htm",l:-1,t:"Importing Money Market Deals",i:2.67661985126024E-05,a:"The Money Market Deal Importer supports the following QID-format fields. Notes Standard transactions store the purchase or sale capital price as a decimal in the bond_price field. Prices expressed in fractional terms (for example in Yield to Maturity instruments) are stored in a different field; ..."},"691":{y:0,u:"../Content/179626.htm",l:-1,t:"Importing Quotes and Quote updates",i:2.67661985126024E-05,a:"The Quotes Importer supports the following QID-format fields. NOTE: quotetype is required only when importing new quotes. It indicates the type of quote, as shown below in each case. deal_no is required only for updates to existing quotes and identifies the quote concerned. Bid fields in the shaded ..."},"692":{y:0,u:"../Content/179627.htm",l:-1,t:"Importing Repo Deals",i:2.67661985126024E-05,a:"Structuring the Import file Because identical fields may appear on both sides of a Repo, it is necessary to indicate in the importation file which component you are working with. Do this as follows. Organize the importation file so that it deals with one section at a time. Header section The Header ..."},"693":{y:0,u:"../Content/179629.htm",l:-1,t:"Repo Deal Importer field names ",i:2.67661985126024E-05,a:" The Repo Deal Importer supports the following QID-format fields. Header fields   Component fields Example (QXT format) @RepoDeal *DealNumber=4439 $NEW Instrument=Security Switch Counterparty=Bank of America - New York Entity=Netting Center Currency=USD CoverMargin=0 DaysConvention=ACTUAL/360 ..."},"694":{y:0,u:"../Content/179785.htm",l:-1,t:"Importing Security Deals",i:2.67661985126024E-05,a:"Example (QXT format) @SecurityDeal *DealNumber=3336 $NEW Instrument=USGB 8.5% 15/02/20 DealType=DEAL QuoteNumber=0 CalculationFieldAssigned=None BaseRateHasBeenSet=False IntMarginHasBeenSet=False Counterparty=AIM Global Entity=Benchmark BuySell=BUY BorrowInvest=INVESTMENT Currency=USD ..."},"695":{y:0,u:"../Content/179630.htm",l:-1,t:"Importing Security Identifier Records ",i:2.67661985126024E-05,a:" Example (Tab-Separated format) apptype name short_name ext_name primary_ident cusip isin other_ident issue_dt issuer_id ccy owner mature_dt coupon transtype thelevel exchange trading_style settlement_type exercise_strike_price expiry_date option_type unit_holding_security_id  secissue BHP BHP\tBroken ..."},"696":{y:0,u:"../Content/181835.htm",l:-1,t:"Importing Deals Into Analytics",i:0.000224903533472432,a:"Importing Deals Into Analytics NOTE: Before you can import files, the necessary  folder structure  must exist on the Quantum Server. Example: Currency Option Import File"},"697":{y:0,u:"../Content/181897.htm",l:-1,t:"Bond",i:2.67661985126024E-05,a:"Bond transtype = Bond Field Codes"},"698":{y:0,u:"../Content/181898.htm",l:-1,t:"Bond Option",i:2.67661985126024E-05,a:"Bond Option transtype = BO Field Codes"},"699":{y:0,u:"../Content/181900.htm",l:-1,t:"Cap Floor",i:2.67661985126024E-05,a:"Cap Floor transtype = IO Field Codes"},"700":{y:0,u:"../Content/181901.htm",l:-1,t:"Cross Currency Swap",i:2.67661985126024E-05,a:"Cross Currency Swap transtype = CS Field Codes"},"701":{y:0,u:"../Content/181902.htm",l:-1,t:"Currency Option",i:2.67661985126024E-05,a:"Currency Option transtype = CO Field Codes"},"702":{y:0,u:"../Content/181903.htm",l:-1,t:"Discount",i:2.67661985126024E-05,a:"Discount transtype = Discount Field Codes"},"703":{y:0,u:"../Content/181906.htm",l:-1,t:"FRA",i:2.67661985126024E-05,a:"FRA transtype = FR Field Codes"},"704":{y:0,u:"../Content/181907.htm",l:-1,t:"FRN",i:2.67661985126024E-05,a:"FRN transtype = FRN Field Codes"},"705":{y:0,u:"../Content/181908.htm",l:-1,t:"Futures",i:2.67661985126024E-05,a:"Futures transtype = FU Field Codes"},"706":{y:0,u:"../Content/181909.htm",l:-1,t:"Futures Option",i:2.67661985126024E-05,a:"Futures Option transtype = FO Field Codes"},"707":{y:0,u:"../Content/181910.htm",l:-1,t:"FX Forward",i:2.67661985126024E-05,a:"FX Forward transtype = FX Field Codes"},"708":{y:0,u:"../Content/181911.htm",l:-1,t:"FX Par Forward",i:2.67661985126024E-05,a:"FX Par Forward transtype = FX Field Codes"},"709":{y:0,u:"../Content/181912.htm",l:-1,t:"Interest Rate Swap",i:2.67661985126024E-05,a:"Interest Rate Swap transtype = IS Field Codes"},"710":{y:0,u:"../Content/181913.htm",l:-1,t:"Money Market",i:2.67661985126024E-05,a:"Money Market transtype = MM Field Codes"},"711":{y:0,u:"../Content/181914.htm",l:-1,t:"Swaption",i:2.67661985126024E-05,a:"Swaption transtype = SO Field Codes"},"712":{y:0,u:"../Content/181915.htm",l:-1,t:"Unit Holding",i:2.67661985126024E-05,a:"Unit Holding transtype = UNH Field Codes"},});