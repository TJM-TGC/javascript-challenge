// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Build Table 
function importTable(table) {
    table.forEach(function(file) {
        var row = tbody.append("tr");
        Object.entries(file).forEach(function([key,value]) {
            var cell = tbody.append("td")
            cell.text(value);
        })
    })
}

// Import the Data
importTable(tableData);

var button = d3.select("#filter-btn");

var resetButton = d3.select("#reset-btn");

var form = d3.select("#form-group");

button.on("click", runEnter);
form.on("submit", runEnter);

resetButton.on("click", reset);

// filter table by date

function runEnter() {

    // Prevent Defaults
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(inputDate => inputDate.datetime == inputValue);


    // Clear Body
    tbody.html("");

    // Reload filtered data via html table
    importTable(filteredData);

}

// Reset whole page

function reset () {
    // No defaults!
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Clear Body
    tbody.html("");

    // Reload filtered data via html table
    importTable(tableData);
}


