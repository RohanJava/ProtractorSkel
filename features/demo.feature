Feature: I am going to validate calculator app

@calculatorTesting
Scenario: calculator app functionality testing

Given I will navigate to Calc site
When I add two numbers "3" and "5"
Then the output displayed should be "7"

@calculatorTesting
Scenario: calculator app functionality testing

Given I will navigate to "Calc" page
When I add two numbers "2" and "7"
Then the output displayed should be "9"


@angularTesting
Scenario Outline: Angular validation

Given I will navigate to "Angularjs" page
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
| key | 
| hello  |
| testHello | 