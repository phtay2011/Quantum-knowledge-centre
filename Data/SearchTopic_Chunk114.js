define({"8209":{y:0,u:"../Content/static_counterpartystockaccount_banktobankinstructions.htm",l:-1,t:"Bank to Bank Instructions, Counterparty Stock Account",i:2.67661985126024E-05,a:"Optional. Use this free-format text box to record a request for the Beneficiary to act on receipt of EFT stock flow messages - for example Please phone or telex the beneficiary by 10:00am. This field is free-format, but you should restrict the text to codes that are acceptable to the applicable EFT ..."},"8210":{y:0,u:"../Content/static_counterpartystockaccount_PlaceOfSettlementBic.htm",l:-1,t:"Place of Settlement BIC for Custodian, Counterparty Stock Account",i:2.67661985126024E-05,a:"Place of Settlement BIC for Custodian, Counterparty Stock Account Optional. The Bank Identification (BIC) or SWIFT Code for the place of settlement, for the Counterparty\u0027s custodian. Knowledge Center"},"8211":{y:0,u:"../Content/static_counterpartystockaccount_paymentcategory.htm",l:-1,t:"Payment Category, Counterparty Stock Account",i:2.67661985126024E-05,a:"This setting relates to SWIFT EFT output (or other External Methods outputting SWIFT-like messages). Select one of the following output options for the selected Counterparty and the applicable External Method. EFT NOT REQUIRED - to ensure that the stock flow is not passed on for EFT processing (ends ..."},"8212":{y:0,u:"../Content/static_counterpartystockaccount_clearingfields.htm",l:-1,t:"Clearing Fields, Counterparty Stock Account",i:2.67661985126024E-05,a:"Optional. Bank Clearing Codes are used with some currencies to identify the Counterparty (Beneficiary) and Intermediary (if any). Specifically, if the selected Currency defines any Bank Clearing Field information, those fields are displayed on the Custodian Details tab, with the specified captions and ..."},"8213":{y:0,u:"../Content/static_unapprovedcounterpartystockaccount.htm",l:-1,t:"Unapproved Counterparty Stock Account page",i:4.559390959961E-05,a:"Use this page to view and approve or reject unapproved updates* and deletes of Counterparty stock account delivery instruction records when  Static Data Approval  appliess - that is, when the Counterparty Delivery Instructions Approval Level is set to Single or Dual (on the Data Security page). *NOTES: ..."},"8214":{y:0,u:"../Content/static_externalmethod.htm",l:-1,t:"External Method page",i:0.000890619496918271,a:"Use this page to define links to external Bank Payment or Confirmation Matching system interfaces, or to map specific identifiers for use in Location, Counterparty, and Entity records. To add a new record (from scratch) - Click New, fill in the data fields, and Save. To list records - Click  to open ..."},"8215":{y:0,u:"../Content/static_externalmethod_name.htm",l:-1,t:"Name, External Method",i:2.67661985126024E-05,a:"Name, External Method A unique name identifying the External Method record throughout the system. Knowledge Center"},"8216":{y:0,u:"../Content/static_externalmethod_shortname.htm",l:-1,t:"Short Name, External Method",i:2.67661985126024E-05,a:"Short Name, External Method A shorter name of up to ten characters that can be used instead of the Name where space is limited - for example, in column headings on a report. This short name does not have to be unique and may be edited by authorized users.  Knowledge Center"},"8217":{y:0,u:"../Content/static_externalmethod_externalname.htm",l:-1,t:"External Name, External Method",i:2.67661985126024E-05,a:"External Name, External Method A more descriptive name for the External Method; one that may be used in formal communications. Knowledge Center"},"8218":{y:0,u:"../Content/static_externalmethod_methodtype.htm",l:-1,t:"Method Type, External Method",i:2.67661985126024E-05,a:"One of the following: Payment - for a method used by external Bank Account Defaulting rules and EFT interfaces, Confirmation - for a method used by the External Confirmation Matching process, or Mapping - for a method used to provide specific identifiers for use with Location, Counterparty, and Entity ..."},"8219":{y:0,u:"../Content/static_externalmethod_language.htm",l:-1,t:"Language, External Method",i:2.67661985126024E-05,a:"(Payment or Confirmation method types only.) Specify the language you want the EFTs and Confirmations to be produced in. The options are: Default - No translation required, produce in the local language. English - Translate into English (ASCII). This is mandatory for SWIFT FIN* messages if any data is ..."},"8220":{y:0,u:"../Content/static_externalmethod_exportsource.htm",l:-1,t:"Export Source, External Method",i:2.67661985126024E-05,a:"Export Source, External Method (Payment methods only.) Select the  External Method Source  record that links the Payment method with the interface file definitions and locations. Knowledge Center"},"8221":{y:0,u:"../Content/static_externalmethod_plugin.htm",l:-1,t:"Workflow Template",i:2.67661985126024E-05,a:"EFT Plug-In / Template, External Method (Payment methods only.) For the Payment Method, select the workflow template you set up for EFT or the EFT Plug-in (default or custom tool). Workflow Template If the workflow template is in an unpublished state, then a \"Template Unpublished\" badge appears on the ..."},"8222":{y:0,u:"../Content/static_externalmethod_cpdelaccvalidation.htm",l:-1,t:"Validate Counterparty Delivery Instructions exist",i:2.67661985126024E-05,a:"(Payment methods only.) Select this option to check that a matching Counterparty Bank Account Instructions record exists for each EFT payment flow (amount \u003c 0) using this External Method*. If that validation fails, the cash flow or stock flow cannot be actioned - either automatically at deal save time, ..."},"8223":{y:0,u:"../Content/static_externalmethod_enableidentifiers.htm",l:-1,t:"Enable Identifiers, External Method",i:2.67661985126024E-05,a:" Identifiers may be mandatory for some Payment or Confirmation methods. Select this option to enable users to specify an identifier specific to this External Method, for Counterparties, Entities, and/or Locations. The identifier will be labeled with this External Method\u0027s Name. You can then optionally ..."},"8224":{y:0,u:"../Content/static_externalmethod_automaticmergingofsamedealcashflows.htm",l:-1,t:"Merge same deal cash flows automatically",i:2.67661985126024E-05,a:"(Payment and Confirmation methods only.) Select this option to combine cash flows from the same deal, for example, Principal and Interest payments, and send them as a single record. When this option is selected, EFT Processing for this Payment Method (subject to the restriction above) will ..."},"8225":{y:0,u:"../Content/static_externalmethod_providesettlementinstructions.htm",l:-1,t:"Provide settlement instructions",i:2.67661985126024E-05,a:"(Confirmation methods only.) Select this option to place the account number, name and address of the Counterparty bank in Field 57D for exporting Confirmations to the SWIFT or Finastra (formerly Misys) external matching systems. This information is stored in  Counterparty Delivery Instructions . The ..."},"8226":{y:0,u:"../Content/static_externalmethod_enablecancellationmessages.htm",l:-1,t:"Enable cancellation messages",i:2.67661985126024E-05,a:"(Payment methods only.) Select this option to enable EFT message Cancellation requests for this External Method using the  EFT Messages page , TIP: To be able to actually send specific Cancellation requests: your site must be licensed for EFTs, you must have Module Security rights to Cancel Messages ..."},"8227":{y:0,u:"../Content/static_moneymarketfund.htm",l:-1,t:"Money Market Fund Account page",i:0.000503948902586641,a:"Use this page to create and maintain Money Market Fund accounts. The system maintains a cashbook for each account. To add a new item record - in the New menu, select the Static Data item type for the page (Bank Account, Counterparty, and so on), fill in the data fields, and Save. To add a new group ..."},"8228":{y:0,u:"../Content/static_moneymarketfund_members.htm",l:-1,t:"Group Contents grid, Money Market Fund",i:2.67661985126024E-05,a:"This grid applies to group-level accounts only. It lists the group\u0027s member accounts. To add new members to the group: Use the Add button to open the Select Group Contents browse window, which shows the first ten accounts. Select one or more accounts and/or groups. If required, use the Search field at ..."},"8229":{y:0,u:"../Content/static_moneymarketfund_funddetails.htm",l:-1,t:"Fund Details tab",i:2.67661985126024E-05,a:"Fund Details tab The fields in this tab provide the main Interest details for the fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8230":{y:0,u:"../Content/static_moneymarketfund_interestdetails.htm",l:-1,t:"Interest Details area, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Interest Details area, Fund Details tab, Money Market Fund The fields in this area provide the main Interest details for the fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8231":{y:0,u:"../Content/static_moneymarketfund_theinterest_effectivedate.htm",l:-1,t:"Effective Date, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Effective Date - Select an available Effective Date to set the current Interest Rate record to be applied. TIPS: A fund can have multiple interest calculation records with each record becoming active on its effective date and remaining in effect until a newer record becomes active. Each Interest Rate ..."},"8232":{y:0,u:"../Content/static_moneymarketfund_theinterest_calculateinterest.htm",l:-1,t:"Calculate Interest, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculate Interest - Select one of the following options: NO - to exclude the fund from interest calculations, YES - to calculate Interest for the fund, GROUP - to use the Interest Rate record for the Group, or... NET GROUP - to calculate interest only on the Group\u0027s net balance. Knowledge Center"},"8233":{y:0,u:"../Content/static_moneymarketfund_theinterest_withholdingcalculationbasedon.htm",l:-1,t:"Base Withholding Tax on, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Base Withholding Tax on, Fund Details tab, Money Market Fund Select what the system base calculation of Withholding Tax on - one of the following: CREDIT INTEREST, DEBIT INTEREST, BOTH, or... NONE. Knowledge Center"},"8234":{y:0,u:"../Content/static_moneymarketfund_theinterest_interestcalculationbasedon.htm",l:-1,t:"Interest Calculation Based On, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Select the date on which to base interest calculations for this fund - one of: Value Date or... Bank Value Date. NOTE: The Bank Value Date will differ from the Value Date only on cash flows and Fund Deals transfers after Bank Reconciliation has set it from a matching bank flow - provided that the Match ..."},"8235":{y:0,u:"../Content/static_moneymarketfund_calculateinterest.htm",l:-1,t:"Calculated Interest area, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculated Interest area, Fund Details tab, Money Market Fund (Available only when Calculate Interest is YES on this tab.) The fields in this area provide Interest calculation details for the fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8236":{y:0,u:"../Content/static_moneymarketfund_theinterest_on.htm",l:-1,t:"Calculate Interest On, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"On - Specify a method to be used to calculate the fund\u0027s Interest amount - select from: TOP MARGINAL RATE The closing fund balance determines which single row from the Fund Interest Rates table to use. The rate from that row is then applied to the entire balance. TIERED RATES Applies the rates from the ..."},"8237":{y:0,u:"../Content/static_moneymarketfund_theinterest_using.htm",l:-1,t:"Calculate Interest Using, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculate Interest Using, Fund Details tab, Money Market Fund Using - The default has been selected - DAILY CLOSING BALANCE. The Interest calculation will be based on the balance at the end of each day. Knowledge Center"},"8238":{y:0,u:"../Content/static_moneymarketfund_theinterest_ratetype.htm",l:-1,t:"Rate Type, Calculate Interest area, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Rate Type, Calculate Interest area, Fund Details tab, Money Market Fund Rate Type - Select the Rate Type. The system will use this to select the applicable Bank Interest Rate record when calculating interest on this account. Knowledge Center"},"8239":{y:0,u:"../Content/static_moneymarketfund_theinterest_daysbasis.htm",l:-1,t:"Days Basis, Calculated Interest area, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Specify the fund\u0027s Interest days basis that should be used when calculating interest on this fund. NOTE: If the Frequency field (see Interest Periods panel) is set to DAILY, you must set this field to one of the ACTUAL days options (for example, ACTUAL/ACTUAL or ACTUAL/360). Knowledge Center"},"8240":{y:0,u:"../Content/static_moneymarketfund_theinterest_grossinterest.htm",l:-1,t:"Calculate interest on a gross basis, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Select this option to calculate the fund\u0027s Interest on a gross basis. This enables G/L postings for the Interest to be split for payments and receipts (or income and expenses). Clear the option to calculate Interest on a net basis (the default). NOTE: You would normally select this option only for ..."},"8241":{y:0,u:"../Content/static_moneymarketfund_periods.htm",l:-1,t:"Periods area, Money Market Fund",i:2.67661985126024E-05,a:"(Available only when Calculate Interest is YES on this tab.) Use this area to specify the following Interest timing details for the fund: Frequency - the interest period for the third party interest calculations, Interest Period Ends - the relative date each third party interest period ends, Cash Flow ..."},"8242":{y:0,u:"../Content/static_moneymarketfund_other.htm",l:-1,t:"Other area, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Other area, Fund Details tab, Money Market Fund (Available only when Calculate Interest is YES on this tab.) Use this area to enter other details for this fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8243":{y:0,u:"../Content/static_moneymarketfund_theinterest_cashflowaccount.htm",l:-1,t:"Cashflow Account, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Cash Flow Account - To direct the interest cash flows calculated for this fund to a different fund, select an alternative funding account from this list. Otherwise, select this fund from the list (or leave blank) to default to the actual account for which the interest is calculated. CAUTION: When you ..."},"8244":{y:0,u:"../Content/static_moneymarketfund_theinterest_creditinteresttaxtype.htm",l:-1,t:"Credit Interest Tax Type, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available only when Base Withholding Tax on is CREDIT INTEREST or BOTH.) Select the relevant Withholding Tax Type. This enables Bank Interest Statement processing to automatically calculate Withholding Tax on interest payments credited to this account.. TIP: You would normally use this field only for ..."},"8245":{y:0,u:"../Content/static_moneymarketfund_theinterest_debitinteresttaxtype.htm",l:-1,t:"Debit Interest Tax Type, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available when Base Withholding Tax on is DEBIT INTEREST or BOTH.) Select the relevant Withholding Tax Type from the drop-down list. This enables Bank Interest Statement processing to automatically calculate Withholding Tax on interest payments debited to this account. TIP: You would normally use this ..."},"8246":{y:0,u:"../Content/static_moneymarketfund_theinterest_taxpaymentaccount.htm",l:-1,t:"Tax Payment Account, Fund Details tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available only if Calculate Interest is YES.) If a Tax Type is selected in the Taxes field, you must use this field to select another bank account, from which the Withholding Tax payments will be made (to the relevant Tax Authority). You cannot select this account (the account whose details you are ..."},"8247":{y:0,u:"../Content/static_moneymarketfund_thirdpartyinterest.htm",l:-1,t:"Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"This tab applies only for Transaction-level accounts (not groups). Complete this tab when you have member accounts in a Net Group and you need to calculate the Third Party\u0027s share of the group interest for recharging. [For details of data items, click on an item when the Help panel is open.] Knowledge ..."},"8248":{y:0,u:"../Content/166359.htm",l:-1,t:"Interest Details area, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Interest Details area, Third Party Interest tab, Money Market Fund The fields in this area provide the main Interest details for the fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8249":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_effectivedate.htm",l:-1,t:"Effective Date field, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Effective Date - Select an available Effective Date to set the current Interest Rate record to be applied. TIPS: A fund can have multiple interest calculation records with each record becoming active on its effective date and remaining in effect until a newer record becomes active. Each Interest Rate ..."},"8250":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_calculateinterest.htm",l:-1,t:"Calculate Interest field, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculate Interest - Select one of the following options: NO - to exclude the fund from interest calculations, YES - to calculate Interest for the fund, GROUP - to use the Interest Rate record for the Group, or... NET GROUP - to calculate interest only on the Group\u0027s net balance. Knowledge Center"},"8251":{y:0,u:"../Content/166362.htm",l:-1,t:"Calculated Interest area, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculated Interest area, Third Party Interest tab, Money Market Fund (Available only when Calculate Interest is YES on this tab.) The fields in this area provide Interest calculation details for the fund. [For details of data items, click on an item when the Help panel is open.] Knowledge Center"},"8252":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_on.htm",l:-1,t:"Calculate Interest On, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"On - Specify a method to be used to calculate the fund\u0027s Interest amount - select from: TOP MARGINAL RATE The closing fund balance determines which single row from the Fund Interest Rates table to use. The rate from that row is then applied to the entire balance. TIERED RATES Applies the rates from the ..."},"8253":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_using.htm",l:-1,t:"Calculate Interest Using, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Calculate Interest Using, Third Party Interest tab, Money Market Fund Using - The default has been selected - DAILY CLOSING BALANCE. The Interest calculation will be based on the balance at the end of each day. Knowledge Center"},"8254":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_ratetype.htm",l:-1,t:"Rate Type, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Rate Type, Third Party Interest tab, Money Market Fund Rate Type - Select the Rate Type. The system will use this to select the applicable Bank Interest Rate record when calculating interest on this account. Knowledge Center"},"8255":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_daysbasis.htm",l:-1,t:"Days Basis, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"Specify the fund\u0027s Interest days basis that should be used when calculating interest on this fund. NOTE: If the Frequency field (see Interest Periods panel) is set to DAILY, you must set this field to one of the ACTUAL days options (for example, ACTUAL/ACTUAL or ACTUAL/360). Knowledge Center"},"8256":{y:0,u:"../Content/166368.htm",l:-1,t:"Periods area, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available only when Calculate Interest is YES on this tab.) Use this area to specify the following Interest timing details for the fund: Frequency - the interest period for the third party interest calculations, Interest Period Ends - the relative date each third party interest period ends, Cash Flow ..."},"8257":{y:0,u:"../Content/166369.htm",l:-1,t:"Other area, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available only when Calculate Interest is YES on this tab.) Cash Flow Account The bank account to be used for interest receipts and payments resulting from the Third Party account calculations. TIP: This is normally the cash pool Group owner\u0027s transaction-level bank account in the group, but it can be ..."},"8258":{y:0,u:"../Content/static_moneymarketfund_thethirdpartyinterest_cashflowaccount.htm",l:-1,t:"Cashflow Account, Other area, Third Party Interest tab, Money Market Fund",i:2.67661985126024E-05,a:"(Available only when Calculate Interest is YES on this tab.) The bank account to be used for interest receipts and payments resulting from the Third Party account calculations. TIP: This is normally the cash pool Group owner\u0027s transaction-level bank account in the group, but it can be any account. ..."},"8259":{y:0,u:"../Content/static_moneymarketfund_g_lsetup.htm",l:-1,t:"G/L Setup tab, Money Market Fund",i:2.67661985126024E-05,a:"Use this tab to define the interaction details of this account with the general ledger, including the G/L Account codes. Only complete this tab if the account Owner (defined on the Entities tab) is a G/L Owner, or is related to a G/L Owner, and therefore has G/L entries created by Quantum when it ..."},"8260":{y:0,u:"../Content/static_moneymarketfund_entities.htm",l:-1,t:"Entities area, Money Market Fund",i:2.67661985126024E-05,a:"This area includes the following fields Owner - Select the entity that is recognized as the owner of the fund. NOTE: This choice does not preclude other Entities (even unrelated ones) from directing cashflows to this fund. Relationship - Select a relationship. The selected value combines with the Fund ..."},"8261":{y:0,u:"../Content/static_moneymarketfund_g_laccountdetails.htm",l:-1,t:"G/L Account Details area, G/L Setup tab, Money Market Fund",i:2.67661985126024E-05,a:"The G/L Account Details section contains the following fields. G/L Owner - Select a G/L Owner for the G/L entries that Quantum creates when recording transactions for this account. G/L Account Code - In the drop-down, select an account to which Quantum will post deal cash flows. If the appropriate G/L ..."},"8262":{y:0,u:"../Content/static_moneymarketfund_chargesg_lcodes.htm",l:-1,t:"Charges G/L Codes area, G/L Setup tab, Money Market Fund",i:2.67661985126024E-05,a:"The fields in this area record the G/L Chart of Account for charges to this fund. Charges Income - Select a Profit and Loss G/L account to which Charges income credited to this fund will be posted. Charges Expense - Select a Profit and Loss G/L account to which Charges expenses charged to this fund ..."},"8263":{y:0,u:"../Content/static_moneymarketfund_interestg_lcodes.htm",l:-1,t:"Interest G/L Codes area, G/L Setup tab, Money Market Fund",i:2.67661985126024E-05,a:"The fields in this area record the G/L Chart of Account codes for the following interest postings. Interest Income - Select a Profit and Loss G/L account to which Interest income credited to this fund will be posted. Interest Expense - Select a Profit and Loss G/L account to which Interest expenses ..."},"8264":{y:0,u:"../Content/static_moneymarketfund_thirdpartyinterestg_l.htm",l:-1,t:"Third Party Interest G/L area, G/L Setup tab, Money Market Fund",i:2.67661985126024E-05,a:"The fields in this area record the G/L Chart of Account codes for the following interest postings. Interest Income - Select a Profit and Loss G/L account to which Interest income credited to this fund will be posted. Interest Expense - Select a Profit and Loss G/L account to which Interest expenses ..."},"8265":{y:0,u:"../Content/static_moneymarketfund_deliverydetails.htm",l:-1,t:"Delivery Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Use the fields on this tab to provide default delivery instruction details. For example, if the delivery instruction is for Fund Manager A and Fund ID B, set up a (Counterparty) delivery instruction for Fund Manager A with an account number of Fund ID B, then, on this tab, link to that instruction. ..."},"8266":{y:0,u:"../Content/static_moneymarketfund_SenderAmount.htm",l:-1,t:"Senders Charges, Delivery Details tab, Money Market Fund",i:2.67661985126024E-05,a:"In the first field of this pair, select the default currency for senders charges made for transferring balance adjustments to this fund. In the second field, enter the default amount of the senders charges. NOTES: If this charge currency differs from the Fund currency (in the header area), you must ..."},"8267":{y:0,u:"../Content/static_moneymarketfund_ReceiverAmount.htm",l:-1,t:"Receiver\u0027s Charges, Delivery Details tab, Money Market Fund",i:2.67661985126024E-05,a:"In the first field of this pair, select the default currency for receivers charges made for transferring balance adjustments to this fund. In the second field, enter the default amount of the receivers charges. NOTES: If this charge currency differs from the Fund currency (in the header area), you must ..."},"8268":{y:0,u:"../Content/static_moneymarketfund_TranslationRateType.htm",l:-1,t:"Translation Rate Type, Delivery Details tab, Money Market Fund",i:2.67661985126024E-05,a:"If the currency defined for Senders Charges and/or Receivers Charges is different from the Fund currency (in the header area), use this field to specify the type of Translation Rate that will apply. Select an FX rate. The value of this rate will then be used to translate the charges amount into the ..."},"8269":{y:0,u:"../Content/static_moneymarketfund_otherdetails.htm",l:-1,t:"Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"This tab applies only to Transaction-level accounts (not groups). Use this tab to: define Bank Delivery details that are different from those recorded on the account header, and view details of the last Statement run for the account or account group. [For details of data items, click on an item when ..."},"8270":{y:0,u:"../Content/166329.htm",l:-1,t:"Fund Details area, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Fund Details area, Other Details tab, Money Market Fund This area contains the following fields. Knowledge Center"},"8271":{y:0,u:"../Content/static_moneymarketfund_sortcode.htm",l:-1,t:"Sort Code, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"Sort Code, Other Details tab, Money Market Fund If an account identifier sort code is applicable, record it here (for example, a Chips UID code). If not, leave this field blank. Knowledge Center"},"8272":{y:0,u:"../Content/static_moneymarketfund_laststatementnumber.htm",l:-1,t:"Last Statement Number, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"If no Statements have yet been run for this account (by Bank Account query): Optionally use this field to set the last statement number, so that the first statement run by Bank Account query will start from that number plus one (instead of starting from 1). If required, you can set a Start Date for the ..."},"8273":{y:0,u:"../Content/static_moneymarketfund_bankclearingfields_Text.htm",l:-1,t:"Bank Clearing Fields area, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"If the fund\u0027s Currency has any Bank Clearing field information defined for it, those fields (and only those fields) are displayed here. NOTE: Some Bank Clearing fields pick up the template code for the appropriate Payment Method, according to your License agreement. In these cases, enter the relevant ..."},"8274":{y:0,u:"../Content/static_moneymarketfund_intermediarybank.htm",l:-1,t:"Intermediary Bank area, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"The Intermediary Bank area contains the following fields. Bank - If settlements involving this Bank Account are to be directed through an Intermediary bank, either type the name of the bank here, or select it from the lookup. If not, leave this field blank. BIC - Enter the Bank Identification Code or ..."},"8275":{y:0,u:"../Content/static_moneymarketfund_intermediarybankclearingfields_Text.htm",l:-1,t:"Intermediary Bank Clearing Fields area, Other Details tab, Money Market Fund",i:2.67661985126024E-05,a:"If the Intermediary bank\u0027s Currency has any Bank Clearing Field information defined for it, those fields are displayed here. Only Bank Clearing fields defined for that Currency are displayed, with the specified captions and field length. Some Bank Clearing fields pick up the template code for the ..."},});