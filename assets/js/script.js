//Global Variables
var timeString = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var mainContainer = $('.container');

DisplayDate();
DisplayTimeBlocks();

//This function uses moment.js to display the date at the top of the page
function DisplayDate() {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
}

//This function displays the timeblocks section
function DisplayTimeBlocks() {
    for (var i = 0; i < 9; i++) {
        var rowDiv = $('<div>');
        var colDiv1 = $('<div>');
        var colDiv2 = $('<div>');
        var colDiv3 = $('<div>');
        rowDiv.addClass("row");
        colDiv1.addClass("col firstCol");
        colDiv2.addClass("col secondCol");
        colDiv3.addClass("col thirdCol");
        colDiv1.text(timeString[(i)]);
        colDiv2.text(GetDetailsFromLocalStorage(timeString[(i)]));
        colDiv3.css("background", "url('./assets/images/saveIcon.png')");
        colDiv3.css("background-size", "30px 30px");
        colDiv3.css("background-repeat", "no-repeat");
        rowDiv.append(colDiv1);
        rowDiv.append(colDiv2);
        rowDiv.append(colDiv3);
        mainContainer.append(rowDiv);
    }
    var hr = $('<hr>');
    mainContainer.append(hr);
}

//This function retrives the details for a timeblock from local storage
function GetDetailsFromLocalStorage(index) {
    return "chabs";
}