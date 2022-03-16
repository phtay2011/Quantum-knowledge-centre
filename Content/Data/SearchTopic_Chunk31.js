define({"2375":{y:0,u:"../Content/188920.htm",l:-1,t:"Futures \u0026 ETOs Posting Rules",i:6.422328907933E-05,a:"Use the Futures \u0026 ETOs tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or ..."},"2376":{y:0,u:"../Content/188921.htm",l:-1,t:"Futures \u0026 ETOs Posting, Balance Sheet tab",i:6.30283301005596E-05,a:"Premium Payable - This G/L tag is used if the premium is payable on a date other than the deal date. Premium Receivable - See Premium Payable. (Reverse the direction of the accounting entries). Settlement Payable - This G/L tag is used when a contract is cash settled, and settlement date is on a date ..."},"2377":{y:0,u:"../Content/188922.htm",l:-1,t:"Futures \u0026 ETOs Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Broker Commission / Clearing Fee / Exchange Fee (applies to Futures and ETOs; Debit account for fees that are payable) Credit Profit and Loss accounts are not required for commissions and fees. The reason for this is that the Futures Exchange or Broker always receives the fee. The Buyer or Seller ..."},"2378":{y:0,u:"../Content/188926.htm",l:-1,t:"Futures \u0026 ETOs Posting, Off Balance Sheet tab",i:2.67661985126024E-05,a:"NOTE: To use these entries; In  Accounting Rules , select the  Apply contingent accounting  check box. ETO Exposure - Account to record the contingent exposure. Quantum creates this entry (dated the deal date) when the deal is saved. It also creates reversal entries dated the contract settlement date. ..."},"2379":{y:0,u:"../Content/188929.htm",l:-1,t:"G/L Journals Posting Rules",i:3.24540205739895E-05,a:"Use the G/L Journal tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or ..."},"2380":{y:0,u:"../Content/188930.htm",l:-1,t:"G/L Journal Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"NOTE: These G/L entries are relevant to Currency Translation ( Currency Translation Processing ,  Currency Translation ) only. Base CCY Position - A separate G/L account template must be set up for this account where the template type has been defined as CCY Position. You cannot manually post into this ..."},"2381":{y:0,u:"../Content/188932.htm",l:-1,t:"G/L Journal Postings, Profit and Loss tab",i:2.67661985126024E-05,a:"Base CCY Conversion Adjustment - This G/L entry is relevant only to those clients who have performed Base Currency Conversions prior to the Quantum 4.00.00 release. The field is used for display purposes only. Do not select a value as part of your posting rules definition."},"2382":{y:0,u:"../Content/188933.htm",l:-1,t:"G/L Journal Postings, Example of Currency Translation entries (Deal Level) ",i:2.67661985126024E-05,a:" The example below illustrates the deal level currency translation entries generated from revaluing the Face Value Account. Buy GBP bond Face Value 100 million @ 100, no coupon accrued Base CCY = USD (rate on day 1.647) With Principal Accounting in Accounting Rules set to FACE VALUE the entry passed to ..."},"2383":{y:0,u:"../Content/188935.htm",l:-1,t:"Hedge Relationships Posting Rules",i:0.00013403293446428,a:"When you have set up the  Accounts required for Hedge Accounting  use the Hedge Relationships tab to define the rules that determine to which accounts a deal posts G/L entries. You only need to define accounts for those entries that your account setup will post to. TIP: Before you create or modify a ..."},"2384":{y:0,u:"../Content/188937.htm",l:-1,t:"Interest Rate Options Posting Rules",i:3.24540205739895E-05,a:"Use the Interest Rate Options tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or ..."},"2385":{y:0,u:"../Content/188938.htm",l:-1,t:"Interest Rate Option Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"Premium Payable - This G/L tag is used if the premium is payable on a date other than the deal date. The account is credited at deal save. If the Accrue premium check box in Accounting Rules is: Selected, the contra account is Premium Expense Accrual. Clear, the contra account is Premium Expense.  The ..."},"2386":{y:0,u:"../Content/188941.htm",l:-1,t:"Interest Rate Option Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Premium Expense - This G/L tag is used to record the payment of premium.  If the Accrue premium check box in Accounting Rules is: Selected, the Premium Expense account is debited at deal save, the contra account being Bank Account or Premium Payable (B/S), depending on the settlement date of the ..."},"2387":{y:0,u:"../Content/188942.htm",l:-1,t:"Interest Rate Option Posting, Off Balance Sheet tab",i:2.67661985126024E-05,a:"NOTES: To create these entries, in  Accounting Rules  select the  Apply contingent accounting  check box. These entries apply to Simple Interest Rate Options (Cap, Floor, Collar) and Bond Options (Call, Put) only, there are no contingent entries for Swaptions. Borrowing Exposure - This records the ..."},"2388":{y:0,u:"../Content/188943.htm",l:-1,t:"Interest Rate Swaps Posting Rules",i:3.24540205739895E-05,a:"Use the Interest Rate Swaps tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or ..."},"2389":{y:0,u:"../Content/188944.htm",l:-1,t:"Interest Rate Swap Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"Swap Principal: Pay - Debit Balance Sheet account. This records the swap asset, where physical exchanges of Principal occur. The contra entry is to the bank account. Swap Principal: Receive - Credit Balance Sheet account. This records the swap liability, where physical exchanges of Principal occur. The ..."},"2390":{y:0,u:"../Content/188946.htm",l:-1,t:"Interest Rate Swap Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Bond Discount: Pay - Debit Profit and Loss account. If the Accrue capital check box in Accounting Rules is: Cleared, Quantum creates this entry at deal save time, and contras it by a bank account entry. Selected, the Accruals Posting report creates this entry, and contras it to the Bond Discount ..."},"2391":{y:0,u:"../Content/188948.htm",l:-1,t:"Interest Rate Swap Posting, Off Balance Sheet tab",i:2.67661985126024E-05,a:"TIP: To use these entries, in Accounting Rules , select the Apply contingent accounting check box. Swap Exposure Pay - Credit Off Balance Sheet account. This records the contingent Pay exposure. Quantum creates this entry on deal date, and reverses it on the Swap maturity date. Swap Exposure Pay Contra ..."},"2392":{y:0,u:"../Content/a_IRS-Posting-Rule-Support-for-Neg-Interest-Rates.htm",l:-1,t:"Interest Rate Swap - Posting Rule support for Negative Interest Rates",i:2.67661985126024E-05,a:"Negative Interest Income and Negative Interest Expense Accounting Tags have been added to the Interest Rate Swap Posting Rules. This is to support an Accounting Standard interpretation that a negative interest rate on a financial asset does not meet the definition of interest revenue because it ..."},"2393":{y:0,u:"../Content/188949.htm",l:-1,t:"Money Market \u0026 Securities Posting Rules",i:3.24540205739895E-05,a:"Use the Money Market \u0026 Securities tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. The rules can apply to positive and negative interest rates. TIP: Before you create or ..."},"2394":{y:0,u:"../Content/188950.htm",l:-1,t:"Money Market \u0026 Securities Posting, Balance Sheet tab",i:2.95212244434399E-05,a:"Issue Fee Expense Accrual - Credit Balance Sheet account. When, in Accounting Rules, the Accrual method is Amortized Cost and Accrue issue fee is selected, then on deal G/L creation Issue Fee Expense Accrual (B/S) is posted and is expensed to the Profit and Loss account each time accruals are ..."},"2395":{y:0,u:"../Content/188953.htm",l:-1,t:"Money Market \u0026 Securities Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Capital Discount - Debit Profit and Loss account. This is used for the capital discount on coupon-bearing securities. Capital Discount is the amount by which the traded price is below the issue price of a coupon-based instrument. If the Accrue capital check box in Accounting Rules is: Cleared, Quantum ..."},"2396":{y:0,u:"../Content/188956.htm",l:-1,t:"Money Market \u0026 Securities Posting, Off Balance Sheet tab",i:2.67661985126024E-05,a:"Off Balance Sheet entries for Money Market deals record the contractual exposure between Deal Date and Settlement Date. Capital Discount Exposure - Credit Balance Sheet account. Quantum posts this entry on deal date to record the contingent position for capital discount on coupon-bearing securities. It ..."},"2397":{y:0,u:"../Content/a_MM-Posting-Rule-Support-Neg-Interest-Rate.htm",l:-1,t:"Money Market - Posting Rule support for Negative Interest Rates",i:2.67661985126024E-05,a:"Negative Interest Income and Negative Interest Expense Accounting Tags have been added to the Money Market \u0026 Securities Posting Rules. Formulas that are affected by this change include: Yield Periodic Yield on Maturity Yield On Statement Yield Rolling Yield CDI Periodic Yield CDI Rolling Yield Compound ..."},"2398":{y:0,u:"../Content/188958.htm",l:-1,t:"Repo Agreement Posting Rules",i:3.24540205739895E-05,a:"Use the Repos tab to define the rules that determine the accounts to which a deal posts G/L entries. You need to define accounts only for those entries to which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or Accounting ..."},"2399":{y:0,u:"../Content/188959.htm",l:-1,t:"Repos Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"Securities Settlement: Asset - Debit Balance Sheet account. Securities Settlement: Liability - Credit Balance Sheet account. Coupon Expense Accrual - This is the reinvestment interest cost associated with the coupon of underlying security. Credit Balance Sheet account. If the Accrue interest check box ..."},"2400":{y:0,u:"../Content/188960.htm",l:-1,t:"Repos Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Coupon Expense - This is the reinvestment interest cost associated with the coupon of underlying security. Debit Profit and Loss account.  If the Accrue interest check box in Accounting Rules is: Clear, Quantum creates this entry at deal save time, and contras it against a bank account entry.  ..."},"2401":{y:0,u:"../Content/188966.htm",l:-1,t:"Repos Posting, Off Balance Sheet tab",i:2.67661985126024E-05,a:"NOTE: To use these entries, make sure the  Apply contingent accounting  check box in  Accounting Rules  is selected. Entries for Securities Borrowing and Lending Repos These entries record the borrowing or lending of a particular security, usually against collateral in the form of some other security. ..."},"2402":{y:0,u:"../Content/189016.htm",l:-1,t:"Unit Deal Posting Rules",i:3.24540205739895E-05,a:"Unit Deals are the Buy and Sell trades and are separate deals in Quantum. They each have a link back to the Holding (Unit Holding). The following information will be calculated and posted against the individual trade: Trade Settlement cashflows and G/L entries Gain/(Loss) on Sale for LIFO, FIFO, and ..."},"2403":{y:0,u:"../Content/189017.htm",l:-1,t:"Unit Deal Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"Gross Settlement - Debit/Credit Balance Sheet account. Quantum posts the trade settlement (Units x Price) G/L entries to this account, and contras it to a Bank account entry. Used also for Cash Adjustment and Non Cash Adjustment on Share Split/Reverse Split where the closeout method is LIFO, FIFO, and ..."},"2404":{y:0,u:"../Content/189022.htm",l:-1,t:"Unit Deal Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Fee Expense 1 - Debit Profit and Loss account. Used for Fee Expense on Equities/Mutual Funds. This is posted on Settlement Date, and the contra entry is Bank account. Fee Income 1 - Credit Profit and Loss account. Used for Fee Income on Equities/Mutual Funds deals. This is posted on Settlement Date, ..."},"2405":{y:0,u:"../Content/189024.htm",l:-1,t:"Unit Deal Posting, Off Balance Sheet tab",i:4.64782522048673E-05,a:"Gross Settlement Exposure - Credit Off Balance Sheet account. Quantum posts this on Deal Date to record the contingent position. It is reversed on Settlement Date and posted to the Gross Settlement Balance Sheet account. Gross Settlement Contra - Debit Off Balance Sheet account. Quantum posts this on ..."},"2406":{y:0,u:"../Content/188969.htm",l:-1,t:"Unit Holding Posting Rules",i:3.24540205739895E-05,a:"Use the Unit Holding tab to define the rules that determine the accounts to which a Unit Holding posts G/L entries. You need to define accounts only for those entries for which your account set-up will post. TIP: Before you create or modify a posting rule, ensure you have selected the correct Entity or ..."},"2407":{y:0,u:"../Content/188970.htm",l:-1,t:"Unit Holding Posting, Balance Sheet tab",i:2.67661985126024E-05,a:"Gross Settlement - Credit Balance Sheet Liability account. Used for: Cash Adjustment on Share Split/Reverse Split where the closeout method is Weighted Average. This is the contra entry where Quantum posts a bank account entry. Non Cash Adjustment on Share Split/Reverse Split where the closeout method ..."},"2408":{y:0,u:"../Content/188971.htm",l:-1,t:"Unit Holding Posting, Profit and Loss tab",i:2.67661985126024E-05,a:"Dividend Income - Credit Profit and Loss account. Cash dividends are calculated and posted at a Holding level. The cash flow is settled from the Holding deal. Non cash adjustment expense - Debit Profit and Loss account. Used when the closeout method is Weighted Average for the Non Cash Adjustment ..."},"2409":{y:0,u:"../Content/167811.htm",l:-1,t:"Approver - Back Office (Quantum)",i:0.000706333802326116,a:"An Approver has rights to approve settlements and/or deals, and/or to approve changes to static data (optional). An Approver is a User with their Approver option selected. You must designate a User as an Approver before approval rights and limits can be assigned to them (on the Approver page). TIP: ..."},"2410":{y:0,u:"../Content/182203.htm",l:-1,t:"Approver Procedures (Quantum)",i:2.67661985126024E-05,a:"NOTE: Changes to Approvers will themselves require approval if system-wide Security Approval is enabled and the Approver Approval Level is not None (on the Data Security page). If so, the Approver page will show a Pending Changes badge with a link to the  Unapproved Approver  page (where approval or ..."},"2411":{y:0,u:"../Content/186202.htm",l:-1,t:"Unapproved Approvers",i:0.00018137410902684,a:"Qualified Approvers* may use the  Unapproved Approver page  to view and approve or reject unapproved changes* to Approver records when  Static Data Approval  applies - that is, when the Approver Approval Level option is set to Single (on the Data Security page). *NOTES: Only Approver users with the ..."},"2412":{y:0,u:"../Content/167700.htm",l:-1,t:"Bank Account - Back Office (Quantum)",i:0.00246615325318813,a:"Bank (or cash) accounts are a fundamental part of the Quantum infrastructure. All cash flows (receipts and payments) are directed by defaulting structures to Bank accounts, and a deal cannot be saved without them (any associated stock flows are similarly directed by defaulting structures to Stock ..."},"2413":{y:0,u:"../Content/167703.htm",l:-1,t:"Setting Up Accounts",i:3.66656927189929E-05,a:"You need to set up: all physical bank, fund, broker, and stock accounts that your organization will access and that affect the cash position that your Treasury manages, at least one bank account for every currency your organization may use in Quantum Six - so that the system can monitor cash flows ..."},"2414":{y:0,u:"../Content/167719.htm",l:-1,t:"Static Data Approval and Bank Accounts",i:0.000497744364777777,a:"The Quantum Static Data Approval feature will assist your site with Sarbanes-Oxley compliance. It offers a dual approval facility for selected static data types - including Bank Accounts - system-wide. If your site is licensed for Resource security, you can specify one of three possible Bank Account ..."},"2415":{y:0,u:"../Content/167727.htm",l:-1,t:"About Bank Account Groups",i:0.000117123019524346,a:"NOTE: This topic also covers Broker and Stock accounts. Use account groups to: link multiple accounts into related groups for reporting and administrative purposes (for example, Bank Statement runs),  apply a single interest rate structure to multiple accounts, or aggregate multiple accounts, and ..."},"2416":{y:0,u:"../Content/186544.htm",l:-1,t:"About Bank Account Interest",i:2.67661985126024E-05,a:"About Bank Account Interest"},"2417":{y:0,u:"../Content/186438.htm",l:-1,t:"Effective Dates and Interest Calculation",i:3.13164561617121E-05,a:"Each account can have multiple interest calculation records, with each record becoming active on its Effective Date and remaining in effect until a newer record becomes active. Each interest calculation record is called a Detail record, and is identified in the database by its Effective Date. In the ..."},"2418":{y:0,u:"../Content/186545.htm",l:-1,t:"Calculating and Posting Bank Account Interest",i:2.67661985126024E-05,a:"Bank Account Interest is calculated and posted using a  Bank Interest Statements Processing  query run, in order to mirror the interest cashflows calculated by the bank. The Bank Interest Statement run generates interest cash flows by creating Account Interest (AI) deals. AI deals have deal numbers in ..."},"2419":{y:0,u:"../Content/186547.htm",l:-1,t:"Accruing Bank Account Interest",i:2.67661985126024E-05,a:"An  Accruals Processing  run enables you to accrue Bank Account Interest more frequently than the bank\u0027s calculation cycle. The Accruals are recorded using notional deals, which do not appear as Account Interest (AI) deals, so do not have standard Quantum deal numbers and do not appear as Bank Account ..."},"2420":{y:0,u:"../Content/69210.htm",l:-1,t:"Net or Gross Interest Posting / WHT Calculation",i:3.81418426353765E-05,a:"You can choose one of two ways of calculating interest for the purposes of G/L posting and/or Withholding Tax (WHT) calculation: (For details of the G/L codes used for interest-related postings, see  Interest-Related G/L Postings .) Net Interest basis With this method: one interest amount is calculated ..."},"2421":{y:0,u:"../Content/186485.htm",l:-1,t:"Interest Calculation for Bank Account Groups",i:0.000149072158275027,a:"Quantum Six provides the following methods for calculating bank interest when a bank account is part of a group. If an account is not in a group, the Default method is used. Default method Interest is calculated one member account at a time, using the Rate records and calculation parameters specified ..."},"2422":{y:0,u:"../Content/186550.htm",l:-1,t:"Third Party Interest Calculation",i:0.000153477681497937,a:"A typical Third Party Interest arrangement has the following components: one group account record representing a real bank account, often an overdraft account held as a cash pool by your head office or central treasury on behalf of a number of subsidiary businesses; several individual member accounts, ..."},"2423":{y:0,u:"../Content/167730.htm",l:-1,t:"Examples of Interest-Related Settings",i:2.67661985126024E-05,a:"Standard Interest Settings The settings for standard interest calculation are as follows. Group Interest Settings These settings enable many members to use the same Bank Interest Rate. Interest Settings for Members of the group: Third Party Interest Settings Third Party Interest settings enable use of ..."},"2424":{y:0,u:"../Content/186488.htm",l:-1,t:"Interest-Related G/L Postings",i:0.000131990916750594,a:"A bank account\u0027s interest can be charged (or credited) to itself or to a different bank account (the Interest account), as specified in the Cash Flow Account field on the Interest tab. Any Withholding Tax (WHT) due on interest must be held in (and later paid to the Tax Authority from) a different bank ..."},"2425":{y:0,u:"../Content/186521.htm",l:-1,t:"Withholding Tax on Call Account Interest",i:3.81418426353765E-05,a:"A  Bank Interest Statements Processing  query run calculates the account interest and generates an Interest Adjustment deal. If the interest is a payment (to the bank account owner), and the bank account is linked to a Debit Interest Tax Type, the Bank Interest deal includes a Bank Account Transfer ..."},"2426":{y:0,u:"../Content/167728.htm",l:-1,t:"Making Multiple Currency Payments from one Bank Account ",i:0.000164508592474038,a:" You can optionally set up a bank account to handle multiple currency payments, by creating special bank account numbers for the additional currencies. Such a bank account number has a control character ([) after the actual account number, followed by a currency code (for example, [USD). For example, ..."},"2427":{y:0,u:"../Content/68257.htm",l:-1,t:"About Cash Concentration and Thresholds",i:2.67661985126024E-05,a:"(Applies to transaction-level Bank, Broker, or Money Market Fund accounts.) Cash concentration: is the amalgamation of funds from several accounts into one or more control accounts, is used to sweep surpluses and fund deficits, using centralized bank accounts where the funds can be more effectively ..."},"2428":{y:0,u:"../Content/186506.htm",l:-1,t:"Delivery Charges for Bank Account Transactions",i:0.000117771351494795,a:"You can optionally use the Charges fields on the Bank Account page\u0027s Delivery Details tab to automatically create separate Bank Account Adjustment deals for charges on account transactions. These in turn can output EFT Payment messages when: the External Method is SWIFT or SWIFT-compatible, and the ..."},"2429":{y:0,u:"../Content/167720.htm",l:-1,t:"Unapproved Bank Accounts",i:0.00163550787005048,a:"Use the  Unapproved Bank (Cash) Account page  to view and approve or reject unapproved updates* and deletes of account records when  Static Data Approvalapplies - that is, when the Bank Account Approval Level is set to Single or Dual (on the Data Security page). If the Approval Level is set to None, ..."},"2430":{y:0,u:"../Content/177469.htm",l:-1,t:"Importing Balances",i:0.000155218786081945,a:"Before you can use the  Import Balances  page to import balances for any bank accounts, you must define the location of the import data file for each account, as follows. On the Bank Account page, select the account record in the browse list. On the Delivery Details tab, select the Balance Import ..."},"2431":{y:0,u:"../Content/167732.htm",l:-1,t:"Broker Accounts (Quantum)",i:0.000929517455442266,a:"Use the  Broker Account page  to create and maintain broker accounts. The system maintains a cashbook for each account. NOTE: When  Static Data Approval  applies and you add, update, or delete a record: until the change is approved (or rejected), no further changes are allowed to that record (on this ..."},"2432":{y:0,u:"../Content/167735.htm",l:-1,t:"Static Data Approval and Broker Accounts",i:0.000234843310052696,a:"The Quantum Static Data Approval feature will assist your site with Sarbanes-Oxley compliance. It offers a dual approval facility for selected static data types - including Broker Accounts - system-wide. If your site is licensed for Resource security, you can specify one of three possible Bank Account ..."},"2433":{y:0,u:"../Content/167796.htm",l:-1,t:"Counterparty Bank Account - Back Office",i:0.000689628108278649,a:"Use the  Counterparty Bank Account page  to create and maintain one or more sets of bank account settlement instructions* to be used for a counterparty with whom the cash flows will occur. First establish the standing settlement instructions for each counterparty, then use the Counterparty Cash Account ..."},"2434":{y:0,u:"../Content/167799.htm",l:-1,t:"Static Data Approval and Counterparty Delivery Instructions",i:0.000266806013872336,a:"The Quantum Static Data Approval feature will assist your site with Sarbanes-Oxley compliance. It offers a dual approval facility for selected static data types - including Counterparty Delivery Instructions - system-wide. If your site is licensed for Resource security, you can specify one of three ..."},"2435":{y:0,u:"../Content/167803.htm",l:-1,t:"Unapproved Counterparty Bank Account Delivery Instructions",i:3.96844853811972E-05,a:"Use the  Unapproved Counterparty Bank Account Delivery Instructions page  to view and approve or reject unapproved updates* and deletes of Counterparty Bank Account Delivery Instruction records when  Static Data Approval  applies - that is, when the Counterparty Delivery Instructions Approval Level is ..."},"2436":{y:0,u:"../Content/167800.htm",l:-1,t:"Counterparty Stock Account - Back Office",i:0.000476198016659373,a:"Use the  Counterparty Stock Account page  to create and maintain one or more sets of stock account settlement instructions* to be used for a counterparty with whom the stock flows will occur. First establish the standing settlement instructions for each counterparty, then use the Counterparty Stock ..."},"2437":{y:0,u:"../Content/167806.htm",l:-1,t:"Unapproved Counterparty Stock Account Delivery Instructions",i:3.96844853811972E-05,a:"Use the  Unapproved Counterparty Stock Account Delivery Instructions page  to view and approve or reject unapproved updates* and deletes of Counterparty Stock Account Delivery Instruction records when  Static Data Approval  applies - that is, when the Counterparty Delivery Instructions Approval Level ..."},"2438":{y:0,u:"../Content/168592.htm",l:-1,t:"External Method - Back Office",i:0.00192524793870801,a:"Use the  External Method page  to define links to external Bank Payment EFT or Confirmation Matching system interfaces, or to map specific identifiers for use in Location, Counterparty, and Entity records. You can use this in a workflow template set up for EFT or in an EFT Plug-In (external tool). ..."},"2439":{y:0,u:"../Content/160452.htm",l:-1,t:"Data Translation - Translating SWIFT Messages into English before Sending",i:0.000248136452053687,a:"SWIFT FIN* messages must be in English. If you enter data in a language other than English, it must be translated into English (ASCII) before it can be included in SWIFT. *TIP: FIN messages are SWIFT MTxxx formatted messages (EFTs and Confirmations). The following task explains how to translate fields ..."},"2440":{y:0,u:"../Content/167754.htm",l:-1,t:"Money Market Fund - Back Office (Quantum)",i:0.0016841724511306,a:"Use the  Money Market Fund Account page  to create and maintain Money Market Fund accounts. The system maintains a cashbook for each account. NOTE: When  Static Data Approval  applies and you add, update, or delete a record: until the change is approved (or rejected), no further changes are allowed to ..."},"2441":{y:0,u:"../Content/188761.htm",l:-1,t:"About Money Market Funds",i:2.67661985126024E-05,a:"A Money Market Fund is a type of mutual fund that is required by law to invest in low-risk securities. They have relatively low risks compared with other mutual funds, and pay dividends that generally reflect short-term interest rates. Money Market Funds typically invest in government securities, ..."},"2442":{y:0,u:"../Content/167756.htm",l:-1,t:"Static Data Approval and Money Market Fund Accounts",i:0.000543807229650038,a:"The Quantum Static Data Approval feature will assist your site with Sarbanes-Oxley compliance. It offers a dual approval facility for selected static data types - including Money Market Fund Accounts - system-wide. If your site is licensed for Resource security, you can specify one of three possible ..."},"2443":{y:0,u:"../Content/167758.htm",l:-1,t:"Unapproved Money Market Fund Accounts",i:0.00179808252000817,a:"Use the  Unapproved Money Market Fund page  to view and approve or reject unapproved updates* and deletes of account records when  Static Data Approval  applies - that is, when the Bank Account Approval Level is set to Single or Dual (on the Data Security page). *NOTES: Update here covers add, edit, ..."},"2444":{y:0,u:"../Content/167823.htm",l:-1,t:"Signature List (Quantum)",i:0.000338240412546463,a:"Use the  Signature List page  to set up and maintain Signature Lists, to which you can then assign individual  Approver  users (on the Approver page). Signature Lists enable you to assign different sets (or pools) of Approvers to deal actions and settlement flows for different Entities, Counterparties, ..."},"2445":{y:0,u:"../Content/167744.htm",l:-1,t:"Stock Account - Back Office (Quantum)",i:0.000399774445651866,a:"Use the  Stock Account page  to create and maintain internal and counterparty stock accounts held with custodians. These are required if the system is to handle stock flows for Securities deals. NOTE: When  Static Data Approval  applies and you add, update, or delete a record: until the change is ..."},});