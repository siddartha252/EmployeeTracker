$(document).ready(function () {
    FillDataList();
     populateEmployeeIdDropdown(); // Uncomment this function call
});
function populateEmployeeIdDropdown()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxtMe0qLfHKU8j9ds6V9b7RtxUqYMAViYw47men0oIKIQwvWQUDyWzrJVSPnD-ARjJD/exec?page=employeeCode", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#employeeCode").append(Options);               //04
        });

}
function FillDataList()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxtMe0qLfHKU8j9ds6V9b7RtxUqYMAViYw47men0oIKIQwvWQUDyWzrJVSPnD-ARjJD/exec?page=dropdown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#employeeName").append(Options);               //04
        });

}