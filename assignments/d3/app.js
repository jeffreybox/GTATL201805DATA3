// JEFFREY BOX
// OCTOBER 2018
// DESCRIPTION: D3 CANVAS READING CSV OF HEALTHCARE DATA BY STATE
  // X parameters read from csv file: 1) poverty 2) age 3) income
  // Y parameters read from csv file: 1) insured% (healthcare) 2) smokes% 3) obesity %

//*********************
// RESPONSIVE BROWSER 
//*********************

// When the browser loads, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);

makeResponsive();

function makeResponsive() { // <-- MASTER BRACKET if using

  // if the SVG area isn't empty when the browser loads, remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");
  if (!svgArea.empty()) {
    svgArea.remove();
  };

// *********************
// SETUP DIMENSIONS
// *********************

  // Define SVG area dimensions
  var svgWidth = 1100;
  var svgHeight = 600;

  // Define the chart's margins as an object
  var chartMargin = {
      top: 60,
      right: 60,
      bottom: 80,
      left: 80
    };

  // Define dimensions of the chart area
  var width = svgWidth - chartMargin.left - chartMargin.right;
  var height = svgHeight - chartMargin.top - chartMargin.bottom;
  // var padding = 10;

//*********************
// SVG WRAPPER 
//*********************
  // Select body, append SVG area to it, and set the dimensions
  var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
  // to the margins set in the "chartMargin" object.
  var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

  // IMPORTANT NOTE: Using chartGroup above for text labels was truncating 50% of the data
  // This makes zero sense and is frustrating as hell
  // Anyway, solution: create a new chart group and all 50 states appear...  -_-
  var chartGroup2 = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// initial params
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";

// move x scaler here and create functions for x and y
function xScale(healthData, chosenXAxis) {

  var xLinearScale = d3.scaleLinear()
  .domain([d3.min(healthData, d => d[chosenXAxis])-1, 
  d3.max(healthData, d => d[chosenXAxis])+1])
  .range([0, width]);

  return xLinearScale;
}

// move y scaler here and create functions for x and y
function yScale(healthData, chosenYAxis) {

var yLinearScale = d3.scaleLinear()
  .domain([0, d3.max(healthData, d => d[chosenYAxis])])
  .range([height, 0]);

  return yLinearScale
}

// function to update xaxis 
function renderXaxis(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
  .duration(1000)
  .call(bottomAxis);

  return xAxis
}

// function to update yaxis 
function renderYaxis(newYScale, yAxis) {
  var leftAxis = d3.axisLeft(newYScale);

  yAxis.transition()
  .duration(1000)
  .call(leftAxis);

  return yAxis
}
// @TO_DO: function to update circles with transition to new
function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]))
    .attr("cy", d => newYScale(d[chosenYAxis]));

  return circlesGroup;
}

function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {
  textGroup.transition()
    .duration(1000)
    .attr("x", d => newXScale(d[chosenXAxis])-5)
    .attr("y", d => newYScale(d[chosenYAxis])+3);

  return textGroup;
}

//*********************
// Tooltip 
//*********************
// @TO_DO: function to update new tooltip
function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {

  // ifs to build the tooltip
  if (chosenXAxis === "poverty") {
    var xlabel = "Poverty %";
  }
  else if (chosenXAxis === "age") {
    var xlabel = "Age (Median)";
  }
  else if (chosenXAxis === "income") {
    var xlabel = "Income (Median)";
  }

  if (chosenYAxis === "healthcare") {
    var ylabel = "Healthcare %";
  }
  else if (chosenYAxis === "smokes") {
    var ylabel = "Smokes %";
  }
  else if (chosenYAxis === "obesity") {
    var ylabel = "Obesity %";
  }

  // Initialize Tooltip
  var tool_tip = d3.tip()
    .attr("class", "tooltip")
    .offset([-8, 0])
    .html(d => (`${xlabel}: ${d[chosenXAxis]}<br/>${ylabel}: ${d[chosenYAxis]}`));
  
  chartGroup.call(tool_tip);

  circlesGroup.on("mouseover", 
    d => tool_tip.show(d))
    .on("mouseout", function(d, index) {
      tool_tip.hide(d);
    });
  return circlesGroup;  
}

//*********************
// IMPORT DATA & PARSE
//*********************

  // Load data from csv
  d3.csv("data.csv", function(error, healthData) {

    // Log an error if one exists
    if (error) return console.warn(error);
  
    // Print the data
    console.log(healthData);

    healthData.forEach(function(data) {
        data.id = +data.id;
        //data.state = data.state;
        //data.abbr = data.abbr;
        data.poverty = +data.poverty;
        data.povertyMoe = +data.povertyMoe;
        data.age = +data.age;
        data.ageMoe = +data.ageMoe;
        data.income = +data.income;
        data.incomeMoe = +data.incomeMoe;
        data.healthcare = +data.healthcare;
        data.healthcareLow = +data.healthcareLow;
        data.healthcareHigh = +data.healthcareHigh;
        data.obesity = +data.obesity;
        data.obesityLow = +data.obesityLow;
        data.obesityHigh = +data.obesityHigh;
        data.smokes = +data.smokes;
        data.smokesLow = +data.smokesLow;
        data.smokesHigh = +data.smokesHigh;
        data.hours = +data.hours;
    });

//*********************
// Create scales & axes
//*********************


// @TO_DO: modify the functions so they're above the csv call

var xLinearScale = xScale(healthData, chosenXAxis)

// @TO_DO: modify y like above
// var yScale = d3.scaleLinear()
//   .domain([0, d3.max(healthData, d => d.healthcare)])
//   .range([height, 0]);
  
var yLinearScale = yScale(healthData, chosenYAxis)

// create axes
var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);

// append x-axis to chart group element
var xAxis =  chartGroup.append("g")
  .classed("x-axis",true)
  .attr("transform", `translate(0, ${height})`)
  .call(bottomAxis);

  // append y-axis to chart group element
var yAxis =  chartGroup.append("g")
  .call(leftAxis);


//*********************
// Generate d3 graph
//*********************

  // Create circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("r", "8")
    .attr("fill", "blue")
    .attr("opacity",".75")
    .attr("stroke-width", "1")
    .attr("stroke", "black")

  // State names as text in circles 
  var textGroup = chartGroup2.selectAll("text")
    .data(healthData)
    .enter()
    .append("text")
    .text(d => d.abbr)
    .attr("x", d => xLinearScale(d[chosenXAxis])-5)
    .attr("y", d => yLinearScale(d[chosenYAxis])+3)
    .attr("font-family", "sans-serif")
    .attr("font-size", "7px")
    .style("fill", "white");

//*********************
// Axis Groups
//*********************

  // x-axis group
  var labelsGroupX = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + chartMargin.top})`);

    var povertyLabel = labelsGroupX.append("text")
        .attr("x", 0)
        .attr("y", -25)
        .attr("value", "poverty")
        .classed("active",true)
        .text("Poverty %");

    var ageLabel = labelsGroupX.append("text")
        .attr("x", 0)
        .attr("y", -5)
        .attr("value", "age")
        .classed("inactive",true)
        .text("Age (Median)");

    var incomeLabel = labelsGroupX.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .attr("value", "income")
        .classed("inactive",true)
        .text("Income (Median)");


  // y-axis group
  var labelsGroupY = chartGroup.append("g")
      .attr("transform", "rotate(-90)")
      .attr("dy", "1em")
      
    
    var healthcareLabel = labelsGroupY.append("text")
        .attr("y", 0 - chartMargin.left)
        .attr("x", 0 - (height / 2))
        .attr("y", 0 - chartMargin.left + 55)
        .attr("x", 0 - (height / 2))
        .attr("value","healthcare")
        .classed("active", true)
        .text("Healthcare %");

    var smokesLabel = labelsGroupY.append("text")
        .attr("y", 0 - chartMargin.left + 35)
        .attr("x", 0 - (height / 2))
        .attr("value","smokes")
        .classed("inactive", true)
        .text("Smokes %");

    var obesityLabel = labelsGroupY.append("text")
          .attr("y", 0 - chartMargin.left +15)
          .attr("x", 0 - (height / 2))
          .attr("value","obesity")
          .classed("inactive", true)
          .text("Obesity %");

  // updateToolTip
  var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

//*********************
// Event Listening
//*********************
// functions here found above csv import

//*************** x-axis update
labelsGroupX.selectAll("text") 
.on("click", function() {  // get value of selection
  
  // new values
  var value = d3.select(this).attr("value");
  if (value !== chosenXAxis) {  // replaces chosenXAxis with value
    chosenXAxis = value;
    console.log(chosenXAxis)
    
    // updates x scale for new data
    xLinearScale = xScale(healthData, chosenXAxis);  // updates x axis with transition
    xAxis = renderXaxis(xLinearScale, xAxis); // updates circles with new x values
    circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis); // updates tooltips with new info
    textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);
    circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup); // changes classes to change bold text
    
    if (chosenXAxis === "age") {
      ageLabel
        .classed("active", true)
        .classed("inactive", false);
      povertyLabel
        .classed("active", false)
        .classed("inactive", true);
      incomeLabel
        .classed("active", false)
        .classed("inactive", true);
    }
    else if (chosenXAxis === "poverty"){
      ageLabel
        .classed("active", false)
        .classed("inactive", true);
      povertyLabel
        .classed("active", true)
        .classed("inactive", false);
      incomeLabel
        .classed("active", false)
        .classed("inactive", true);
      }

    else if (chosenXAxis === "income"){
      ageLabel
        .classed("active", false)
        .classed("inactive", true);
      povertyLabel
        .classed("active", false)
        .classed("inactive", true);
      incomeLabel
        .classed("active", true)
        .classed("inactive", false);    
     };
    }; 
  });

  //*************** y axis update
  labelsGroupY.selectAll("text") 
  .on("click", function() {  // get value of selection
  
    // new values
    var value = d3.select(this).attr("value");
    if (value !== chosenYAxis) {  // replaces chosenXAxis with value
      chosenYAxis = value;
      console.log(chosenYAxis)
      
      // updates y scale for new data
      yLinearScale = yScale(healthData, chosenYAxis);  // updates x axis with transition
      yAxis = renderYaxis(yLinearScale, yAxis); // updates circles with new x values
      circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis); // updates tooltips with new info
      textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);
      circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup); // changes classes to change bold text
      
      if (chosenYAxis === "healthcare") {
        healthcareLabel
          .classed("active", true)
          .classed("inactive", false);
        smokesLabel
          .classed("active", false)
          .classed("inactive", true);
        obesityLabel
          .classed("active", false)
          .classed("inactive", true);
      }
      else if (chosenYAxis === "smokes") {
        healthcareLabel
          .classed("active", false)
          .classed("inactive", true);
        smokesLabel
          .classed("active", true)
          .classed("inactive", false);
        obesityLabel
          .classed("active", false)
          .classed("inactive", true);
      }
      else if (chosenYAxis === "obesity") {
        healthcareLabel
          .classed("active", false)
          .classed("inactive", true);
        smokesLabel
          .classed("active", false)
          .classed("inactive", true);
        obesityLabel
          .classed("active", true)
          .classed("inactive", false);
      };
    };
  });
});
} // <-- ending for responsive browser if used