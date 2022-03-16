define({"467":{y:0,u:"../Content/180851.htm",l:-1,t:"Included Accounts (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"The Select Included Accounts browse list loads all Bank or Broker Accounts. Since these accounts are a Resource, when Resource Security is enabled, the Select Included Accounts list will be filtered according to the rights of the current User. In general the list will be similar to the list this User ..."},"468":{y:0,u:"../Content/180857.htm",l:-1,t:"Pool Assignment grid (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"When Resource Security is enabled, the following Pool Assignments will be filtered according to the current User\u0027s security profile. Account CCY Pools Account Entity Pools Account Pools Bank Pools Counterparty Pools Deal Entity Pools Instrument Pools  For CashXplorer Pools to work correctly, Users must ..."},"469":{y:0,u:"../Content/180860.htm",l:-1,t:"Worksheet Adjustment (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"The following Resources in the Worksheet Adjustments area will be affected by the current User\u0027s rights when Resource Security is enabled Account Number Counterparty Currency Entity Instrument The current user only needs Read rights to these Resources in order to create or view a Worksheet Adjustment."},"470":{y:0,u:"../Content/180861.htm",l:-1,t:"Filters (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"CashXplorer supports view level and ad hoc filters. Selecting a filter opens a window in which the user can select records to view. Since this window loads all Resources from the underlying table, the following will be affected by the Resource Security settings for the current user. Account Attribute ..."},"471":{y:0,u:"../Content/180862.htm",l:-1,t:"Cash Concentration (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"Cash Concentration Hierarchy The Concentration Hierarchy dialog box displays Bank Accounts in sequence. However, when Resource Security is applied, the current user will see only the Bank Accounts they have access to. In this case, the hierarchy may look incomplete. Cash Concentration Transfers When ..."},"472":{y:0,u:"../Content/180863.htm",l:-1,t:"Data Version History (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"In the History tab\u0027s Accounts grid, when Resource Security is enabled, the following behavior applies: Included Accounts The list of Included Accounts will include only Bank Accounts to which the current user has access. Pool Definitions The list of Pool Definitions will include only those to which the ..."},"473":{y:0,u:"../Content/180864.htm",l:-1,t:"Worksheet grid (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"When Resource Security is enabled the following rows and columns of the Worksheet display will be filtered according to the current user\u0027s access to Resources: Rows Counterparty Counterparty Group Deal Entity Deal Entity Group Instrument Instrument Group Columns Account Account Currency Account Entity ..."},"474":{y:0,u:"../Content/180866.htm",l:-1,t:"Drill Down Details (CashXplorer and Resource Security)",i:2.67661985126024E-05,a:"Drill Down Details (CashXplorer and Resource Security) When Resource Security is enabled, the Drill Down Details dialog box displays flows (which can be deal-related) appropriate to the current user\u0027s Resource Security profile."},"475":{y:0,u:"../Content/187425.htm",l:-1,t:"Applying Resource Security to Crystal Mapping",i:0.000695845624317543,a:"Crystal Mapping  has functionality that is specific to Crystal Reports attached to non-inquiry and non-dealing programs. This functionality applies to both Quantum seed reports and any user-defined reports, and involves global Resource Security settings for each Crystal Report. When Resource Security ..."},"476":{y:0,u:"../Content/187431.htm",l:-1,t:"Applying Resource Security to Crystal Seed Reports",i:0.000174634357432028,a:"When  Resource Security  is enabled, Resource Security filtering for the following seed Crystal reports needs to be set using the  Crystal Mapping  page. Bank Account seed reports Business Structure seed report Counterparty seed reports For these seed Crystal reports, the following settings are ..."},"477":{y:0,u:"../Content/187434.htm",l:-1,t:"Applying Resource Security to Queries and Reports",i:6.99901135355336E-05,a:"When you enable Query resource  filtering  for Resource Security: you can control user or user group access to public queries and the actions they can perform on associated pages (for example, Run, Configure, Save, Delete, and so on), Module Security and Resource Security  work together  to allow or ..."},"478":{y:0,u:"../Content/187369.htm",l:-1,t:"Effects of Module Security and Resource Security on Query",i:5.84533033372694E-05,a:"Module Security and Resource Security work in conjunction to allow or restrict actions on reporting and processing pages. In the table below: Private indicates that  Configure Private Queries  permission is required in Module Security for the associated module. Public indicates that  Configure Public ..."},"479":{y:0,u:"../Content/172505.htm",l:-1,t:"Analytics Resource Security",i:6.76599773466017E-05,a:"Analytics Resource Security allows users of the system to specify which resources a user can view and edit. Analytics supports resource security on the following resources: Bank Accounts Counterparties Entities Instruments Currencies The setup and configuration of resource security in Analytics occurs ..."},"480":{y:0,u:"../Content/172506.htm",l:-1,t:"Integration with Quantum",i:2.67661985126024E-05,a:"Analytics Resource Security setup is now automatically imported from Quantum. The replication of other data still works as before, via Replication Manager. NOTE: Since Exchanges cannot be resource-secured in Quantum and they are imported into Analytics as Counterparties, all users are automatically ..."},"481":{y:0,u:"../Content/172507.htm",l:-1,t:"Static Data Maintenance",i:2.67661985126024E-05,a:"Resource Security  controls which resources can be viewed and edited within the Counterparty, Entity, Instrument, Currency and Bank Account Static Data maintenance modules. Linked Resources Even if a user has full write access to a resource, but does not have write access to a linked resource (for ..."},"482":{y:0,u:"../Content/172512.htm",l:-1,t:"Pricing Screens",i:2.67661985126024E-05,a:"A user\u0027s access to the underlying resources on a deal affects the access that user has to the deal (which is different from the maintenance screens). So the access a user has is the minimum level of access the user has to the deal resources. Example If a user has full access to the deal counterparty, ..."},"483":{y:0,u:"../Content/179791.htm",l:-1,t:"Queries",i:2.67661985126024E-05,a:"Executing a query returns deals that the user has at least read access to the Counterparty, Entity, Instrument, and Currency. For cash flow queries, the resource security on the Bank Account is also applied, but be aware that notional cash flows do not have Bank Accounts, therefore they are always ..."},"484":{y:0,u:"../Content/179792.htm",l:-1,t:"Limits",i:2.67661985126024E-05,a:"Limits records are filtered like deals.   If you have full access to all the resources on the limits record, you can view and edit the record.  If you have read access to one resource and at least read access to all the other resources, the limit record is displayed but the row will be read only.   If ..."},"485":{y:0,u:"../Content/167623.htm",l:-1,t:"Implementing Static Data Approval",i:0.0059660492504048,a:"The Static Data Approval feature in Quantum assists your site with Sarbanes-Oxley compliance. It offers a single or dual approval facility for selected static data types, system-wide. TIP: You can also set up the following types of security: Module security - where specific users and user groups can be ..."},"486":{y:0,u:"../Content/67745.htm",l:-1,t:"About Static Data Approval",i:2.67661985126024E-05,a:"Static Data Approval offers a dual approval facility for some static data types, including. Bank Account - covers Bank (cash), Broker, Stock, and Money Market Fund accounts (Static menu) Bank Account Defaults - covers Bank (cash), Broker, and Stock account defaults (Rules menu) Counterparty - covers ..."},"487":{y:0,u:"../Content/167630.htm",l:-1,t:"How Static Data Approval Works",i:0.00221586258730849,a:" Entity and Instrument approvals are implemented via the  Static Data Approval page , while all others are currently implemented using an Unapproved page in each case, to list items of the relevant type that are pending approval.  Static Data Approval does not apply when the relevant Approval Level is ..."},"488":{y:0,u:"../Content/188615.htm",l:-1,t:"How to Set Up Static Data Approval",i:3.11839251759321E-05,a:"Define Site Approval Levels Use the  Data Security  page to enable Static Data Approval and the  level of approval  as follows: Select the level of approval from the Approver drop-down list in the Approval Level area and then click Save to apply Static Data Approval to the Site. CAUTION: Before you ..."},"489":{y:0,u:"../Content/184447.htm",l:-1,t:"Implementing Security Approval",i:0.0018239029037052,a:"Quantum offers a single level of approval for changes to the following System Configuration pages. Logon Message, Logon Security, Password Filters, Data Security, LDAP Authentication, Operational Settings, and SMTP Settings. When the applicable Security Approval option is selected for these pages (on ..."},"490":{y:0,u:"../Content/184419.htm",l:-1,t:"How Security Approval Works",i:3.81418426353765E-05,a:"To implement change approval for specific system security pages: Ensure at least two Approver users have the Security Approver option selected, and the applicable Security Approval options also selected for the relevant pages. Ensure that all such Approver users must have valid email addresses saved on ..."},"491":{y:0,u:"../Content/184771.htm",l:-1,t:"Audit Security Change Approval Actions",i:2.67661985126024E-05,a:"Changes to system-wide security settings are recorded in the audit log, whether Security Approval applies to the relevant page or not. When Security Approval IS in force, details of approvals and rejections are also recorded. Use the  Audit  reporting page to run a query on the Security table ..."},"492":{y:0,u:"../Content/193695.htm",l:-1,t:"Implementing Two-Step Authentication",i:2.67661985126024E-05,a:"Two-Step Authentication is an optional extra security step to further ensure that the user initiating an action is the valid user.  Implementation Two-Step Authentication uses the Time-based One-Time Password (TOTP) algorithm and supports default values for HASH MAC algorithm (SHA-1), token length (6 ..."},"493":{y:0,u:"../Content/79111.htm",l:-1,t:"Analytics Service Manager Configuration",i:4.0359468769108E-05,a:"Analytics Service Manager Configuration"},"494":{y:0,u:"../Content/79130.htm",l:-1,t:"Alert Server",i:2.67661985126024E-05,a:"Alert Server The Analytics Alert Server is required for the Alerts functionality."},"495":{y:0,u:"../Content/180120.htm",l:-1,t:"Alert Server Configuration",i:2.67661985126024E-05,a:"Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Check that the default Datasource is correct. NOTE: The default data source will be that which is nominated within the Client settings. The drop down box lists all data sources that have been configured within the ..."},"496":{y:0,u:"../Content/180124.htm",l:-1,t:"Alert Server Start-up ",i:2.67661985126024E-05,a:" The Alert Server may be configured to start up automatically or manually via the Service Manager, as described below. Configure for Automatic start-up Open Site Settings by executing AGRSettings.exe from within the GUI folder. Highlight the Analytics data source. Set the Use Alerts Server to YES. ..."},"497":{y:0,u:"../Content/180128.htm",l:-1,t:"Deal Export Server",i:2.89838246463339E-05,a:"IMPORTANT: Any settings you configure using Analytics Service Manager are overridden by subsequent AG-Quantum configuration wizard runs made to configure your site, for example, when upgrading or re-installing Quantum Six. The Deal Export process automatically exports deals saved and updated in ..."},"498":{y:0,u:"../Content/180129.htm",l:-1,t:"Deal Export Server Configuration",i:2.67661985126024E-05,a:"Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Check that the default Datasource is correct. NOTE:  The default datasource will be that which is nominated within the Client settings. The drop down box lists all datasources that have been configured within the ..."},"499":{y:0,u:"../Content/180130.htm",l:-1,t:"Deal Export Server Start-up",i:2.67661985126024E-05,a:"The Deal Export Server may be configured to start up automatically upon log-on to the Application Server, or manually via the Service Manager, as detailed below. Configure for Automatic start-up Run the Settings by executing Settings.exe from within the GUI folder. Click on the Analytics Datasource ..."},"500":{y:0,u:"../Content/180136.htm",l:-1,t:"Deals Server",i:2.67661985126024E-05,a:"The Deals Server provides a read-only view of deals which is used by the calculation engine as well as other Analytics components. To configure the Deals Server Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Confirm that the Datasource is defaulted to the ..."},"501":{y:0,u:"../Content/71303.htm",l:-1,t:"Import Server",i:2.67661985126024E-05,a:" This application is only available on the Analytics application server. The Import Server polls for changes in static data and transactional data in the Quantum database and updates the Analytics database accordingly. The Import Server process consists of two main steps: Detecting changes in Quantum ..."},"502":{y:0,u:"../Content/180134.htm",l:-1,t:"Import Server Configuration",i:2.67661985126024E-05,a:"Run the Analytics Service Manager from the desktop Analytics folder or by executing the AGRSvcMgr.exe from within the GUI folder. Check that the default Datasource is correct. NOTE: The default data source will be that which is nominated within the Client settings. The drop down box lists all data ..."},"503":{y:0,u:"../Content/180137.htm",l:-1,t:"Import Server Start-up",i:2.67661985126024E-05,a:"The Import Server may be configured to start up automatically upon log-on to the Application Server or manually via the Service Manager, as detailed below. Configure for Automatic start-up Run the Site Settings from the desktop Analytics folder or by executing the Settings.exe from within the GUI ..."},"504":{y:0,u:"../Content/180142.htm",l:-1,t:"Monitor Server",i:2.67661985126024E-05,a:"Messages from the Analytics Services can be viewed in the Analytics Monitor. Run the Analytics Monitor by executing AGRMonitor.exe from within the GUI folder. To configure the Monitor Server Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Confirm that the ..."},"505":{y:0,u:"../Content/180144.htm",l:-1,t:"Limit Server",i:3.81418426353765E-05,a:"Limit Server The Analytics Limit Server is required for the Limit Check functionality. The server may be configured to start automatically on start up of Application Server, or manually within the Analytics Service Manager."},"506":{y:0,u:"../Content/180145.htm",l:-1,t:"Limit Server Configuration",i:2.67661985126024E-05,a:"Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Confirm that the Datasource is defaulted to the correct database. NOTE: The default data source will be that which is nominated within the Client settings. The drop down box lists all data sources that have been ..."},"507":{y:0,u:"../Content/180147.htm",l:-1,t:"Limit Server Start-up",i:2.67661985126024E-05,a:"The Limit Server may be configured to start up automatically upon log-on to the Application Server or manually via the Service Manager, as detailed below. Configure for Automatic start-up Open the Site Settings by executing AGRSettings.exe from within the GUI folder. Highlight the Analytics data ..."},"508":{y:0,u:"../Content/180151.htm",l:-1,t:"Rate Server",i:2.89838246463339E-05,a:"The Rate Server provides rates to the Analytics calculation engine during the execution of Queries, Deal Analyze and Pricing. To configure the Rate Server Run the AnalyticsService Manager by executing AGRSvcMgr.exe from within the GUI folder. Confirm that the Datasource is defaulted to the correct ..."},"509":{y:0,u:"../Content/180153.htm",l:-1,t:"Static Data Server",i:2.67661985126024E-05,a:"The Static Data Server provides a read only view of static data which is used by the calculation engine as well as other Analytics components. To configure the Static Data Server Run the Analytics Service Manager by executing AGRSvcMgr.exe from within the GUI folder. Confirm that the Datasource is ..."},"510":{y:0,u:"../Content/175713.htm",l:-1,t:"Analytics System Manager",i:2.67661985126024E-05,a:"Analytics System Manager System administrators can use the Analytics System Manager application for maintenance of system generated error logs and custom settings."},"511":{y:0,u:"../Content/175714.htm",l:-1,t:"Error Log function (System Manager)",i:2.67661985126024E-05,a:"Use System Manager\u0027s Error Log function to review, clean up, and archive error logs generated by Analytics. To review all error logs generated by Analytics: Click the Error Log icon. The Display Errors tab lists all Analytics error log messages, as illustrated in the example below. Optionally set ..."},"512":{y:0,u:"../Content/145690.htm",l:-1,t:"Custom Settings",i:2.67661985126024E-05,a:"Custom Settings NOTE: This functionality is now provided by the Quantum Configuration Wizard. See the Installation Instructions for more information."},"513":{y:0,u:"../Content/84645.htm",l:-1,t:"Email Settings",i:2.67661985126024E-05,a:"Alerts can be sent via the MAPI SMTP. Use Analytics System Manager to specify the mail protocol and e-mail notification settings to be used, as detailed below. Configure Mail Protocol settings Open the Analytics System Manager from the desktop Analytics folder or by executing AGRSystemManager.exe from ..."},"514":{y:0,u:"../Content/193791.htm",l:-1,t:"Exporting data from Quantum",i:2.82287822905144E-05,a:"You can export data from the Quantum database as follows: Export most types of data record held in the database in any of these formats: CSV, Excel, JSON, QXT, PDF, and XML where valid. This includes deals, static data, rules, rates, cash management data, workflow -related data, and so on. You can also ..."},"515":{y:0,u:"../Content/179667.htm",l:-1,t:"Importing data into Quantum",i:3.39166043519015E-05,a:"Data can be imported into Quantum as follows: Import deal data and some static data by using the  Quantum Public API . Import one file or multiple files. Import static data and rates by using  Data Transfer spreadsheets . You can also import rates in correctly formatted files  - see  Import File ..."},"516":{y:0,u:"../Content/179673.htm",l:-1,t:"Public API",i:2.89838246463339E-05,a:"You can use the Quantum Public Application Program Interface (API) to import deals and some static data. The API provides feedback in real time, which enables you to respond to validation errors as they occur. You can also initiate Quantum reports, and receive back the Crystal Report Object (with full ..."},"517":{y:0,u:"../Content/179490.htm",l:-1,t:"Import File Formats and Commands",i:0.000239030429947438,a:" The file to be imported into Quantum can be in one of the following formats. NOTE: For all formats, the Import menu item is controlled by the Configuration \u003e Users settings for User Details, Resource Security, and Module Security and by Configuration \u003e Operational Settings. Quantum Import Data (QID) ..."},"518":{y:0,u:"../Content/198218.htm",l:-1,t:"JSON File Format",i:7.84401691608327E-05,a:"You can import data for a deal in a JSON-formatted file.  You can export a data file that contains deal information in JSON. An exported JSON-formatted file contains the properties associated with the deal.  Find the option \"JSON\" in the Browse grid menu under Export.... . This opens the Export dialog ..."},"519":{y:0,u:"../Content/179498.htm",l:-1,t:"QXT File Format",i:0.00365056481026029,a:"The QXT format is Quantum\u0027s raw data format and provides all the import and processing options offered by the  QID format .The QXT format has the following components. Import File Name The import file name must have an extension of .QXT for this format. Executable Name A QXT Format file must begin with ..."},"520":{y:0,u:"../Content/179494.htm",l:-1,t:"QID Import File Format ",i:0.0015782617095509,a:" The QID (Quantum Import Data) format has the following components. Import File Name The import file name must have an extension of .QID for this format. Executable Name A QID Format file must begin with the executable name of the accepting Quantum program. For example, an import file for Money Market ..."},"521":{y:0,u:"../Content/179501.htm",l:-1,t:"QID Import File Commands ",i:0.00532520264035476,a:" NOTE: The commands described in this section are available only when using the Quantum Import Data (QID) format. Save, Insert, Modify Commands, Import Files One of these commands must be included in the import file at the end of each record to save the record before starting the next one. It is ..."},"522":{y:0,u:"../Content/179495.htm",l:-1,t:"Tab-separated Import file format ",i:2.67661985126024E-05,a:" This format relies on tab-separated columns to identify and separate fields. The first row contains field descriptions, and the values to be imported are contained in succeeding rows (the data rows). Each data row follows the format defined in the first row. When importing, Quantum saves the new ..."},"523":{y:0,u:"../Content/179500.htm",l:-1,t:"Importing Analysis Codes ",i:3.81418426353765E-05,a:"Importing Analysis Codes  When importing Analysis Codes, combine the Analysis Set and Analysis Code in a single field, separated by the pipe character (|). Example Where INDUSTRY is the Analysis Set and BANK is the Analysis Code: Tab Separated (Row) format QID format analyse=INDUSTRY|BANK"},"524":{y:0,u:"../Content/179497.htm",l:-1,t:"Importing Group Records",i:2.67661985126024E-05,a:"Importing Group Records When importing a Group-level record, you cannot assign data to the Group Member fields. Instead, create the Group-level record with no members, and then specify the group record in the Owner field for each member record."},"525":{y:0,u:"../Content/197979.htm",l:-1,t:"Importing Structured Addresses",i:2.89838246463339E-05,a:"You can import, export, update, or delete structured address data via QXT.  The top two lines show how unstructured addresses appear in  QXT file format , while the bottom two lines show how structured addresses appear.  StreetAddress = 575,Washington,Walpole PostalAddress = Places,Roads,Cities,Worlds ..."},"526":{y:0,u:"../Content/179262.htm",l:-1,t:"Quantum Import Services and Utilities",i:0.00077186844962514,a:"Quantum includes the following data import services and corresponding utilities you can use to monitor the data files they process and to optionally initiate uploads of specific files in each case. NOTES: Before you can import data, the relevant service must be running on the Quantum server AND the ..."},"527":{y:0,u:"../Content/179263.htm",l:-1,t:"Importing Bank Files",i:0.00113886352542444,a:"The Bank Import Service processes import files in several data formats using specific  parsers  and any additional instructions, as specified in the  BkImport.ini configuration file . You can use  custom  and  dynamic  import file name formats if required. Submit bank account transactions and balances ..."},"528":{y:0,u:"../Content/181783.htm",l:-1,t:"Configuring Import Folders (Bank Import Service)",i:0.000114770028872547,a:"The Bank Import Service watches the AppDataPath\\BankImportation\\Import folder for new files to import. See AppData Folder for more information on configuring the AppData location. The service will automatically create folders to store error logs, files in processing and processed files when it is run ..."},"529":{y:0,u:"../Content/183465.htm",l:-1,t:"Import File Names (Bank Import Service)",i:0.000769650823491408,a:"The Bank Import Service accepts and processes bank account records from imported files named as specified in the  AGBankImportService.config file located in your site\u0027s Bin folder. TIP: You can import files with no filename extension (for example ABCbank20160412) by setting the UploadAllowNoExtension ..."},"530":{y:0,u:"../Content/183475.htm",l:-1,t:"Custom File Name Extensions (for Bank Import Service)",i:0.000857654653851353,a:"To enable a custom file extension for processing in Bank importer, you will need to add the extension to the following configuration file in your Quantum Site: AGBankImportService.config - customFileExtensions key.  Additionally, to use the  Bank Import Status page  to import files with the custom file ..."},"531":{y:0,u:"../Content/183476.htm",l:-1,t:"Specifying Dynamic File Extensions for Import",i:0.000857654653851353,a:"To enable dynamic file extensions for processing in Bank Importer, you will need to add the  Regular Expression  pattern for your extension to the following configuration files in your Quantum Site: AGBankImportService.config - customFileExtensionRegex key. Additionally, to use the  Bank Import Status ..."},"532":{y:0,u:"../Content/197927.htm",l:-1,t:"Configuring Matching of Imported Bank Flows",i:0.000208145306247757,a:"At regular intervals, the system will automatically look for newly imported bank flows on which to apply the Matching process. You can optionally set this interval, and the maximum number of bank accounts to be processed each time, using thefollowing parameter in the AGBankImportService.config file ..."},"533":{y:0,u:"../Content/179283.htm",l:-1,t:"About the BkImport.ini configuration file",i:0.000276703008113858,a:"The Bank Import Service watches known locations for incoming files and uses a configuration file based on the file location to manage the import. This file may have any name, but must have the .ini suffix. BKImport.ini is the default filename. For example, the Bank Import Service processing a BAI ..."},"534":{y:0,u:"../Content/179301.htm",l:-1,t:"Example BKImport.ini file",i:5.56031984475628E-05,a:"An example of a BKImport.ini file for BAI formats is shown below. TIP: For parameter details, follow the link in each case. Parser  = BAI TraceData  = Yes TraceLevel  = 9 TraceFileLocation  = \\\\QuantumServer\\QuantumSite\\Quantum\\BankImportation\\Log\\BAI\\ # ValidateUniqueStatement  = True ..."},"535":{y:0,u:"../Content/179304.htm",l:-1,t:"Comment Lines in Bank Import Configuration file",i:2.67661985126024E-05,a:"In the BKImport.ini file (or an  included file ), any line starting with one of the commenting characters is considered to be a comment line. The commenting characters are: ~ !@ # $ % ^ \u0026 * ( ) _ + | \u0027 : ; . , \u003c \u003e ` \\ = - / ? \" Comment lines these files are ignored EXCEPT FOR those immediately ..."},"536":{y:0,u:"../Content/179305.htm",l:-1,t:"Including/Mapping to other Configuration files",i:8.17394516386048E-05,a:"Configuration files can specify other Configuration files to be read (included) statically or dynamically, by using the IncludeFile or MAP CONFIG parameters, as described below. IncludeFile parameter Description Specifies another Configuration file whose parameters are to be read (included) in Bank ..."},"537":{y:0,u:"../Content/179310.htm",l:-1,t:"DataManager parameter (Bank Import Configuration file)",i:2.67661985126024E-05,a:"DataManager parameter (Bank Import Configuration file) Description Sets the DataManager to use an ECHOS connection or process files. Additional parameters apply when you specify ECHOS. See  ECHOS Configuration Parameters . Syntax DataManager = ECHOS | FILE Default DataManager = FILE"},"538":{y:0,u:"../Content/179311.htm",l:-1,t:"DataManagerProcess parameter (Bank Import Configuration file)",i:2.67661985126024E-05,a:"DataManagerProcess parameter (Bank Import Configuration file) Description Sets the DataManager to run once, or until it times out. Syntax DataManagerProcess = RunOnce | RunUntilTimeOut Default DataManagerProcess = RunOnce"},"539":{y:0,u:"../Content/179284.htm",l:-1,t:"Parser parameter and Bank Import file formats",i:0.000289190985379332,a:"This section describes the Parser parameter and details the corresponding file formats for each supported parser. Parameter description The Parser parameter specifies the parser used to interpret the imported data, depending on the source and/or format of the data, and must be precede any parameters ..."},"540":{y:0,u:"../Content/181785.htm",l:-1,t:"AFB120 Bank Import Format",i:6.54962303984242E-05,a:"Parser = AFB120 CAUTION: The Parser parameter must precede any BAI-specific parameters in the Configuration file. This topic describes how the Bank Import service supports the AFB120 bank statement format. Field Mapping: AFB120 to Quantum When Bank Importer parses an AFB120 file, it extracts data from ..."},"541":{y:0,u:"../Content/179387.htm",l:-1,t:"American BAI Format",i:4.69389012901582E-05,a:"Parser = BAI IMPORTANT: The Parser parameter must precede any BAI-specific parameters in the Configuration file. The Bank Import service supports Cash Management Balance Reporting Specifications Version 2, as specified by the American Bank Administration Institute. The common name for this file format ..."},});