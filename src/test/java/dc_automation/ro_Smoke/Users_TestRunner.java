package dc_automation.ro_Smoke;

import com.intuit.karate.junit5.Karate;

class Users_TestRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("users").relativeTo(getClass());
    }    

}
