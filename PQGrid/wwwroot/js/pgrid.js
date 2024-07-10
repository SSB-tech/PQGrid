$(document).ready(function () {

    // Define an array of columns for the grid.
    var colModel = [
        {
            title: "Employee Name",
            width: 100,
            dataType: "string",
            dataIndx: "name", // Matches the key in the row data,
            align:"center",
            filter: { type: "textbox", condition: "begin", listeners: ["keyup"] } 
        },
        {
            title: "Department",
            width: 200,
            dataType: "string",
            dataIndx: "department"
        },
        {
            title: "Contact No",
            width: 150,
            dataType: "string",
            align: "right",
            dataIndx: "contactNo"
        }
    ];

    // Configuration object for pqGrid.
    var obj = {
        width: 700,
        height: 300,
        colModel: colModel, // Column model defined above
        pageModel: { type: "local", rPP: 10, strRpp: "{0}", strDisplay: "{0} to {1} of {2}" },
        dataModel: {
            location: "remote", // Data is fetched remotely
            dataType: "JSON", // Expected data type
            method: "GET", // HTTP method to fetch data
            url: "/Employees/GetEmployeeList/", // URL to fetch data from
            // Custom function to extract the data from the response
            getData: function (dataJson) {
                return { data: dataJson.dataRow }; // Assuming dataJson structure
            }
        },
        filterModel: { header: true }
    };
    debugger;
    $("#grid_json").pqGrid(obj);
});
