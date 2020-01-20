# Unit 6.1 - APIs

## Overview

Today's lesson introduces students to JSON traversal and the fundamentals of making API requests with the [requests library](http://docs.python-requests.org/en/master/), using the [OMDb](https://www.omdbapi.com/) and [New York Times](https://developer.nytimes.com/) APIs.

### Class Objectives

* Students will be able to make GET requests with `requests`.

* Students will be able to convert JSON into a Python dictionary.

* Students will read and apply API documentation.

* Students will sign up for and use an API key.

- - -

### Activities Preview

* **Requesting SpaceX**

* Instructions

  * Take a few minutes to explore the SpaceX API: <https://github.com/r-spacex/SpaceX-API/wiki>

  * Once you understand the structure of the API and its endpoint, choose one of the endpoints and do the following:

  * Retrieve and print the JSON for _all_ of the records from your chosen endpoint.

  * Retrieve and print the JSON for a _specific_ record from your chosen endpoint.

* **Requesting a Galaxy Far Far Away**

* Instructions

  * Using the starter file provided, collect the following pieces of information from the Star Wars API.

  * The name of the character

  * The number of films they were in

  * The name of their first starship

  * Once the data has been collected, print it out to the console.

* **Number Facts**

* Instructions

  * Using the [Numbers API](http://numbersapi.com), create an application that takes in a user's inputs and returns a number fact based upon it.

* **Study the OMDb API**

* Instructions

  * Read the OMDb documentation, and make a few API calls to get some information about your favorite movie.

  * You are free to duplicate the demonstration from earlier or explore more freely as you wish. Just be sure to print two or three properties of the JSON you retrieve.

* **Movie Questions**

* Instructions

  * Use the OMDb API to retrieve and print the following information.

  * Who was the director of the movie **Aliens**?

  * What was the movie **Gladiator** rated?

  * What year was **50 First Dates** released?

  * Who wrote **Moana**?

  * What was the plot of the movie **Sing**?

* **Iterative Requests**

* Instructions

  * Consider the following list of movie titles.

  ```python
  movies = ["Aliens", "Sing", "Moana"]
  ```

  * Make a request to the OMDb API for each movie in the list. Then:

  1. Print the director of each movie

  2. Save the responses in another list

* **Retrieving Articles**

* Instructions

  * Save the NYT API endpoint to a variable. Make sure you include the right query parameter to retrieve JSON data!

  * Register for and save your API Key to a variable.

  * Decide on a search term, and save it to a variable.

  * Limit your search to articles published within a range of dates—for example, only articles published in 2014. _Hint_: Read the documentation on `end_date`.

  * Build your query URL, and save it to a variable.

  * Retrieve your list of articles with a GET request.

  * Take a look at the documentation. How do you get ahold of the articles in the response?

  * Store each article in the response inside of a list.

  * Print a `snippet` from each article.

  * As a bonus, try to figure out how we could get 30 results. _Hint_: Look up the `page` query parameter. If you get a message saying you've exceeded your rate limit, don't fret—you've solved the problem.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
