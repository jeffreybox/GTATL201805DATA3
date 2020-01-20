# Unit 7.1 - Getting Twitter Data

## Overview

In today's class, students will learn how to use Tweepy, a Python library that lets you interact with the Twitter API.

### Class Objectives

* Students will be able to access Twitter's API using the Tweepy library.
* Students will be able to use Tweepy to retrieve tweets from a specific account.
* Students will be able to use Tweepy to retrieve tweets based on a search term.
* Students will be able to use Tweepy to retrieve tweets based on a hashtag.
* Students will be able to use Tweepy to perform data analytics using data from Twitter.
* Students will be able to visualize Tweepy data using matplotlib.

- - -

### Activities Preview

* **Twitter API config (Preclass activity)**

* Instructions

  * Go to the URL `https://apps.twitter.com/` and create a new Twitter app.

  * In the next screen, add your app's name, description and any valid URL e.g. `https://www.google.com`.

  * Check the Twitter Developer Agreement box and click Create Twitter Application.

  * You may encounter an error message stating that they must enter their phone number.

  * In that case, type in the url `https://twitter.com/settings/add_phone` and enter your phone number.

  * Next, return to `https://apps.twitter.com`, click on the `Keys and Access Tokens` tab at the top, then at the bottom of that screen, under `Token Actions`, click on the `Create my access token` button.

  * Finally, you will have the four pieces of information necessary to create our apps: Consumer Key (API Key), Consumer Secret (API Secret), Access Token, and Access Token Secret.

  * Save this information to a `config.py` that can be used throughout class.

  * Run `pip install tweepy` in your console to install it.

  * Review Tweepy documentation: http://docs.tweepy.org/en/v3.5.0/getting_started.html?

* **Get My Tweets**

* Instructions

  * Import the necessary libraries needed to talk to Twitter's API.

  * Import your keys from your `config.py` file.

  * Set up Tweepy authentication.

  * Write code to fetch all tweets from your home feed.

  * Loop through and print out tweets.

* **Get Others' Tweets**

* Instructions

  * Choose a twitter account and save the screen name to a variable.

  * Retrieve the latest tweets sent out from that account.

  * Use the code from the previous activities to get you started!

  * Consult the [Tweepy Docs](http://docs.tweepy.org/en/v3.5.0/api.html) as needed.

* **Popular Users**

* Instructions

* In this activity, you are given an incomplete CSV file of Twitter's most popular accounts. You will use this CSV file in conjunction with Tweepy's API to create a pandas DataFrame.

* Consult the Jupyter Notebook file for instructions, but here are your tasks:

  * The "PopularAccounts.csv" file has columns whose info needs to be filled in.

  * Import the CSV into a pandas DataFrame.

  * Iterate over the rows and use Tweepy to retrieve the info for the missing columns.  Add the information to the DataFrame.

  * Export the results to a new CSV file called "PopularAccounts_New.csv"

  * Calculate the averages of each column and create a DataFrame of the averages.

* **Plot Popular Accounts**

* Instructions

* In this activity, you will use MatPlotLib to render three scatterplot charts of the results from the last activity.

* The first scatterplot will plot Tweet Counts (x-axis) vs Follower Counts (y-axis) to determine a relationship, if any, between the two sets of values. 

* Likewise, build a scatterplot for Number Following (x-axis) vs Follower Counts (y-axis).

* Finally, build a scatterplot for Number of Favorites (x-axis) vs Follower Counts (y-axis).

* **Twitter Velocity**

* Instructions

* You are a political data consultant, and have been asked to evaluate how frequently Donald Trump tweets.

* As a savvy data visualization specialist, you decide on the following course of action: first, you will collect the timestamps of the 500 most recent tweets sent out by Trump.

* After making a list of the timestamps, you will convert the timestamps into datetime objects. Then you will calculate the time difference from one tweet to the next, and plot those data points in a scatterplot chart.

* The tools you will use for this task are Tweepy and MatPlotLib. You will also need to use the `datetime` library to convert Twitter timestamps to Python datetime objects.

* This handy chart visually demonstrates Trump's tweet pattern: the majority of his tweets are sent within five hours of each other, but he goes up to 24 hours without tweeting!

* See, in contrast, the tweet pattern of a major news organization, the LA Times, whose tweets are sent out much more frequently.

* **Hashtag Popularity**

* Instructions

* In this activity, you will calculate the frequency of tweets containing the following hashtags: **#bigdata, #ai, #vr, #foreverchuck**

* Accomplish this task by using Tweepy to search for tweets containing these search terms (Hint: use a loop), then identifying how frequently tweets are sent that contain these keywords.

* You may, of course, use other hashtags.

* You can do this. Good luck!

* **Plot Train Delays**

* Instructions

* In this activity, you will use data gathered from Twitter to plot which trains in the NYC subway system most frequently cause delays.

* The Twitter account **SubwayStats** announces delays and changes in the NYC subway system.

* Your goal is to pull the 1,000 most recent tweets from that account and use MatPlotLib to generate a bar chart of the number of delays per each train.

* Accomplish this task by first compiling a Python dictionary, whose key value pairs consist of each train and the number of delays.

* In order to build such a dictionary, you will need to filter the tweet texts.

* See the Jupyter Notebook file for more specific instructions at each step. Good luck!

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
