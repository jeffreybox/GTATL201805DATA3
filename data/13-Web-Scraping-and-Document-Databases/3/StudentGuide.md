## Unit 13.3 - Rendering Your Data With Flask

### Overview

Today's class will introduce students to rendering templates with Flask, teaching them everything they need to know to display their data on a webpage.

### Class Objectives

* Students will become comfortable rendering templates with Flask using data retrieved from a Mongo database.

* Students will be able to use Beautiful Soup to scrape data

* Students will use PyMongo to save data to a Mongo database

* Students will use Flask to render templates

- - -

### Activities Preview

* **Rendering A String With Flask**

* Instructions:**

* Create a webpage that will return a welcome message with a name returned from your flask app.

* Add a paragraph underneath to display a hobby of your own; this will also be returned from the back end..

* Create a link to a bonus page that routes you to an entirely new static html page and also returns both your name and hobby from the back end.

* **Rendering A List**

* Instructions

* Create a web page that will display a list of your top five favorite movies.

* Add style to your webpage by using [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/) add whatever info you like.

* **Rendering A Dictionary**

* Instructions

* Create a list of dictionaries that include the name and type of animal.

* Loop through the list and display an un ordered list on the webpage.

* Each line should include the name of the animal and type.

* Add some CSS styling to each list item.

* **Rendering Data From Mongodb**

* Instructions

  * Create a file called `insert_data.py` and setup a connection to mongo using pymongo.

  * Next, insert at least five store items that each include, type, cost, and stock into a mongo databases and collection.

  * Run the file (Why would we not want this in the app.py file?).

  * Setup a Flask app that makes a connection to the database and collection you created.

  * Return to a list of all the full inventory.

  * Display the type of item and cost of the item on the webpage.

* **Scrape and Render**

* Instructions
**Part 1**

* Create a web page the will display the weather in Costa Rica as well as the time and date.

* The `app.py` file will serve as your router and will use the `scrape_weather.py` file to scrape your data.

* Store every scrape into a database.

* The webpage will display all the results from the database.

**Part 2**

* Expand upon the weather in Cost Rica by grabbing the surf conditions from one of the locations.

* Using [surfline](https://www.surfline.com/surf-reports-forecasts-cams/costa-rica/3624060) grab the name of one location as well as the height of the surf. For example "Camaronal has 6-7 FT surf"

* Add the surf info to your database and display the results on the webpage.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
