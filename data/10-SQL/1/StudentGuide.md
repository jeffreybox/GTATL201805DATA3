## Unit 10.1 - Intro To MySQL

### Overview

In today's class students will be introduced to MySQL databases and will learn how to create tables and simple queries.

### Class Objectives

* Students must be able to install and setup MySQL
* Students will have MySQL Workbench or Sequel Pro installed and running on everyone's computers
* Students will create a localhost connection to a MySQL server and have everyone successfully connect to it
* Students will create, use, and populate a MySQL database with data
* Students will create, populate, and select data from a MySQL table

- - -

### Activities Preview

* **Install MySQL Workbench**

* Download **MySQL Community Server 5.7** as the most recent release of version 8 will cause issues. Students with a Mac should not use `brew install` due to [versioning issues](https://stackoverflow.com/questions/50126503/homebrew-mysql-8-support)

* Alert: download **5.7** and not **8**.

 **Mac OS**

  * Download **MySQL Community Server 5.7** from [MySQL Server](https://dev.mysql.com/downloads/mysql/5.7.html#downloads) choosing the DMG option.

  * Follow the installation [instructions](https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html).

  * During setup, a temporary password will be generated. Be sure to record this as you will need it in the next steps.

  * Once the download is complete, open the terminal and run `mysql -u root -p`. Enter the temp password at the prompt that follows. If everything works, your terminal will now be in the MySQL Command Line Interface (or, CLI).

  * Next step is to change the temp password to a personal password. From the MySQL CLI, run the command `ALTER USER 'root'@'localhost' IDENTIFIED BY '<your new password>';` Where `<your new password>` is your newly created password.

  * Finally check the new password by exiting mysql CLI  with `exit` then startup the mysql CLI again with `mysql -u root -p`. Login in the newly created password to confirm the change.

  * Remember to record the new password you created for future use.

 **MySQL Workbench for Mac**

  * Download [MySQL Workbench](https://www.mysql.com/products/workbench/).

  * Once the download has finished open the installer and run through the installation. This process should be more straightforward as opposed the server.

  * Open up MySQL Workbench after installation.

 **PC**

  * Download the MySQL installer from [here](https://dev.mysql.com/downloads/windows/installer/5.7.html) and be sure to choose the larger of the two options.

  * After the download has finished open and run the installer.

  * Agree to license then select **Developer Default** as the type of setup and click next.

  * Continue clicking to accept the default prompts and finish the installation. At the installation screen, click `execute`. This will take a some time while it downloads and installs the necessary programs.

  * If you come across the error `One or more product requirements have not been satisfied`, click yes to continue.

  * Once everything has been installed you will be directed the next part of the setup. Keep everything default as you continue through the next two steps.

  * Next you will be at the **Accounts and Roles** page. create a root password for MySQL that you will remember. This will be used to connect your MySQL server locally and will cause issues if you forgot. So be sure record this down somewhere.

  * Continue through the rest of the installation using the default settings. Once everything has finished, the MySQL Shell and MySQL Workbench will open. Close out of the shell and keep the workbench open.

* Make sure that everyone has MySQL Workbench installed and booted up before continuing the lesson.

  * Again, let the class know that there are plenty of issues that may arise when installing and using MySQL for the first time. Ask that they work with a TA to resolve any errors.

* Once a majority of the class has MySQL working continue. Have any students that were not able to successfully install MySQL look on with a student who has. Encourage these students to utilize time this week to work with one of the TAs debug.

* **Localhost Connection Demo**
* Instructions

  * Now it is your turn to set up a localhost connection! This may seem as if it will be an easy task, but there are some common errors and hurdles that might stand in your way as you work to create your first ever MySQL connection.

  * Start out by opening up MySQL Workbench and hitting the (+) button next to the text which reads "MySQL Connections". Sequel Pro will also have a (+) on the bottom left for new connections.

  * Enter the following credentials into the on-screen prompt...

    * Connection Name: Local Instance MySQL

    * Connection Method: Standard (TCP/IP)

    * Hostname: localhost

    * Port: 3306

    * Username: <Your MySQL Username> (Defaults to "root")

    * Password: <Your MySQL Password> (Defaults to empty)

    * Keep the Default Schema field empty

  * Hit "Test Connection" and, if the connection is successful, hit okay and double-click on the newly created field under the "MySQL Connections" text on the home page

* Ask students to reach out to a TA if their connection fails. Encourage them to search online for answers too.

  * One of the best first steps when dealing with MySQL connection problems is to uninstall/reinstall MySQL Server using the MySQL Installer. For whatever reason, MySQL Server does not always seem to work properly when installed alongside MySQL Workbench and might function properly if reinstalled individually.

  * If your connection was successful and you have nothing else to do, feel free to help those around you in creating their connections.

* **Setting Up FavoriteDB**

* Instructions

  * Create a new Database called `favorite_db` within MySQL Workbench and use the database for the remainder of this activity.

  * Create a table called `favorite_foods` and add the following to it...

    * Create the column "food" which can take in a 50 character string and cannot be NULL
    * Create the column "score" which can take in an integer

  * For the table `favorite_songs` and add the following to it...

    * Create the column "song" which can take in a 100 character string and cannot be NULL
    * Create the column "artist" which can take in a 50 character string
    * Create the column "score" which can take in an integer

  * For the table `favorite_movies` and add the following to it...

    * Create the column "film" which can take in a string and cannot be NULL
    * Create the column "five_times" which can take in a boolean
    * create the column "score" which can take in an integer

* **Adding Data to FavoriteDB**

* Instructions

  * It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!

  * Try to add at least three rows of data to each table.

* **Making and Using an ID Column**

* Instructions

  * Make a new database called "programming_db" and switch to it for this activity

  * Create a table called "programming_languages" which includes a primary key named "id" which will automatically increment with each new row created, a string column called "languages," and a numeric column called "rating."

  * Insert some data into the table and then modify the data using the id column.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
