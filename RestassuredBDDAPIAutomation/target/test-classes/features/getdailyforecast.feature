Feature: Daily Forecast
  I want to get the Daily Forecast of the weather based on the postalcode

  Scenario Outline: Get daily forecast of the weather
    Given I perform Get operation for daily forecast
    Then I  get result of Get operation with parameters <postalcode> and <accesskey>
    

    Examples: 
      | postalcode | accesskey                          |
      |      28546 | "a99bbd94b347434497533828b3e55ca3" |
     
     
