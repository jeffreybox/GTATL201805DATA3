## 16.3 Lesson Plan - Line Charts, Scatterplots, and More with D3

### Overview

This lesson will advance student understanding of D3 to a higher level. They will learn to display multiple datasets on a single chart. Today's class will culminate in an activity charting the success of 1980s hair metal bands.

### Class Objectives

* Students will be able to create multiple axes and multiple charts with D3.

* Students will be able to create D3 transitions, tooltips, and event listeners in D3.

* Students will be able to gain a better understanding of reusable code and javascript functions.

- - -

### Activities Preview

* **Create a Multiline Chart with Multiple Axes**

* Instructions
  * [README.md](Activities/04-Stu_Multi_Lines_Axes/README.md)

  * Begin by inspecting the data provided to you in the CSV file.

  * Alter the code from the previous activity to plot a multi-line and multi-axes line plot of the data provided.

  * Use the styling provided in the CSS file to make the graph more readable.

* **Adding Tooltips**

* Instructions
  * [README.md](Activities/07-Stu_Add_Tooltips/README.md)

  * Run a server and open the HTML file in the browser in order to study the chart.

  * Move onto the JavaScript file.  Take a moment to look through the code and explain it to a partner.

  * Write additional logic to render a tooltip for each data-point containing the date as well as the number of medals won.  A `dateFormatter` function has already been created.  Use it to format the datetime object when adding it to the tooltip.

* **1980s Hair Metal Bands**

* Instructions

  * [09-Stu_Hair_Metal/README.md](Activities/09-Stu_Hair_Metal/README.md)
  * Write code to complete the chart:

    1. Create scaling functions.

    2. Create axes functions and append them to the chart.

    3. Place data-bound circles on the chart.

    4. Add tooltips using the d3-tips library and tweak the CSS properties to your liking.

* **Transitions**

* Instructions

  * Although not essential, animations can liven up a chart. The D3 library radically simplifies the task of animating elements on a chart.

  * Take a few minutes to examine this [example using D3 transitions](https://bl.ocks.org/d3noob/899a0b2490318a96f9ebd40a5a84e4a7)

  * There are three elements of animated transitions in D3:

    1. The selection.

    2. The transition method.

    3. Attributes.

  * That is, in order to make a transition, we must first select element(s). We then use the `transition()` method to signal that a transition will take place, followed by specifying specific attributes of the transition, such as duration, movements, or color changes.

  * Now you will create at least one of the transitions shown by your instructor.

* **Hair Metal Conclusion**

* Instructions

  * [12-Par_Hair_Metal_Conclusion/README.md](Activities/12-Par_Hair_Metal_Conclusion/README.md)

  * Your task for the remainder of the class will be to pair up with a partner to discuss and dissect the code in `app.js`. Doing so will put you in a very good place to tackle the more difficult version of the homework assignment.

- - -

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
