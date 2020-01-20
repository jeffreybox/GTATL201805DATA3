## Unit 7.2 - Posting Twitter Data

### Overview

In today's class, students will continue to explore Twitter by using the **V**alence **A**ware **D**ictionary and s**e**ntiment **Reasoner** (VADER) to perform **sentiment analysis** on tweets retrieved from the API. Students will also see how to **post tweets programmatically**.

- - -

### Activities Preview

* **Tweets Review**

* Instructions

  * Loop through 5 pages of tweets (100 tweets total)

  * Print out each tweet with a number keeping track the number of tweets.  For example, the most recent tweet should read "Tweet 1: <Text of the most recent tweet>".

* **VADER Gutenberg Activity**

* Instructions

* **V**alence **A**ware **D**ictionary and s**e**ntiment **Reasoner** ([VADER](https://github.com/cjhutto/vaderSentiment)).

* Perform `pip install vaderSentiment==2.5`.

* Open and read the three sample texts.

* For each sample, print out the sample text and the "compound", "positive", "neutral" and "negative" score for each.

* **Twitter VADER Analysis**

* Instructions

  * Using the tweepy package, analyze the tweets from "@DalaiLama".

  * Analyze a total of 200 tweets. (How many tweets are on a page?)

  * Store the different scores (positive, negative, neutral, compound) in different lists.

  * Print the user's name and the mean of the following scores:

    * Compound

    * Positive

    * Neutral

    * Negative

* **Happy Airlines**

* Instructions

* Your goal is to retrieve 1000 tweets for each of the 7 popular airlines and run a VADER sentiment analysis on them.

* Create an empty list to hold to results from each airline,

* Filter the tweets using the given "Real Person" filter variables.

* Create a "sentiment" dictionary for each airline that includes the search term, and the averages of the compound, neutral, positive, and negative scores.  Print this dictionary and append it to a list holding each airline's results.

* Create a DataFrame to display the results.

* **Plot Sentiments**

* Instructions

* Run a sentiment analysis on tweets from "@SouthwestAir".

* On top of you regular analysis, you should also keep track of how many tweets ago was it tweeted.

* Next store our results into a pandas DataFrame and read results.

* Finally create a plot with the follow labels.

  * Title as "Sentiment Analysis of Tweet (`date`) for `Twitter Handle`.

  * Y label as "Tweet Polarity"

  * X label as "Tweets Ago"

* **Hello Tweet**

* Instructions

  * Update your twitter with two separate status updates.

  * Update your twitter with a photo and a witty comment to go with it.

  * Look up how to add friends by using "Friendship Methods". Programmatically add someone in class as your friend, and have them add you as a friend.

  * Once you are both twitter followers of each other you can then send direct messages to one another.  Give it a try!

  * Use the [tweepy docs](http://tweepy.readthedocs.io/en/v3.5.0/api.html) for reference

- - -

### Copyright

Trilogy Education Services © 2017. All Rights Reserved.
