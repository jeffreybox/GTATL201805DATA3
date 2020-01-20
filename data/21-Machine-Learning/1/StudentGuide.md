## Unit 21.1 - Introduction to Machine Learning

### Overview

Today's lesson plan introduces students to classical machine learning algorithms in the context of [sklearn](http://scikit-learn.org/stable/), covering data preprocessing and common machine learning algorithms.

### Class Objectives

* Students will understand how to calculate and apply regression analysis to datasets.

* Students will understand the difference between linear and non-linear data.

* Students will understand how to quantify and validate linear models.

* Students will understand how to apply scaling and normalization as part of the data preprocessing step in machine learning.

- - -

### Activities Preview

* **Univariate Linear Regression**

* Instructions:

  * Start by creating a scatter plot of the data to visually see if any linear trend exists.

  * Next, use sklearn's linear regression model and fit the model to the data.

    * Print the weight coefficients and the y-axis intercept for the trained model.

  * Calculate the `y_min` and `y_max` values using `model.predict`

  * Plot the model fit line using `[x_min[0], x_max[0]], [y_min[0], y_max[0]]`

* **Brains!**

* Instructions:

  * Start by creating a scatter plot of the data to visually see if any linear trend exists.

  * Split the data into training and testing using sklearn's `train_test_split` function.

  * Next, use sklearn's linear regression model and fit the model to the training data.

  * Use the test data to make new predictions. Calculate the MSE and R2 score for those predictions.

  * Use `model.score` to calculate the the R2 score for the test data.

* **Beer Foam**

* Instructions: [Stu_Beer_Foam.ipynb](Activities/06-Stu_Beer_Foam/Unsolved/Stu_Beer_Foam.ipynb)

* **Respiratory Disease**

* Instructions: [Stu_Respiratory_Disease.ipynb](Activities/08-Stu_Respiratory_Disease/Unsolved/Stu_Respiratory_Disease.ipynb)

- - -

### Copyright

Trilogy Education Services © 2017. All Rights Reserved.
