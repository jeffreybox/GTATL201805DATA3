## Unit 11.1 - Introduction to SQLAlchemy

### Overview

Today's lesson will introduce the SQLAlchemy library for Python.

### Troubleshooting Notes

* Please use the provided SQL schema/seed files or Sqlite files as a backup to the remote database links. There are occasionally issues that prevent the remote database connections from working, so you will find these backup resources in the activity `Resources` folders. You can simply create a local database with these, or use the Sqlite database file.

- - -

### Class Objectives

* Students will  be able to connect to a SQL database using SQLAlchemy
* Students will learn to perform basic SQL queries using engine.execute()
* Students will learn how to create Python classes and objects
* Students will  be able to create, read, update, and delete data from a SQL database using SQLAlchemy's ORM

- - -

### Activities Preview

* **Looking Into SQLAlchemy**

* Before diving into SQLAlchemy as a class, have students break into groups of two or three and research the following questions...

  * What is an ORM?

  * What are the benefits to using an ORM?

  * What are some of the disadvantages to using an ORM?

* Some of the advantages to using an ORM for SQL databases include...

  * Being able to work across different SQL dialects using the same basic Python query

  * Being able to create command line interfaces which allow users to construct SQL queries without having to know the language

* SQLAlchemy is a Python ORM - Object Relational Mapper - for SQL databases. In much more basic terms, SQLAlchemy essentially allows Python developers to use external scripts to modify SQL databases.

* [SQLAlchemy Documentation](http://docs.sqlalchemy.org/en/latest/dialects)

* **Ice Cream Connection**

* Instructions

  * Connect to your localhost database in MySQL Workbench.

  * Create a table of 5 or more ice cream flavors, each of which should have a rating out of 100, and price (make sure that a few cost $1.25).

  * Query your table in MySQL Workbench for every flavor of ice cream.

  * Query your table in MySQL for all flavors that cost 1.25 or more.

  * Create a Python script that uses SQLAlchemy to accomplish all of the above queries.

* **Read All the SQL**

* Instructions

  * Using the following connection string, complete the following tasks within a Jupyter Notebook.

    `mysql://k5xunpkmojyzse51:ifagg1gp7e2xyapi@ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tq6h098h0ym00zp6`

  * Query all the data from the `Cenus_data` table and load into pandas.

  * Query all the data from the `Zip_data` table and load into pandas.

  * Show the `.head()` of your newly imported dataframes and then come up with the best way in which to merge the data together.

* **Surfer Class**

* Instructions

  * Create a class `Surfer` that takes in a name, hometown, and rank.

  * Create an instance of a surfer and then print the following from your surfer object: name, hometown and rank.

* **Surfer Class Extended**

* Instructions

  * Create a surfer class that has name, hometown, rank, wipeouts, and surfer count.

  * Create a method called `speak` that prints "Hangs loose, bruh!"

  * Create a method called `biography` that prints the surfer's name and hometown.

  * Create a method called `cheer` that will print "I totally rock man, no wipeouts!" if the surfer has no wipeouts. Otherwise, it prints 'Bummer bruh, keep on keeping on!'.

  * Create two surfers that print out all their info and run all the methods.

* **Surfing SQL**

* Instructions

  * Modify the `Surfer` class created during the previous activity so that it will function with SQLAlchemy.

    * `__tablename__` should be "surfers"
    * `surfer_id` should be an integer and the primary key
    * `name` should be a string capable of holding 255 characters
    * `hometown` should be a string capable of holding 255 characters
    * `rank` should be an integer

  * Create a new class called `Board` which will function with SQLAlchemy and has the following parameters...

    * `__tablename__` should be "surfboards"
    * `id` should be an integer and the primary key
    * `surfer_id` should be an integer that references a surfer_id in the "surfers" column
    * `board_name` should be a string capable of holding 255 characters
    * `color` should be a string capable of holding 255 characters
    * `length` should be an integer

  * Pull a list of all of the surfers and surfboards already inside the database

  * Push a new surfer and surfboard to the tables on the database

- - -

### Copyright

Trilogy Education Services (C) 2018. All Rights Reserved.
