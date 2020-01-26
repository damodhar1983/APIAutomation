package runner;


import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/java/features",
	glue= {"stepdefinition"},
//	plugin = { "pretty", "html:target/htmlreports" },
	plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
	monochrome = true
	
)

public class Testrunner {
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));        
    
    }

}
