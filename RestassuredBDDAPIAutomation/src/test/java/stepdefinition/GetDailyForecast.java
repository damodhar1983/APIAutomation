package stepdefinition;

import static io.restassured.RestAssured.given;
import static org.testng.Assert.assertEquals;

import java.io.FileWriter;

import java.util.HashMap;
import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class GetDailyForecast {
	
	@Given("^I perform Get operation for daily forecast$")
	public void i_perform_Get_operation_for_daily_forecast() throws Throwable {
		 //validate the content type of the request.
	    given().contentType(ContentType.JSON);
	    
	}
	
	@Then("^I  get result of Get operation with parameters (\\d+) and \"([^\"]*)\"$")
	public void i_get_result_of_Get_operation_with_parameters_and(int postalcode, String accesskey) throws Throwable {
		RequestSpecification httpRequest = RestAssured.given();
		String URI="https://api.weatherbit.io/v2.0/forecast/daily?postal_code="+ postalcode +" &key="+ accesskey;
		 Response response = httpRequest.get(URI);
//		 System.out.println("The response data is : \n"); 
//		 response.prettyPrint();
		 assertEquals(response.getStatusCode(), 200);
		 // First get the JsonPath object instance from the Response interface
		 JsonPath extractor = response.jsonPath();			
		 List<HashMap<String, Object>> hmap=extractor.get("data");		
		int length=hmap.size();
		String dailyweatherforecastoutput="";
		System.out.println("\n The required out put of GET Daily Forecast API is  : \n");
		for(int i=0;i<=length-1;i++) {
			HashMap<String, Object> datacontent1=hmap.get(i);		
			System.out.println(" The moonrise tampstamp is  : " +  datacontent1.get("moonrise_ts"));			
			System.out.println("The weather details are : " +  datacontent1.get("weather"));
			dailyweatherforecastoutput=dailyweatherforecastoutput+datacontent1.get("weather");
		}
		//The below code is write the output to external file .
		String fileContent = dailyweatherforecastoutput;	     
	    FileWriter fileWriter = new FileWriter("GetDailyForecast_Output.json");
	    fileWriter.write("\n The weather details are :"+ fileContent);
	    fileWriter.close();
		
	}
	    
}

