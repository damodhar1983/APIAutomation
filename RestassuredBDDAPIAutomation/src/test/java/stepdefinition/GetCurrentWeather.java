package stepdefinition;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


import static io.restassured.RestAssured.*;
import static org.testng.Assert.assertEquals;

import java.io.FileWriter;
import java.util.HashMap;
import java.util.List;

public class GetCurrentWeather {
	
	@Given("^I perform GET operation$")
	public void i_perform_GET_operation() throws Throwable {
	    //validate the content type of the request.
	    given().contentType(ContentType.JSON);
	}

	@Then("^I get result of GET operation with parameters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_get_result_of_GET_operation_and_and(String latitude, String longitude, String accesskey) throws Throwable {
		  RequestSpecification httpRequest = RestAssured.given();
		    String URI="https://api.weatherbit.io/v2.0/current?lat="+ latitude + "&lon="+ longitude +"&key="+ accesskey;
			 Response response = httpRequest.get(URI);
//			 System.out.println("The response data is : \n"); 
//			 response.prettyPrint();
			 assertEquals(response.getStatusCode(), 200);
			 // First get the JsonPath object instance from the Response interface
			 JsonPath extractor = response.jsonPath();			
			 List<HashMap<String, Object>> hmap=extractor.get("data");
			HashMap<String, Object> datacontent=hmap.get(0);		
			System.out.println(" The required out put of GET current weather API is : ");
			System.out.println("\n The State code is : " +  datacontent.get("state_code"));
			//The below code is write the output to external file .
			String currentweatheroutput=(String) datacontent.get("state_code");
			String fileContent = currentweatheroutput;	     
		    FileWriter fileWriter = new FileWriter("GetCurrentWeather_Output.json");
		    fileWriter.write("The State code is :" + fileContent);
		    fileWriter.close();
		     
	}

	    
}

	
