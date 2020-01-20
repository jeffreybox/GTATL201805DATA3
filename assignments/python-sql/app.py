# JB ~ Adapted from my Jupyter Notebook solutions

###################################################
# 1. Import  libraries
###################################################
import numpy as np
import pandas as pd
import datetime as dt
from flask import Flask, jsonify

###################################################
# 2. Python SQL toolkit and ORM setup
###################################################
import sqlalchemy
from sqlalchemy import distinct
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

# Reflect the database into tables, create session, save references
engine = create_engine("sqlite:///Resources/hawaii.sqlite")
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

###################################################
# 3a. Flask setup & global vars
###################################################

# Flask setup
app = Flask(__name__)

###################################################
# 3b. Flask routes
###################################################
@app.route("/")
def index():
    """List all available api routes."""
    return (
        f"<strong>Available Routes:</strong><br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/start<br/>"
        f"/api/v1.0/start/end/<br/><br/>"
        f"Notes about the available routes:<br/><ul><li>precipitation api: lists all dates and all precipitation observations</li><li>stations api: displays a unique list of station names</li><li>tobs api: returns the date and temperature for the top station </li><li>user entry api: '/start' & '/start/end' return a range of summary information based on user YYYY-MM-DD input</li></ul><end>"
    )

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@app.route("/api/v1.0/precipitation")
def precipitation():
    # Table instantiation
    Measurement = Base.classes.measurement
    # Time variables - NOTE: I tried making these global outside the functions <above> under the flask setup, and it did not work. 
    # I guess this information must be declared within the function. Alternatively, I would create a separate py file ... if I had time
    today = dt.date.today()
    one_year = dt.timedelta(days=365)
    last_year = today - one_year
    maxdate = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    max_date_db = dt.datetime.strptime(maxdate[0], '%Y-%m-%d').date()
    last_year_db = max_date_db-one_year
    # Query for the dates and temperature observations from the last year.
    results = session.query(Measurement.date, Measurement.prcp).filter(Measurement.date >= last_year_db).order_by(Measurement.date).all()
    dictionary = []
    for x in results:
        prcp_dict = {}
        prcp_dict["Date"] = x[0]
        prcp_dict["Prcp"] = x[1]
        dictionary.append(prcp_dict)
    return jsonify(dictionary)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
@app.route("/api/v1.0/stations")
def stations():
    # Table instantiation
    Measurement = Base.classes.measurement
    # Return a JSON list of stations
    results = session.query(distinct(Measurement.station)).all()
    results_list = list(np.ravel(results))
    return jsonify(results_list)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
@app.route("/api/v1.0/tobs")
def tobs():
    """Temp results for the top station"""
    # Table instantiation
    Measurement = Base.classes.measurement
    # Date crap that can't exist outside this method
    today = dt.date.today()
    one_year = dt.timedelta(days=365)
    last_year = today - one_year
    maxdate = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    max_date_db = dt.datetime.strptime(maxdate[0], '%Y-%m-%d').date()
    last_year_db = max_date_db-one_year
    # Get the top station
    topstation_query = session.query(Measurement.station, func.count(Measurement.station)).group_by(Measurement.station).order_by(func.count(Measurement.station).desc()).first()
    # Return Temperature Observations (tobs) for the previous year *** added code to only return for the top station
    topstationtemp_query = session.query(Measurement.date, Measurement.tobs).filter(Measurement.station == topstation_query[0]).filter(Measurement.date >= last_year_db).order_by(Measurement.date).all() 
    # Convert the query results to a Dictionary using date as the key and tobs as the value.
    dictionary = []
    for query in topstationtemp_query:
        temp_dict = {}
        temp_dict["date"] = query.date
        temp_dict["temp"] = query.tobs
        dictionary.append(temp_dict)
    # Return the JSON representation of your dictionary. 
    jdict = jsonify(dictionary)
    return jdict

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@app.route("/api/v1.0/<start_date>")
def calc_temp(start_date):
    # Table instantiation 
    Measurement = Base.classes.measurement

    # Date crap
    maxdate = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    max_date_db = dt.datetime.strptime(maxdate[0], '%Y-%m-%d').date()
    one_day = dt.timedelta(days=1)
    start_date_db = dt.datetime.strptime(start_date, '%Y-%m-%d').date()
    date_range = (max_date_db-start_date_db).days

    # A modified block from the jupyter notebook
    def daily_normals(date):
        sel = [func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)]
        return session.query(*sel).filter(func.strftime("%Y-%m-%d", Measurement.date) == date).all()

    # Use the start and end date to create a range of dates (using the dates we already have)
    # Set some initial variables for the date array loop
    date_array = []
    x = 0

    # Run a lil while loop that creates an array of dates
    while x < date_range:
        # Save our range of strings
        start_date_str = dt.datetime.strftime(start_date_db, '%Y-%m-%d')
        date_array.append(start_date_str)
        start_date_db = start_date_db+one_day
        x = x+1

    # Loop through our list of date strings and calculate the normals for each date
    normals = []
    for d in date_array:
        output = daily_normals(d)
        output = list(np.ravel(output))
        normals.append([d,output[0],output[1],output[2]])

    dictionary = []
    for entry in normals:
        norm_dict = {}
        norm_dict["date"] = entry[0]
        norm_dict["min"] = entry[1]
        norm_dict["avg"] = entry[2]
        norm_dict["max"] = entry[3]
        dictionary.append(norm_dict)

    return jsonify(dictionary)

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# @app.route("/api/v1.0/<start_date>/<end_date>")
def calc_temp_range(start_date, end_date):
    # Table instantiation 
    Measurement = Base.classes.measurement

    # Date crap
    end_date_db = dt.datetime.strptime(end_date, '%Y-%m-%d').date()
    one_day = dt.timedelta(days=1)
    start_date_db = dt.datetime.strptime(start_date, '%Y-%m-%d').date()
    date_range = (end_date_db-start_date_db).days

    # A modified block from the jupyter notebook
    def daily_normals(date):
        sel = [func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)]
        return session.query(*sel).filter(func.strftime("%Y-%m-%d", Measurement.date) == date).all()

    # Use the start and end date to create a range of dates (using the dates we already have)
    # Set some initial variables for the date array loop
    date_array = []
    x = 0

    # Run a lil while loop that creates an array of dates
    while x < date_range:
        # Save our range of strings
        start_date_str = dt.datetime.strftime(start_date_db, '%Y-%m-%d')
        date_array.append(start_date_str)
        start_date_db = start_date_db+one_day
        x = x+1

    # Loop through our list of date strings and calculate the normals for each date
    normals = []
    for d in date_array:
        output = daily_normals(d)
        output = list(np.ravel(output))
        normals.append([d,output[0],output[1],output[2]])

    dictionary = []
    for entry in normals:
        norm_dict = {}
        norm_dict["date"] = entry[0]
        norm_dict["min"] = entry[1]
        norm_dict["avg"] = entry[2]
        norm_dict["max"] = entry[3]
        dictionary.append(norm_dict)

    return jsonify(dictionary)

###################################################
#4. Run Flask
###################################################
if __name__ == "__main__":
    app.run(debug=True)