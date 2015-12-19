Given Problem Statement: 
Automate an end-to-end user e-commerce transaction flow using Nightwatch.js for www.walmart.com with an existing customer on Chrome or Safari browser.

Scenario to automate:
1. Login using existing account
2. Perform a search on home page from a pool of key words given : tv, socks, dvd, toys, iPhone 
3. Identify an item from the result set that you can add to cart
4. Add the item to cart
5. Validate that item added is present in the cart and is the only item in the cart

Test Data:
• Account details: create your own account
• Search terms: tv, socks, dvd, toys, iPhone

Testing tools and Programming language to be utilized: 
Nightwatch.js using Selenium. Data is passed through a GLOBALS file , globals.js ----- DATA DRIVEN TESTING. 

<------------------------------------------------------------------------------------------------------------------------------>

Requirements:
Browser Used/required: Chrome
Language used for testing: Javascript
Java version used: java version "1.7.0_79"
Testing Tool used: Nightwatch.js
Texteditor used: Sublime Text2
Operating System used for Testing: OSX

How to run the program using command line:
1. install nightwatch.js and node.js
2. cd to the folder where the project is downloaded and copy the following folders/files in the location where nightwatch is installed on your machine(in my case: /usr/local/lib/node_modules/nightwatch):
	* nightwatch.json -- file
	* global.js -- file
	* selenium-server-standalone-2.48.2.jar
	* reports -- folder
	* results -- folder
	* tests -- folder
	* bin -- folder


3. In another command tab,  to run the program type:
	nightwatch -t tests/walmartLogin.js -e chrome --verbose	

4. The configuration to start selenium server is mentioned in the nightwatch.json file but if you get an
error saying 'Could not connect to Selenium Server. Is Selenium Server started?', make the following changes in nightwatch.json file :

		set start_process to false and server_path to an empty string(""). 

The code snippet looks like this in the file :: 

"selenium" : {
    "start_process" : true,
    "server_path" : "./selenium-server-standalone-2.48.2.jar",
    "log_path" : "./results",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : "",
      "webdriver.firefox.profile" : ""
    }
  },	

5. Assuming you're in the location where nightwatch is installed, type the following command to manually start selenium server along with the location for chromedriver. 

java -jar selenium-server-standalone-2.48.2.jar -Dwebdriver.chrome.driver=bin/chromedriver

6. In another command tab,  to run the program type:
	nightwatch -t tests/walmartLogin.js -e chrome --verbose
	








	   	

	   


	

