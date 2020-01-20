## Unit 15.1 - Introduction to Plotly.js

### Overview

Today's lesson plan introduces students to [Plotly.js](https://plot.ly/javascript/), a high-level wrapper around d3.js.

### Class Objectives

* Students will be able to use arrow functions, `.map()`, and `forEach()` for data manipulation.

* Students will learn to use Plotly to create the fundamental charts: Box, scatter, bar, pie, and line plots.

* Students will use Plotly's `layout` object to customize the appearance of their charts.

* Students will annotate charts with labels; text; and hover info.

- - -

### Activities Preview

* **Exploring ES6**

* Instructions
  * This activity is designed as a guided exploration of the ES6 update. 

  * Var vs. Let
  * Const

* **A Flicker of the Eye**

* Instructions

  * In this activity, students will create eye color versus the frequency of eye flickers.

* **Multiple Traces**

* Instructions

  * In ancient Rome, their gods were often counterparts or imports of Greek gods. For example, the Greek god Zeus became in Rome Jupiter via an etymological transformation from Zeus to Zeus Pater ("Father Zeus") to Iupiter (classical Latin lacked a "J" consonant).

  * In today's world, are these gods better known by their Roman names or Greek names? To answer this question, your task is to plot the number of search results, of both Roman and Greek names, returned for each god.

  * To accomplish this task, you will need to create two traces, one for Roman gods, and another for Greek gods.

  * In order to define the data for each plot point in a trace, use the `map()` method on the dataset.

  * Examine `data.js` to determine how you will do this.

* **Horizontal Bar Chart**

* Instructions

  * Sort the data array of objects by `greekSearchResults`.

  * Slice the top 10 objects from the array.

  * Create a horizontal bar chart that plots the top 10 greek gods based on their search results in descending order.

* **Scatter Plots**

* Instructions

  * Alter the html to incorporate a div to hold you plot as well as the script tags to incorporate `data.js` and `plot.js` files.

  * Create a scatter plot to plot the `high_jump`, `discus_throw`, and `long_jump` vs the `year`.

  * Use three separate traces for this data.

- - -

### Copyright

Trilogy Education Services © 2018 All Rights Reserved.
