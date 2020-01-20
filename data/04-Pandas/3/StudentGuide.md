# Unit 4.3 - Merging and Data Clean Project

### Overview

Today's lesson is split into two parts. The first part will test the class' Pandas skills by having them look through buggy code and fixing the problems so it functions properly. The second part will require students to use all the tools they have learned this week to fully understand the concept of data engineering.

### Class Objectives

* Students will know how to merge DataFrames together whilst understanding the differences between inner, outer, left, and right merges.
* Students will be able to slice data using the `cut()` method and create new values based upon a series of bins.
* Students will feel more confident in their ability to fix Python/Pandas bugs within Jupyter Notebook.
* Students will be able to use Google to explore additional Pandas functionality when necessary.

- - -

### Activities Preview

* **Cryptocurrency Merging**

* Instructions

  * Read in both of the CSV files and print out their DataFrames.

  * Perform an inner merge that combines both DataFrames on the "Date" column.

  * Rename the columns within the newly merged DataFrame so that the headers are more descriptive.

  * Create a summary table that includes the following information: `Best Bitcoin Open`, `Best Dash Open`, `Best Bitcoin Close`, `Best Dash Close`, `Total Bitcoin Volume`, `Total Dash Volume`.

  * `Total Bitcoin Volume` and `Total Dash Volume` should be calculated to have units of "millions" and be rounded to two decimal places.

* **Binning TED**

* Instructions

  * Read in the CSV file provided and print it to the screen.

  * Find the minimum "views" and maximum "views".

  * Using the minimum and maximum "views" as a reference, create 10 bins in which to slice the data.

  * Create a new column called "View Group" and fill it with the values collected through your slicing.

  * Group the DataFrame based upon the values within "View Group".

  * Find out how many rows fall into each group before finding the averages for "comments", "duration", and "languages".

* **Cleaning Kickstarter**

* Instructions
* **Bugfixing Bonanza!**

* Instructions

  * Dig through the Jupyter Notebook provided and attempt to fix as many bugs as possible. There are a lot of them and the bugs get harder to deal with as the code progresses.

  * Once you have finished bugfixing, perform some additional analysis on the dataset provided. See what interesting trends are buried deep within these bug logs for the Eclipse IDE. So long as you challenge yourself, bugs will pop up and you will get even more bugfixing practice.

- - -

### Copyright

Trilogy Education Services © 2017. All Rights Reserved.
