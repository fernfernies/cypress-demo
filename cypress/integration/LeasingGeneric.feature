Feature: Leasing Generic

Scenario: KK_001 [EN] Create accepted leads for Kiatnakin testfile-1 testcase 1 
Given User land to leasing question page
When User fill-in car infomation from 'testcase_one'
Then Verify thank you message on successful page

Scenario: KK_001 [EN] Create accepted leads for Kiatnakin testfile-1 testcase 2 
Given User land to leasing question page
When User fill-in car infomation
Then Verify thank you message on successful page


# And  User fill-in personal information
    
    |carBrand|carModel|carYear|borrowAmnt|debtFree|repaidDebt|latePayment|province_desc	|province|district_desc|district|zipcode|occupation|income	|income_des   |
    |Honda	 |Civic   |2010   |800000    |Yes     |	         |	A1       |Samut Prakan	|110000  |	Bang Phli  |110300  |10540  |A4        |A3      |20000 - 29999|
    |Toyota	 |Camry   |2017   |300000    |No      |	A3       |	A2	     |Nonthaburi	|120000  |	Bang Yai   |120300  |11140  |A1	       |A2      |15000 - 19999|


# And  User select bank to apply 
# Then Successful page is displayed

# Scenario: KK_001 [EN] Create accepted leads for Kiatnakin
# Given User land to leasing question page
# When User fill-in car infomation
# # And  User fill-in personal information
# # And  User select bank to apply 
# # Then Successful page is displayed
