Feature: Get current weather
  I want to retrive the current weather based on latitude and longitude

  Scenario Outline: Get current weather details
    Given I perform GET operation
    Then I get result of GET operation with parameters <latitude> and <longitude> and <accesskey>
    

    Examples: 
      | latitude    | longitude    | accesskey                          |
      | "40.730610" | "-73.935242" | "a99bbd94b347434497533828b3e55ca3" |
