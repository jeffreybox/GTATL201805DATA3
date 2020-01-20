## Unit 6.2 - Working with Weather & City APIs

### Overview

Today's class introduces the class to a number of new APIs whilst also discussing API wrappers, exception handling, and using Pandas with API responses.

### Class Objectives

* Students will create applications from scratch using nothing but their knowledge of Python and an API documentation
* Students will load JSON from API responses into a Pandas DataFrame
* Students will be able to use `try` and `except` blocks to handle errors

- - -

### Activities Preview

* **JSON Traversal**

* Instructions

  * Load the provided JSON file.

  * Retrieve the video's title.

  * Retrieve the video's rating.

  * Retrieve the link to the video's thumbnail.

  * Retrieve the number of views.

* **Requests Review**

* Instructions

  * Make a request to the following endpoint (<http://nyt-mongo-scraper.herokuapp.com/api/headlines>), and store the response.

  * JSON-ify the response.

  * Print the JSON representations of the first and last posts.

  * Print number of posts received.

* **Weather in Bujumbura**

* Instructions

  * Save all of your "config" information within some variables. This includes your API key, the base URL, and the query terms desired.

  * Build your query URL. Check the documentation to figure out how to request temperatures in Celsius.

  * Make your request and save the API response.

  * Retrieve the current temperature in Bujumbura from the JSON response.

  * Print the temperature to the console.

* **TV Ratings**

* Instructions

  * You may use the list provided in the starter file or create your own.

  * Request information from the TVmaze API Show Search endpoint (<https://www.tvmaze.com/api#show-search>) on each show and store the name and rating information into lists.

  * Put this data into a dictionary, and load that dict into a Pandas DataFrame.

  * Use matplotlib to create a bar chart comparing the ratings of each show.

* **Making Exceptions**

* Instructions

  * Without removing any of the lines from the starter code provided, create `try` and `except` blocks that will allow the application to run without terminating.

* **Map Wrap**

* Instructions

  * Install the openweathermapy API wrapper.

  * Read in the cities.csv using the python csv library in order to create a list of cities.

  * Create a settings object with your API key and preferred units of measurement.

  * Get data for each city that is listed within `cities.csv`.

  * Create a list to get the temperature, latitude, and longitude in each city

  * Create a Pandas DataFrame with the results.

  * Print your summaries to verify that everything went smoothly.

* **Two Calls**

* Instructions

  * Retrieve a list of the lending types the world bank keeps track of, extract the ID key from each of them, and store all IDs in a list.

  * Next, determine how many countries are categorized under each lending type and store this data in a dictionary using the ID as the key and the count as the value.

    * The data for number of countries is stored in the first element of the response array.

  * Finally, print the number of countries of each lending type.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
