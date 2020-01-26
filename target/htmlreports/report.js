$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getcurrentweather.feature");
formatter.feature({
  "line": 1,
  "name": "Get current weather",
  "description": "I want to retrive the current weather based on latitude and longitude",
  "id": "get-current-weather",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get current weather details",
  "description": "",
  "id": "get-current-weather;get-current-weather-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform GET operation",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform the get operation for  \u003clatitude\u003e and \u003clongitude\u003e and \u003caccesskey\u003e",
  "keyword": "When "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-current-weather;get-current-weather-details;",
  "rows": [
    {
      "cells": [
        "latitude",
        "longitude",
        "accesskey"
      ],
      "line": 10,
      "id": "get-current-weather;get-current-weather-details;;1"
    },
    {
      "cells": [
        "\"40.730610\"",
        "\"-73.935242\"",
        "\"a99bbd94b347434497533828b3e55ca3\""
      ],
      "line": 11,
      "id": "get-current-weather;get-current-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get current weather details",
  "description": "",
  "id": "get-current-weather;get-current-weather-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform GET operation",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform the get operation for  \"40.730610\" and \"-73.935242\" and \"a99bbd94b347434497533828b3e55ca3\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "GetCurrentWeather.i_perform_GET_operation()"
});
formatter.result({
  "duration": 1206550845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.730610",
      "offset": 34
    },
    {
      "val": "-73.935242",
      "offset": 50
    },
    {
      "val": "a99bbd94b347434497533828b3e55ca3",
      "offset": 67
    }
  ],
  "location": "GetCurrentWeather.i_perform_the_get_operation_for_and(String,String,String)"
});
formatter.result({
  "duration": 4002281642,
  "status": "passed"
});
formatter.uri("getdailyforecast.feature");
formatter.feature({
  "line": 1,
  "name": "Daily Forecast",
  "description": "I want to get the Daily Forecast of the weather based on the postalcode",
  "id": "daily-forecast",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get daily forecast of the weather",
  "description": "",
  "id": "daily-forecast;get-daily-forecast-of-the-weather",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform Get operation for daily forecast",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform the get operation based on \u003cpostalcode\u003e and \u003caccesskey\u003e",
  "keyword": "When "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "daily-forecast;get-daily-forecast-of-the-weather;",
  "rows": [
    {
      "cells": [
        "postalcode",
        "accesskey"
      ],
      "line": 10,
      "id": "daily-forecast;get-daily-forecast-of-the-weather;;1"
    },
    {
      "cells": [
        "28546",
        "\"a99bbd94b347434497533828b3e55ca3\""
      ],
      "line": 11,
      "id": "daily-forecast;get-daily-forecast-of-the-weather;;2"
    },
    {
      "cells": [
        "2146",
        "\"a99bbd94b347434497533828b3e55ca3\""
      ],
      "line": 12,
      "id": "daily-forecast;get-daily-forecast-of-the-weather;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Get daily forecast of the weather",
  "description": "",
  "id": "daily-forecast;get-daily-forecast-of-the-weather;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform Get operation for daily forecast",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform the get operation based on 28546 and \"a99bbd94b347434497533828b3e55ca3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "GetDailyForecast.i_perform_Get_operation_for_daily_forecast()"
});
formatter.result({
  "duration": 2291905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28546",
      "offset": 37
    },
    {
      "val": "a99bbd94b347434497533828b3e55ca3",
      "offset": 48
    }
  ],
  "location": "GetDailyForecast.i_perform_the_get_operation_based_on_and(int,String)"
});
formatter.result({
  "duration": 1474759193,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get daily forecast of the weather",
  "description": "",
  "id": "daily-forecast;get-daily-forecast-of-the-weather;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform Get operation for daily forecast",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I perform the get operation based on 2146 and \"a99bbd94b347434497533828b3e55ca3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "GetDailyForecast.i_perform_Get_operation_for_daily_forecast()"
});
formatter.result({
  "duration": 1759164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2146",
      "offset": 37
    },
    {
      "val": "a99bbd94b347434497533828b3e55ca3",
      "offset": 47
    }
  ],
  "location": "GetDailyForecast.i_perform_the_get_operation_based_on_and(int,String)"
});
formatter.result({
  "duration": 1403580466,
  "status": "passed"
});
});