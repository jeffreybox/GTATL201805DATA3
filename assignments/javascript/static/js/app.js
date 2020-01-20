// From data.js source file
var tableData = data;

// function to create the initial table using D3
function createTable(tableData) {
	d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(d => `<td>${d.datetime}</td>
		<td>${d.city}</td>
		<td>${d.state}</td>
		<td>${d.country}</td>
		<td>${d.shape}</td>
		<td>${d.durationMinutes}</td>
		<td>${d.comments}</td>`
	)
};

// function to clear the table
function clearTable() {
	d3.select("tbody")
  .selectAll("tr")
  .remove()
};

// Select the filter button and tell it what to do
var filter = d3.select("#filter-btn");
filter.on("click", function() {
	 // Prevent the page from refreshing
	 d3.event.preventDefault();

	 // Select the input elements from each field by #ID and get the raw HTML node
	 var inputElement1 = d3.select("#datetime-filter");
	 var inputElement2 = d3.select("#city-filter");
	 var inputElement3 = d3.select("#state-filter");
	 var inputElement4 = d3.select("#country-filter");
	 var inputElement5 = d3.select("#shape-filter");

	 // Get the value property of the user input elements above
	 var inputValue1 = inputElement1.property("value");
	 var inputValue2 = inputElement2.property("value");
	 var inputValue3 = inputElement3.property("value");
	 var inputValue4 = inputElement4.property("value");
	 var inputValue5 = inputElement5.property("value");

	// An annoying series of cascading if statements to combine all of the user inputs for a master filter
	// If a user field is blank, then leave the data alone!
	if (inputValue1 === ""){
		var filtered1 = tableData
	}else{
		var filtered1 = tableData.filter(d => d.datetime === inputValue1)
	};

	if (inputValue2 === ""){
		var filtered2 = filtered1
	}else{
		var filtered2 = filtered1.filter(d => d.city === inputValue2)
	};

	if (inputValue3 === ""){
		var filtered3 = filtered2
	}else{
		var filtered3 = filtered2.filter(d => d.state === inputValue3)
	};

	if (inputValue4 === ""){
		var filtered4 = filtered3
	}else{
		var filtered4 = filtered3.filter(d => d.country === inputValue4)
	};

	if (inputValue5 === ""){
		var filteredData = filtered4
	}else{
		var filteredData = filtered4.filter(d => d.shape === inputValue5)
	};

	// call our functions: clear the table and re-create with the filteredData
	clearTable();
	createTable(filteredData)
});

// Select the clear button by html ID
var filter = d3.select("#clear-btn");
filter.on("click", function() {
	// clear the table and re-create with the original data
	clearTable();
	createTable(tableData);
});

// Initalize the page with the source data on load
createTable(tableData)

// Another cooler way to dynamically filter as you type
	// This is way better, but I couldn't figure out how to apply multiple filters
	// Source: https://www.w3schools.com/howto/howto_js_filter_table.asp

// // date/time filter
// function dateFilter() {
//   // Declare variables 
//   var input, filter, table, tr, td, i;
//   var input = document.getElementById("datetime");
//   var filter = input.value.toUpperCase();
//   var table = document.getElementById("ufo-table");
//   tr = table.getElementsByTagName("tr");
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     } 
//   }
// }