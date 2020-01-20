# Unit 3.3 - Python Deeper Dive

### Overview

Today's class will dive deeper into some of Python's other capabilities that will used throughout the rest of the course. The class will end with students learning Git from the command line.

### Class Objectives

* Students will be able to add, commit, and push code up to GitHub from the command line.

* Students will be able to create and use Python dictionaries.

* Students will be able to read data in from a dictionary.

* Students will be able to use list comprehensions.

* Students will be able to write and re use Python function.

* Students will have a firm understanding of coding logic and reasoning.

- - -

### Activities Preview

* **Serial Cleaner**
* Instructions

  * Read through `cereal.csv` and find the cereals that contain five grams of fiber or more, printing the data from those rows to the terminal.

* **Hobby-Book**
* Instructions

  * Create a dictionary that will store the following:

    * Your name
    * Your age
    * A list of a few of your hobbies
    * A dictionary of a few times you wake up during the week

  * Print out your name, how many hobbies you have and a time you get up during the week.

* **List Comprehensions**
* Instructions

  * Open the file called `comprehensions.py`.

  * Create a list that prompts the user for the names of five people they know.

  * Run the provided program. Note that nothing forces you to write the name "properly"—e.g., as "Jane" instead of "jAnE". You will use list comprehensions to fix this.

    * First, use list comprehensions to create a new list that contains the lowercase version of each of the names your user provided.

    * Then, use list comprehensions to create a new list that contains the title=cased versions of each of the names in your lower-cased list.

* **Functions**
* Instructions

  * Write a function called `average` that accepts a list of numbers.

    * The function `average` should return the arithmetic [mean](https://en.wikipedia.org/wiki/Arithmetic_mean) (average) for a list of numbers.

  * Write a function called `main` that will call the other function `average` with test data. For example: `average([1, 2, 3])`.

  * Test the code in the terminal by running `python main.py`.

* **Wrestling With Functions**
* Instructions

  * Analyze the code and CSV provided, looking specifically for what needs to still be added to the application.

    * Explain that `header = next(reader)` will read the header row from the csv file.

  * Using the starter code provided, create a function called `getPercentages` which takes in a parameter called `wrestlerData` and does the following:

    * Uses the data stored within `wrestlerData` to calculate the percentage of matches the wrestler won, lost, and drew over the course of a year.

    * Prints out the stats for the wrestler to the terminal.

* **Adding more to the repo**
* Instructions

  * Using the repo that just created, make or add the following changes:

    * Add new lines of code to one of the python files.
    * Create a new folder.
    * Add a file to the newly created folder.
    * Add, commit and push the changes.
    * Delete the new folder.
    * Add, commit and push the changes again.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
