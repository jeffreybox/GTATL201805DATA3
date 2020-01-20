# Unit 5.2 - Plotting With Pandas

### Overview

Today's lesson plan introduces students to Pandas plotting, a quick and effective means through which to create charts using DataFrames.

### Class Objectives

* Students will  feel comfortable creating plots using the `DataFrame.plot()` method

* Students will understand the advantages and disadvantages of creating charts using the `DataFrame.plot()` method.

* Students will  be able to work their way through a complex data set using Pandas and then chart some visualizations based upon the cleaned DataFrame.

- - -

### Activities Preview

* **PyPlot Warmup**

* Instructions

  * What kinds of plots match the datasets below?

  ```
  # DATASET 1
  gyms = ["Crunch", "Planet Fitness", "NY Sports Club", "Rickie's Gym"]
  members = [49, 92, 84, 53]

  # DATASET 2
  x_lim = 2 * np.pi
  x_axis = np.arange(0, x_lim, 0.1)
  sin = np.sin(x_axis)

  # DATASET 3
  gyms = ["Crunch", "Planet Fitness", "NY Sports Club", "Rickie's Gym"]
  members = [49, 92, 84, 53]
  colors = ["yellowgreen", "red", "lightcoral", "lightskyblue"]
  explode = (0, 0.05, 0, 0)

  # DATASET 4
  x_axis = np.arange(0, 10, 0.1)
  x_axis = np.arange(0, 10, 0.1)
  times = []
  for x in x_axis:
    times.append(x * x + np.random.randint(0, np.ceil(max(x_axis))))
  ```

  * Create a plot for each of the datasets above, making certain to provide each chart with a title and labels

* **Battling Kings**

* Instructions

  * Use Pandas to load the `got.csv` data set.

  * Create a Series containing the number of times each king was an attacker.

  * Create a Series containing the number of times each king was a defender.

  * Combine these two variables into a single Series. _Hint_: How should you combine these two Series? Can you add Series in Pandas?

  * Use your combined data to retrieve labels for your x-ticks.

  * Create a red bar chart, and set its x-tick labels appropriately.

  * Add a title and labels to your plot.

  * Display your plot. Who participated in the most battles? The least?

* **Bike Trippin**

* Instructions

  * Create a bar chart using Pandas and MatplotLib that visualizes how many individual bike trips were taken by each gender.

  * Create a pie graph using Pandas and MatplotLib that can be used to visualize the trip duration of a single bike split up by gender.

* **Miles Per Gallon**

* Instructions

  * Create a scatter plot using the data provided, Pandas, and MatplotLib which compares the MPG of a vehicle with its horsepower.

* **Winner Wrestling - Part I**

* Instructions

  * The instructions for this activity are contained in the unsolved Jupyter notebook file.

* **Winner Wrestling - Part II**

* Instructions

  * The instructions for this activity are contained within the unsolved version.

* **Winner Wrestling - Part III**

* Instructions

  * The instructions for this activity are contained within the unsolved version.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
