## Unit 20.2: Tableau My Mind

### Overview

Today's lesson introduces students to the more advanced aspects of Tableau, including custom calculations, maps, and Level-Of-Detail calculations.

### Class Objectives

* Students will create groups and sets.

* Students will create maps and use built-in U.S. Census data.

* Students will be able to create custom calculations.

* Students will understand what LOD calculations entail.

- - -

### Activities Preview

* **Warmup**

* Instructions:

  * [Activities/01-Stu-Warmup](Activities/01-Stu-Warmup/Unsolved/graduation_rates.twbx)

  * In this warm-up activity, students will create visualizations with data on colleges and universities.

* **Ready, Set, Woof**

* Instructions: 

  * [Activities/03-Stu-Groups_Sets/README.md](Activities/03-Stu-Groups_Sets/README.md)
  
  * In this activity, students will use groups and sets to explore whether the size of a dog has any bearing on its intelligence.

  * Join the two CSV files provided to access info on dog breeds and potential markers of intelligence.

    * The Obey column refers to a dog breed's average rate of obedience to the first command.
    * The Reps Lower column refers to a dog breed's lower ceiling of repetitions required to learn a new command.
    * The Reps Upper column refers to a dog breed's upper ceiling of repetitions required to learn a new command.

  * Group all the breeds into **small, medium, and large breeds** by weight, and plot obedience on first command, minimum number of repetitions required to learn a new command, and the maximum number of repetitions required to learn a new command. 

    * Measure dog weight as you see fit, either by lower or upper limit, or an average of both.
    * For the purposes of this activity, small dogs are considered to weigh up to 20 pounds, medium dogs weigh up to 60 pounds, and large dogs weigh over 60 pounds.

  * Create sets of small, medium, and large dog breeds and compare the obedience rate of small dogs versus non-small dogs.

    * Compare also small dogs' minimum and maximum repetitions versus non-small dogs
    * Try doing the same for large breeds versus non-large breeds

  * Come up with other ways to use groups and sets. Make some interesting visualizations!

  * What conclusions can you draw?

* **Calculations**

* Instructions:

  * [Activities/05-Stu-Calculations/README.md](Activities/05-Stu-Calculations/README.md)

  * In this activity, students will create visualizations using a data set on motor vehicle accidents in New York City.

  * The data set you have been given is on motor vehicle accidents in New York city.

  * Try to create visualizations to the following questions:

    * What are the most dangerous hours for cyclists in a day?
    * What are the most dangerous months for a cyclist?
    * What are the most common causes of accidents?
    * How many people have been injured during each month?

  * Are there any possible problems or issues with these visualizations?  

  * Use calculations and logical statements to enhance your visualizations. Some of them may include:

    * Using conditional logic to color dangerous months, boroughs, and hours
    * Charting the increase or decrease in the number of injuries in each month relative to the previous month.
    * Feel free to revisit earlier data sets to create calculations.

  * Use your imagination, and good luck!  

* **Maps 1 & 2**

* Instructions: 

  * [Activities/07-Stu-Maps1/README.md](Activities/07-Stu-Maps1/README.md)

  * In this activity, students will chart the intensity of earthquakes over time, as well as create a map comparing the magnitude of earthquakes versus median household income.

  * Use `earthquakes_database.csv` to plot the magnitude of earthquakes measured from 1965 to 2016.

    * Earthquakes should be stratified by magnitude, using the `size` and `color` marks. 
    * Use Tableau's built-in census data to determine whether any relationship exists between earthquakes and 2017 median household income, by county.
      ![earthquakes.png](Images/earthquakes.png)

  * In a separate worksheet, determine whether there has been any trend in the magnitude of earthquakes measured globally over the years. 

  * Create a global map of earthquakes, with each earthquake's magnitude reflected on the map by size and color. Remember that the Richter scale is logarithmic. How might you reflect this relationship on the map?

  * [Activities/08-Stu-Maps2/README.md](Activities/08-Stu-Maps2/README.md)

  * In this activity, students will map unemployment in the United States, by county, between 2008 and 2016.

  * Use `employment.csv`, a dataset constructed from the Bureau of Labor Statics data, to visualize unemployment in the United States.

  * Create a map of unemployment between 2008 and 2016, by county. Which areas in the United States have been the hardest hit during that period?

  * Create an unemployment map, by county, during the period 1990-1998. How does it compare and contrast with the map from 2008-16?

  * Create a map of counties with the highest rates of unemployment between 2008 and 2016. Use Tableau's built-in census data to discover the relationship, if any, between counties with the highest rates of unemployment and the median per capita income, by county. Which counties had the highest unemployment rate during this period?

  * Come up with other visualizations, perhaps looking at the relationship between race and unemployment on a county-by-county basis.


* **Dashboard**

* Instructions:

  * [Activities/10-Stu-Dashboard/README.md](Activities/10-Stu-Dashboard/README.md)

  * In this activity, students will identify the most fun neighborhoods in New York City by mapping bars and the number of noise complaints registered against those bars.

  * Use the dataset provided to create a map of NYC bars, broken down by boroughs. 

    * It should show the locations of bars that have been subject to noise complaints. 
    * A bar should be proportionately represented by the number of complaints it has received. 
    * A bar should also reflect the borough it is located in.
    * Each zip code in the city should be displayed on the map. Location is everything!

    ![Images/barmap1.png](Images/barmap1.png)

  * Create a bar chart that breaks down, per borough, the type of building versus the number of complaints received.

    ![Images/barmap2.png](Images/barmap2.png)

  * Create a dashboard of the worksheets you created above. If you finish early, feel free to create additional interesting visualizations!

  * You can explore NYC Open Data for interesting data sets, including noise complaints.

    <https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga/data>

* **Level of Detail**

* Instructions:

  * [Activities/12-Stu-LOD/README.md](Activities/12-Stu-LOD/README.md)

  * In this activity, students will gain practice with creating LOD calculations.

  * With the `Global Superstore` Excel workbook, create a visualization of state-level profits like the below. It visualizes the contribution of each state to the national profit.

    ![stu_LOD1.png](Images/stu_LOD1.png)

  * In the next map, visualize each city's contribution toward the state's total profit.

    ![stu_LOD2.png](Images/stu_LOD2.png)

  * Create a visualization of state-level profits like the below.

    ![stu_LOD3.png](Images/stu_LOD3.png)

  * The label for each state is **not** the total sum of profits in that state. Rather, it is a state-level visualization of the average of the orders.

  * Hint: for this map, you will need to research Tableau LOD syntax. What will you use instead of `EXCLUDE`?

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
