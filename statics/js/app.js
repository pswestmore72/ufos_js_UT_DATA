// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filter = {
  datetime: '',
  city: '',
  state: '',
  country: '',
  shape: '',
}

// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  // 4b. Save the value that was changed as a variable.
  // 4c. Save the id of the filter that was changed as a variable.
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.

  // combined all above steps for clarity and ease into ternary operators
  filter = {
    datetime: d3.select("#datetime").property("value") ? d3.select("#datetime").property("value") : '',
    city: d3.select("#city").property("value") ? d3.select("#city").property("value") : '',
    state: d3.select("#state").property("value") ? d3.select("#state").property("value") : '',
    country: d3.select("#country").property("value") ? d3.select("#country").property("value") : '',
    shape: d3.select("#shape").property("value") ? d3.select("#shape").property("value") : '',
  }
  
  // 6. Call function to apply all filters and rebuild the table
  filterTable();
  
}
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  filteredData = filteredData
    .filter((el) => {
      if (filter.date) {
        if (el.datetime === filter.date) {
          return el;
        } else return;
      }
      else return el;
    })
    .filter((el) => {
      if (filter.city) {
        if (el.city === filter.city) {
          return el;
        } else return;
      }
      else return el;
    })
    .filter((el) => {
      if (filter.state) {
        if (el.state === filter.state) {
          return el;
        } else return;
      }
      else return el;
    })
    .filter((el) => {
      if (filter.country) {
        if (el.country === filter.country) {
          return el;
        } else return;
      }
      else return el;
    })
    .filter((el) => {
      if (filter.shape) {
        if (el.shape === filter.shape) {
          return el;
        } else return;
      }
      else return el;
    });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}
  
d3.selectAll("li").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
