<h1> yelp-api-hours-parse</h1>
Parsing Yelp hours of operation api where some businesses have two opening and closing times during the day, I am piping an array of hours to a filter to process and extract the current day/hours and output that to the view(including time formatting 24 :12 ). 
You can achieve the same results by using a function in the controller or in the factory.
<h3>Note:</h3>
According to yelp Docs they have their days start from Mon to Sun as (0 to 6)
while on the new Date().getDay() function starts from Sun to Mon as (0 to 6).


<h6>This is a simple successfull attempt to parse the data which I had to deal while developing a mobile application via Ionic.</h6>
