# THE MARS FLASK APP
    # Jeff Box: 2018
    # run mongod in shell before launching flask
    # flask run

# import necessary libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import mars_scrape

# create instance of Flask app
app = Flask(__name__)

# The default port used by MongoDB is 27017
# https://docs.mongodb.com/manual/reference/default-mongodb-port/
# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_app"
mongo = PyMongo(app)

# Create a root route / that will query your Mongo database 
@app.route("/")
def home():
    mars = mongo.db.mars.find_one()
    return render_template("index.html", mars=mars)

# Route that will trigger scrape functions
@app.route("/scrape")
def call():
    # Create the 'mars' document in mars_app
    mars = mongo.db.mars
    # Run scrape function from mars_scrape.py
    mars_data = mars_scrape.scrape()
    # Insert data into database
    mars.update({}, mars_data, upsert=True)
    # Redirect back to home page
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)