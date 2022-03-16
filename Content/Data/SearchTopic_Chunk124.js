define({"8917":{y:0,u:"../Content/utility_generalledgerinterfacemapping_outputformat.htm",l:-1,t:"Output Format area, Details tab, General Ledger Interface Mapping page",i:2.67661985126024E-05,a:"Use these settings to define the format of G/L interface files output by a G/L Interface query when the Write to interface file option is set and this G/L Interface Mapping record applies. Find the  Write to interface file option in Accounting \u003e G/L Interface \u003e Options (advanced options).  Interface ..."},"8918":{y:0,u:"../Content/utility_generalledgerinterfacemapping_outputfile.htm",l:-1,t:"Output File area",i:2.67661985126024E-05,a:"Use these settings to define and control the naming and location of G/L interface files output by the G/L Interface query when the Write to interface file option is set and this G/L Interface Mapping record applies. Find the Write to interface file option in Accounting \u003e G/L Interface \u003e Options ..."},"8919":{y:0,u:"../Content/utility_generalledgerinterfacemapping_accountTemplateMapping.htm",l:-1,t:"Account Template Mapping tab, General Ledger Interface Mapping",i:2.67661985126024E-05,a:"Use this tab to: create and maintain a custom mapping rule that the system applies, to map Quantum and an external General Ledger, based on the available criteria and settings. Select the Matching Criteria and the Output Settings from the New Account Template Code dialog box. The tab applies to an ..."},"8920":{y:0,u:"../Content/utility_generalledgerinterfacemapping_accountingPeriodsMapping.htm",l:-1,t:"Account Periods Mapping tab, General Ledger Interface Mapping",i:2.67661985126024E-05,a:"(Available only when Interface Format is AvantGard Format 1 and Map Into Accounting Periods is selected (Details tab).) Use this tab to map Accounting Periods defined for the G/L Owner to the accounting periods used in the external system.  NOTE: only when  Accounting Period records exist in Quantum  ..."},"8921":{y:0,u:"../Content/utility_eft.htm",l:-1,t:"Two-Step Authentication",i:0.00013832531342453,a:"EFT Reprocessing Utility page Use this page only when exceptions arise and you need to reprocess previously SENT* Electronic payment output. *TIP: To process UNSENT EFTs, use the EFTs Processing page. To report on ALL EFT output whatever the Flow Status, use the EFTs Reporting page. Two-Step ..."},"8922":{y:0,u:"../Content/utility_eft_paymentmethod.htm",l:-1,t:"Payment Method - EFT Reprocessing",i:2.67661985126024E-05,a:"Select the appropriate External Method record - one with: Method Type set to Payment, Export Source set to an External Method Source set up in your system for EFT processing, and EFT Plug-In / Template  set to an EFT workflow template or an available Plug-In DLL located in the bin folder for your site. ..."},"8923":{y:0,u:"../Content/utility_eft_fromvaluedate.htm",l:-1,t:"Start Date - EFT Reprocessing",i:2.67661985126024E-05,a:"Specify the starting Value Date for flows to be included in the result set. With some* Payment Methods, you can set the Generate field to: Single file - to create one file over all days in the specified date range, File per day - to create one file for each day, or File per EFT - to create one file for ..."},"8924":{y:0,u:"../Content/utility_eft_tovaluedate.htm",l:-1,t:"End Date - EFT Reprocessing",i:2.67661985126024E-05,a:"Specify the ending Value Date for flows to be included in the result set. The default is the Start date value. You cannot specify a date before the Start date. With some* Payment Methods, you can set the Generate field to: Single file - to create one file over all days in the specified date range, File ..."},"8925":{y:0,u:"../Content/utility_eft_currencytype.htm",l:-1,t:"Currency Type - EFT Reprocessing",i:2.67661985126024E-05,a:"(Available only if, for the selected Payment Method, an XML Template is specified in  External Method Sources .) Select Currency, Commodity, or Both. The default is Currency.  NOTE: This setting determines the Currency selections available (according to the Type setting in Currency Setup). Knowledge ..."},"8926":{y:0,u:"../Content/utility_eft_flowtype.htm",l:-1,t:"Flow Types - EFT Reprocessing",i:2.67661985126024E-05,a:"(Currently applies only to SWIFT or SWIFT-like Payment Methods.) Select the type of flows to be included: CASH for cash flows only, STOCK for stock flows only, or ALL. Stock flows apply when the Payment Method is SWIFT (or SWIFT-compatible), and occur: In conjunction with cash flows for Money Market or ..."},"8927":{y:0,u:"../Content/utility_eft_flowstatus.htm",l:-1,t:"Flow Status - EFT Reprocessing",i:2.67661985126024E-05,a:"Flow Status - EFT Reprocessing Read-only for EFT Reprocessing and set to SENT. Knowledge Center"},"8928":{y:0,u:"../Content/utility_eft_paymentreceipt.htm",l:-1,t:"Payment/Receipt, EFT Reprocessing",i:2.67661985126024E-05,a:" NOTE: With some Payment Methods, this option may not apply, or PAY may be the only option available. Select PAY, RECEIVE, or BOTH. If you select: PAY - only cash flows with amounts less than zero are selected, and Payment messages will be output, RECEIVE - only cash flows with amounts more than zero ..."},"8929":{y:0,u:"../Content/utility_eft_outputfolder.htm",l:-1,t:"Destination - EFT Reprocessing",i:2.67661985126024E-05,a:"(Available only when the External Method Source for the selected Payment Method relates to files.)  NOTE: When a Preview or EFT Reporting run produces no output, output-related settings such as these are validated as if EFTs were to be output. The location for the EFT output file. The default is the ..."},"8930":{y:0,u:"../Content/utility_eft_filename.htm",l:-1,t:"File Name - EFT Reprocessing",i:2.67661985126024E-05,a:"(Available only when the External Method Source for the selected Payment Method has Type Export set to Create File or Publish to File.)  NOTE: While files are created only for Update runs, the system still validates output-related settings such as these for Previews and EFT Reporting runs as if an EFT ..."},"8931":{y:0,u:"../Content/utility_eft_filegeneration.htm",l:-1,t:"Generate - EFT Reprocessing",i:2.67661985126024E-05,a:"(Available only when the External Method Source for the selected Payment Method relates to files.)  NOTE: While files are created only for Update runs, the system still validates output-related settings such as these for Previews and EFT Reporting runs as if an EFT was to be processed. Select: Single ..."},"8932":{y:0,u:"../Content/utility_eft_batchmessages.htm",l:-1,t:"Batch Messages - EFT Reprocessing",i:2.67661985126024E-05,a:"(SWIFT or some SWIFT-like Payment Methods only; not supported when  Generate is set to File per EFT.)  NOTE: While files are created only for Update runs, the system still validates output-related settings such as these for Previews and EFT Reporting runs as if an EFT was to be processed. This option ..."},"8933":{y:0,u:"../Content/utility_eft_repeatearlierrun.htm",l:-1,t:"Repeat earlier run - EFT Reprocessing",i:2.67661985126024E-05,a:"Select this option to re-extract transactions from a previous EFT Processing Update* run. This enables you to reproduce an EFT messages file if the original is lost or corrupted. If you select this option: To identify the EFT run you want to repeat, enter the required Run Number*. The Filters settings ..."},"8934":{y:0,u:"../Content/utility_eft_runno.htm",l:-1,t:"Run Number - EFT Reprocessing",i:2.67661985126024E-05,a:"(Available only when when Repeat earlier run is selected.) If you want to repeat an earlier EFT Processing Update* run, enter that run number or batch number. This value (with the Start Date) uniquely identifies each successful EFT run that created an EFT messages file*. Quantum assigns a Run Number of ..."},"8935":{y:0,u:"../Content/utility_eft_reportingdefaultstab.htm",l:-1,t:"Defaults tab - Configure Query, EFT Reprocessing",i:2.67661985126024E-05,a:"When you\u0027re configuring a Query, all filters and options are visible and you can set the default values you want. To toggle display of the Configure Query panel - Click the Configure link. To  add a filter field  to the standard set of filter parameters - On the Defaults tab, click the Add Filter ..."},"8936":{y:0,u:"../Content/utility_eft_reportingpropertiestab.htm",l:-1,t:"Properties tab - Configure Query, EFT Reprocessing",i:2.67661985126024E-05,a:"Use the Properties tab to save a query for later Public or Private re-use, and to select the option for retaining run results. To save a query for later re-use: Enter a unique Name, set the Access Permission to Public or Private, select the Expiry Strategy option as below, and click Save. TIP: You can ..."},"8937":{y:0,u:"../Content/utility_eft_viewlayout.htm",l:-1,t:"Layout tab - Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"Use the Layout tab to change the results grid layout. Click Apply (or Save) to see the effect of your changes. The settings displayed depend on the type of View, as shown below. WHAT DO YOU WANT TO DO? [For more details, follow the links below.] Configure a Table View Configure a Pivot View See  Pivot ..."},"8938":{y:0,u:"../Content/utility_eft_viewfilters.htm",l:-1,t:"Filters tab - Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"Use the Configure View\u0027s Filters tab to configure filters on the query results. This enables you to further extract data from the query without having to re-run it.  NOTE: You must click Apply or Save before the grid will update to reflect any changes. To add a filter field to the view - Click the Add ..."},"8939":{y:0,u:"../Content/utility_eft_viewcolumns.htm",l:-1,t:"Columns tab, Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"Use this tab to optionally: change the default displayed names for columns in the View, and to... specify additional calculated columns.  To add a Calculated Column - see  Building an Expression (in Calculated Columns) . TIPS: The fields in the Query Columns area are those selected on the Layout tab. ..."},"8940":{y:0,u:"../Content/utility_eft_viewcolors.htm",l:-1,t:"Colors tab, Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"Use this tab to add color to columns or rows. You can: select the Columns you want to add background color to or select ALL for the whole row; select the Background Color; optionally - for a pivot - select the color for rows that show totals; optionally add Conditions under which the color displays, ..."},"8941":{y:0,u:"../Content/utility_eft_viewactions.htm",l:-1,t:"Actions tab, Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"(Pivot Views only.) Use this tab to define and apply custom actions - namely Create, Open, Delete, and Update actions on deals or deal requests; also Open Analytics Deal Analyse. When you apply your Pivot view, each cell with a non-empty value will contain a link with a context menu that shows your ..."},"8942":{y:0,u:"../Content/utility_eft_viewproperties.htm",l:-1,t:"Properties tab - Configure View, EFT Reprocessing",i:2.67661985126024E-05,a:"Use the Properties tab to: Enter a new Name for the view (required before you can save it). Optionally set this view as the default for the current query. This will be the first view you\u0027ll see when you select the current query. Set the Access Permission for the view (Public or Private). Change the way ..."},"8943":{y:0,u:"../Content/utility_licensing.htm",l:-1,t:"Licensing page",i:0.00023690045016286,a:"Use this page to view your site\u0027s current licensing details - in particular, which features are licensed and which are not.  NOTE: If you cannot access a licensed function, you may not have sufficient User or Resource security rights. Contact your System Administrator. All items are read-only. The ..."},"8944":{y:0,u:"../Content/reporting_structuredaddressmigration.htm",l:-1,t:"Structured Address Migration page",i:8.39083992852497E-05,a:"Use this page to migrate selected sets of unstructured addresses to a default structure. WHAT DO YOU WANT TO DO? Select a different Query or previous run - Click on the current Query heading and select the Query or run in the browse window. Filter on Source - In the Source drop-down list, select one of ..."},"8945":{y:0,u:"../Content/utility-analytics.htm",l:-1,t:"Utilities (Analytics)",i:2.67661985126024E-05,a:"If you are viewing this content in the Help panel, it usually means that the current page is a non-core one added specifically for your site (after installation of the base Quantum Six product). A non-core page in this Analytics menu may be: a page created to access a new database table created using ..."},"8946":{y:0,u:"../Content/utility_dealremover-analytics.htm",l:-1,t:"Remove Deals page",i:0.000248136452053687,a:"Use this page to remove, from the Analytics database, deals that have been imported from sources external to core Quantum Six. To remove deals from a specific source: Select the required Source reference classification. Click Delete. In the Confirm Delete dialog box, click OK to continue. Deals from ..."},"8947":{y:0,u:"../Content/utility_replicationstatus-analytics.htm",l:-1,t:"Replication Status page",i:0.00027935278185039,a:"Use this page to monitor the status of deal and related data imported into, and exported from, Analytics by Replication Manager. You can also submit selected items for re-import attempts. Items are listed on tabs corresponding to their current replication status, as follows. A summary giving counts of ..."},"8948":{y:0,u:"../Content/utility_reconcile-analytics.htm",l:-1,t:"Reconcile page",i:5.97133509641611E-05,a:"Use this page to run the Reconcile utility, which enables deals, cash flows, and bank account balances to be reconciled between Quantum and Analytics. Procedure Summary Specify the required Filters settings for your reconcile run: Select Open Deals and enter the required Open Deals from date, OR select ..."},"8949":{y:0,u:"../Content/adaptiv.htm",l:-1,t:"Adaptiv pages",i:2.67661985126024E-05,a:"Adaptiv pages This section of Help panel topics covers Adaptiv pages. Knowledge Center"},"8950":{y:0,u:"../Content/189473.htm",l:-1,t:"Adaptiv Reporting",i:2.67661985126024E-05,a:"Adaptiv Reporting This section of Help panel topics covers Adaptiv Reporting pages. Knowledge Center"},"8951":{y:0,u:"../Content/adaptiv_explorer.htm",l:-1,t:"Queries page (Adaptiv Explorer)",i:2.67661985126024E-05,a:"Use this page to drill down through the Adaptiv folder structure of folders and saved queries. The breadcrumb trail at the top of the page indicates your drill-down path (click on a higher level in the trail to go back to that level). Different icons indicate the level of list items, as indicated ..."},"8952":{y:0,u:"../Content/adaptiv_reporting.htm",l:-1,t:"Adaptiv Query",i:9.6697804117756E-05,a:"Use this page to: Run the current Query - Enter specific  Filter and Option settings  and click  Run Query. The displayed options vary for each Query, depending on its configuration. TIP: Resource Security settings can restrict the deals returned. Change the Query or create a new one based on it - ..."},"8953":{y:0,u:"../Content/adaptiv_reporting_positiondate.htm",l:-1,t:"Position Date, Adaptiv Query",i:2.67661985126024E-05,a:"Position Date, Adaptiv Query Enter the revaluation date for the deals to be reported on. This determines the time to maturity for each deal. The default is Today. Knowledge Center"},"8954":{y:0,u:"../Content/adaptiv_reporting_startdate.htm",l:-1,t:"Start Date, Adaptiv Query",i:2.67661985126024E-05,a:"Start Date, Adaptiv Query Enter the start date from which you want deals to be included in the report results. The default is Today. Knowledge Center"},"8955":{y:0,u:"../Content/adaptiv_reporting_enddate.htm",l:-1,t:"End Date, Adaptiv Query",i:2.67661985126024E-05,a:"End Date, Adaptiv Query Enter the end date up to which deals will be included in the report results. The default is Today. Knowledge Center"},"8956":{y:0,u:"../Content/adaptiv_reporting_asatdate.htm",l:-1,t:"As At Date, Adaptiv Query",i:2.67661985126024E-05,a:"Enter the date as at which you want the system to select deal images for reporting on. The default is Today. Enter an earlier date to view the deals as they existed at that point in time (that is, excluding any subsequent deal actions or changes). This date reflects a \"time slice\" of the database on ..."},"8957":{y:0,u:"../Content/adaptiv_reporting_nettdate.htm",l:-1,t:"Nett Date, Adaptiv Query",i:2.67661985126024E-05,a:"Nett Date, Adaptiv Query Enter a date to control the display of closed out deals. Deals closed out prior to this date will be displayed as a single netted value. The default is Today. Knowledge Center"},"8958":{y:0,u:"../Content/adaptiv_reporting_location.htm",l:-1,t:"Location, Adaptiv Query",i:2.67661985126024E-05,a:"Location, Adaptiv Query Select a location to define the non-business day rules to apply to the query. The lookup lists all Holiday Centers as defined in Analytics Holiday Center Maintenance. Knowledge Center"},"8959":{y:0,u:"../Content/adaptiv_reporting_reportingriskdefaultstab.htm",l:-1,t:"Defaults tab (Configure Adaptiv Query)",i:7.29785318527414E-05,a:"Use the Defaults tab to specify the time period of the data being reported on for the current Adaptiv query. For reports that are run periodically, it is advisable to use generic dates (for example, Today, Tomorrow, Start of Month, End of Month, and so on), rather than actual dates so that the report ..."},"8960":{y:0,u:"../Content/adaptiv_reporting_reportingriskpropertiestab.htm",l:-1,t:"Properties tab (Configure Adaptiv Query)",i:7.29785318527414E-05,a:"Use the Properties tab when you want to save the current Adaptiv query configuration, to specify the following settings. TIP: Configuration changes are not saved until you enter a Name and click Save. This enables you to quickly run existing queries with slightly different parameter defaults or ..."},"8961":{y:0,u:"../Content/adaptiv_reporting_reportingRiskAdaptivAnalyticsAssumptionsTab.htm",l:-1,t:"Assumptions tab (Configure Adaptiv Query)",i:2.67661985126024E-05,a:"Use this mandatory tab to specify the valuation methods, risk-associated rules, and run options that apply for the Adaptiv query. The parameters on this tab vary depending on the type of report being created. Their default settings depend on whether or not an existing Assumptions Definition record is ..."},"8962":{y:0,u:"../Content/adaptiv_reporting_valuation.htm",l:-1,t:"Valuation area, Assumptions tab (Adaptiv Query)",i:3.13164561617121E-05,a:"Use this area to specify the following default valuation settings for the query. Unless explicitly stated otherwise, the fields below apply to all Adaptiv report types. Rule - Select the required Valuation Control record. As At Date - Enter the date of the deal image \"as at\" that point in time. Any ..."},"8963":{y:0,u:"../Content/adaptiv_reporting_risk.htm",l:-1,t:"Risk area, Assumptions tab (Adaptiv Query)",i:3.13164561617121E-05,a:"(CVA, Historical VaR, Monte Carlo VaR, PFE and SA-CCR reports; or as indicated below.) Random Number Seed (CVA, Monte Carlo VaR, and PFE) - Enter a starting or seed number to be used in the generation of simulated rates. Using the same Random Number Seed ensures that an identical result can be produced ..."},"8964":{y:0,u:"../Content/adaptiv_reporting_optionsAndFiles.htm",l:-1,t:"Options and Files area, Assumptions tab (Adaptiv Query)",i:3.13164561617121E-05,a:"Use this area to specify the following options and settings for the query. Unless explicitly stated below, these apply to all Adaptiv report types. Export Market Prices - Select this option to enable market prices (par rates) to be seen in the Market Price tab of AA Studio. Keep Job File - Select this ..."},"8965":{y:0,u:"../Content/adaptiv_reporting_ExternalPortfolio_Container.htm",l:-1,t:"External Portfolio grid, Assumptions tab (Adaptiv Query)",i:3.13164561617121E-05,a:"Use this grid to optionally include External Portfolio (.aap) files previously uploaded using the Adaptiv  External Portfolio File Upload  Utility page. Such files can contain appropriately formatted data for: Inflation-linked deals, CMS Spread Note deals, and/or other scripting deals. Knowledge Center"},"8966":{y:0,u:"../Content/adaptiv_reporting_reportingriskcolumnstab.htm",l:-1,t:"Columns tab (Configure Adaptiv Query)",i:2.67661985126024E-05,a:"Use this mandatory tab to specify default data columns and groupings for an Adaptiv query. The default settings on this tab depend on whether or not an existing Columns Definition record is specified on the Properties tab. If so, the defaults are taken from that Definition record. If not, a new Columns ..."},"8967":{y:0,u:"../Content/adaptiv_reporting_database.htm",l:-1,t:"Database grid (Columns tab, Adaptiv Query)",i:3.81418426353765E-05,a:"Use this grid to select one or more sets of database fields to be directly extracted from the database based on specified As At dates, and to change their displayed names and descriptions.  Database fields are the lowest level of information extracted from the database. To add a new set of column ..."},"8968":{y:0,u:"../Content/adaptiv_reporting_reportingriskfilterstab.htm",l:-1,t:"Filters tab (Configure Adaptiv Query)",i:2.67661985126024E-05,a:"Use this mandatory tab to configure filters on the data considered for the Adaptiv query run. For example, you may wish to only report on deals for a specific Entity group and on certain instrument or transaction types within that group. It is also valid for no filters to be specified.  Filters ..."},"8969":{y:0,u:"../Content/adaptiv_reporting_reportingriskbalancestab.htm",l:-1,t:"Balances tab (Configure Adaptiv Query)",i:2.67661985126024E-05,a:"(This tab appears only when an existing Analytics Balances Definition record is specified on the Properties tab.) Use this tab to configure filters on the balances considered for an Analytics (or Adaptiv, if installed) query run. For example, you may wish to report only on balances for specific Bank ..."},"8970":{y:0,u:"../Content/adaptiv_reporting_viewlayout.htm",l:-1,t:"Layout tab (Configure Adaptiv Report View)",i:2.67661985126024E-05,a:"Use the Layout tab to change the results grid layout. Click Apply (or Save) to see the effect of your changes. The settings displayed depend on the type of View. WHAT DO YOU WANT TO DO? [For more details, follow the links below.] Configure a Table View Columns - select one or more data items you want ..."},"8971":{y:0,u:"../Content/adaptiv_reporting_viewfilters.htm",l:-1,t:"Filters tab",i:2.67661985126024E-05,a:"Use the Configure View\u0027s Filters tab to configure filters on the query results. This enables you to further extract data from the query without having to re-run it. NOTE: You must click Apply or Save before the grid will update to reflect any changes. To add a filter field to the view - Click the Add ..."},"8972":{y:0,u:"../Content/adaptiv_reporting_viewcolumns.htm",l:-1,t:"Columns tab (Configure Adaptiv Report View)",i:2.67661985126024E-05,a:"Use this tab to optionally: change the default displayed names for columns in the View, and to... specify additional calculated columns.  To add a Calculated Column - see  Using Expression Builder in Calculated Columns . TIPS: The fields in the Query Columns area are those selected on the Layout tab. ..."},"8973":{y:0,u:"../Content/adaptiv_reporting_viewcolors.htm",l:-1,t:"Colors tab",i:2.67661985126024E-05,a:"Use this tab to add color to columns or rows. You can: select the Columns you want to add background color to or select ALL for the whole row; select the Background Color; optionally - for a pivot - select the color for rows that show totals; optionally add Conditions under which the color displays, ..."},"8974":{y:0,u:"../Content/adaptiv_reporting_viewactions.htm",l:-1,t:"Actions tab",i:2.67661985126024E-05,a:"(Pivot Views only.) Use this tab to define and apply custom actions - namely Create, Open, Delete, and Update actions on deals or deal requests; also Open Analytics Deal Analyse. When you apply your Pivot view, each cell with a non-empty value will contain a link with a context menu that shows your ..."},"8975":{y:0,u:"../Content/adaptiv_reporting_viewproperties.htm",l:-1,t:"Properties tab (Configure Adaptiv Report View)",i:2.67661985126024E-05,a:"Use the Properties tab to: Enter a new Name for the view (required before you can save it). Optionally set this view as the default for the current query. This will be the first view you\u0027ll see when you select the current query. Set the Access Permission for the view (Public or Private). Change the way ..."},"8976":{y:0,u:"../Content/191079.htm",l:-1,t:"Query Definition pages (Adaptiv)",i:4.95174867581506E-05,a:"Use Query Definition pages to set up defaults that can be used in Adaptiv queries. Predefined Definition records of each type can then be selected in the corresponding fields on the Properties tab in the Query Configuration area. Assumptions, Columns, and Filters Definitions are mandatory in any query. ..."},"8977":{y:0,u:"../Content/adaptiv_assumptions.htm",l:-1,t:"Assumptions Definition (Adaptiv)",i:0.00010335859556852,a:"Use this page to create and maintain Adaptiv Assumptions Definition records and folders. Assumptions Definition record parameters - which vary depending on the query type - specify default valuation methods, risk-associated rules, and run options for a query. An Assumptions Definition is mandatory for ..."},"8978":{y:0,u:"../Content/adaptiv_assumptions_valuation.htm",l:-1,t:"Valuation area, Assumptions page (Adaptiv)",i:4.4337189193175E-05,a:"Use this area to specify the following default valuation settings for queries using this Definition record. Unless explicitly stated otherwise, the fields below apply to all Adaptiv report types. Rule - Select the required Valuation Control record. As At Date - Enter the date of the deal image \"as at\" ..."},"8979":{y:0,u:"../Content/adaptiv_assumptions_risk.htm",l:-1,t:"Risk area, Assumptions page (Adaptiv)",i:4.4337189193175E-05,a:"(CVA, Historical VaR, Monte Carlo VaR, PFE and SA-CCR reports; or as indicated below.) Random Number Seed (CVA, Monte Carlo VaR, and PFE) - Enter a starting or seed number to be used in the generation of simulated rates. Using the same Random Number Seed ensures that an identical result can be produced ..."},"8980":{y:0,u:"../Content/adaptiv_assumptions_optionsAndFiles.htm",l:-1,t:"Options and Files area, Assumptions page (Adaptiv)",i:4.4337189193175E-05,a:"Use this area to specify the following options and settings for queries using this Definition record. Unless explicitly stated below, these apply to all Adaptiv report types. Export Market Prices - Select this option to enable market prices (par rates) to be seen in the Market Price tab of AA Studio. ..."},"8981":{y:0,u:"../Content/adaptiv_assumptions_ExternalPortfolio_Container.htm",l:-1,t:"External Portfolio grid, Assumptions page (Adaptiv)",i:7.78472930159128E-05,a:"Use this grid to optionally include External Portfolio (.aap) files previously uploaded using the Adaptiv  External Portfolio File Upload  Utility page. Such files can contain appropriately formatted data for: Inflation-linked deals, CMS Spread Note deals, and/or other scripting deals. Knowledge Center"},"8982":{y:0,u:"../Content/adaptiv_columns.htm",l:-1,t:"Columns Definition (Adaptiv)",i:5.31421402136545E-05,a:"Use this page to create and maintain Columns Definition records and folders for use in Adaptiv queries. Columns Definition record parameters - which vary depending on the query type - specify default data columns and groupings for a query. A Columns Definition is mandatory for Analytics queries. In the ..."},"8983":{y:0,u:"../Content/adaptiv_columns_database_container.htm",l:-1,t:"Database grid, Columns page (Adaptiv)",i:7.57275764129526E-05,a:"Use this grid to select one or more sets of database fields to be directly extracted from the database based on specified As At dates, and to change their displayed names and descriptions.  Database fields are the lowest level of information extracted from the database. To add a new set of column ..."},"8984":{y:0,u:"../Content/adaptiv_filters.htm",l:-1,t:"Filters Definition (Adaptiv)",i:6.15714163088959E-05,a:"Use this page to create and maintain Analytics Filters Definition records and folders. Filters Definition records specify default filters on the deals considered for an Analytics (or Adaptiv, if installed) query run. For example, you may wish to only report on deals for a specific Entity group and on ..."},"8985":{y:0,u:"../Content/adaptiv_balances.htm",l:-1,t:"Balances Definition (Adaptiv)",i:0.000312416875193074,a:"Use this page to create and maintain Analytics Balances Definition records and folders. A Balances Definition record specifies default filters on balances considered for an Analytics (or Adaptiv^, if installed) query run. For example, you may wish to only report on balances for specific Bank Accounts, ..."},"8986":{y:0,u:"../Content/adaptiv_StaticData.htm",l:-1,t:"Static Data (Adaptiv)",i:2.67661985126024E-05,a:"Static Data (Adaptiv) This section of Help panel topics covers Adaptiv Static Data pages. Use these pages to create and maintain non-transactional supporting data like Bank Accounts, Bond Futures, Counterparties, and Price Factors Mapping pages."},"8987":{y:0,u:"../Content/adaptiv_bankaccount.htm",l:-1,t:"Bank Account page (Adaptiv)",i:0.000178437696309922,a:"Use this page to view and maintain bank account records in the Analytics database. This data is shared between Analytics and Adaptiv perspectives, so that changes you save in Adaptiv also show in Analytics and vice versa. However, this Adaptiv page contains an additional section called Collateral. In ..."},});