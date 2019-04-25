// *****************************************************************************
// Copy dataset from data.js
// *****************************************************************************
var tableData = data;

// *****************************************************************************
// Select tbody from the index.html file
// *****************************************************************************
tbody = d3.select("tbody");

// *****************************************************************************
// Function to display the data passed in as a table by looping through the data
// and using Object.entries to get the key and value from the data that was 
// passed in. Loop through the data to generate the rows for the body of the 
// table and write it to the index.html file (dynamically updating the displayed 
// web page)
// *****************************************************************************
function displayData(data){ 
  // ---------------------------------------------------------------------------
  // Clear the table
  // ---------------------------------------------------------------------------
  tbody.text("");

  // ---------------------------------------------------------------------------
  // Test to see if there is any data in the filtered dataset
  // ---------------------------------------------------------------------------
  if (data.length > 0) {
    // -------------------------------------------------------------------------
    // If there is data, display the data in the table body
    // -------------------------------------------------------------------------
    data.forEach(function(sighting){
      var new_tr = tbody.append("tr");
      Object.entries(sighting).forEach(function ([key, value]) {
        new_td = new_tr.append("td").text(value);
      });
    });
  } else {
    // -------------------------------------------------------------------------
    // If there is no data, display an alert messagee so the user knows there 
    // is no data associated with their search criteria
    // -------------------------------------------------------------------------
    alert("No sightings on that date, please try again")
  }
}

// *****************************************************************************
// Provide the initial display of the default dataset
// *****************************************************************************
displayData(tableData);

// *****************************************************************************
// Define the user's input field and the search button
// *****************************************************************************
var dateInputText = d3.select("#datetime");
var searchButton = d3.select("#search-btn");

// *****************************************************************************
// Search Button click event handler. It reads user input and filters the 
// dataset using the input from the input field.
// *****************************************************************************
function clickSelect(){
  // ---------------------------------------------------------------------------
  // Don't refresh the page!
  // ---------------------------------------------------------------------------
  d3.event.preventDefault();
  // ---------------------------------------------------------------------------
  // Print the value that was input
  // ---------------------------------------------------------------------------
  console.log(dateInputText.property("value"));
  // ---------------------------------------------------------------------------
  // Create a new table showing only the filterd data
  // ---------------------------------------------------------------------------
  var new_table = tableData.filter(sighting => 
                  sighting.datetime===dateInputText.property("value"));
  // ---------------------------------------------------------------------------
  // Display the new table using the filtered data
  // ---------------------------------------------------------------------------
  displayData(new_table);
}

// *****************************************************************************
// Event listener to handle new search via Search Button click
// *****************************************************************************
searchButton.on("click", clickSelect);
