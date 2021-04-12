// from data.js
var tableData = data;

// Build Table 
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord)) => {
        var row = tbody.append("tr");
        Object.defineProperties(ufoRecord).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    };
};

// Clear Table For New Data
function deleteTbody() {
    d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// Display All UFO Sightings
console.log(tableData);
tableDisplay(tableData);

// Filter Button
var button = d3.select("#filter-btn");

// Filter DB & Display
button.on("click",function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");

    if (dateInput.trim() === "" ) {
        var filteredData = tableData;
    } else {
        var filteredData  = tableData.filter(ufoSighting =>
            ufoSighting.datetime === dateInput.trim());
    };

    // If no data is found
    if (filteredData.length == 0) {
        d3.select("tbody")
        .append("tr")
        .append("td")
            .attr("colspan",7)
            .html("<h4>No Records Found</h4>");
    };
    console.log(filteredData);
    tableDisplay(filteredData);
})

