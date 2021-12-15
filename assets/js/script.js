//Global Variables
var timeString = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];//will make displaying these easier
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];//to work with moment.js and figure out what color the textarea should be
var mainContainer = $('.container');//main container on the webpage

DisplayDate();//display date on load
DisplayTimeBlocks();//display timeblocks on load

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
        var textArea = $('<textarea>');
        var saveButton = $('<button>');
        var span = $('<span>');
        var img = $('<img>');

        rowDiv.addClass("row");
        colDiv1.addClass("col-1");
        colDiv2.addClass("col-9");
        colDiv3.addClass("col-1");
        colDiv1.addClass("firstCol")
        colDiv2.addClass("secondCol")
        colDiv3.addClass("thirdCol")
        colDiv1.addClass("border-top");
        colDiv1.addClass("border-right");
        textArea.addClass("form-control");
        textArea.addClass("h-100");
        saveButton.addClass("btn");
        saveButton.addClass("btn-primary");
        saveButton.addClass("btn-block");
        colDiv1.addClass("m-0");
        colDiv1.addClass("p-0");
        colDiv2.addClass("m-0");
        colDiv2.addClass("p-0");
        colDiv3.addClass("m-0");
        colDiv3.addClass("p-0");
        
        span.text(timeString[(i)]);
        span.css("position", "relative");
        span.css("top", "20px");
        span.css("right", "20px");
        colDiv1.css("text-align", "right");
        textArea.attr("id", "details" + i);
        textArea.text(GetDetailsFromLocalStorage(i));
        saveButton.css("height", "100%");
        saveButton.attr("onclick", "HandleSaveButton(" + i + ")");
        saveButton.css("border-radius", "0% 25% 25% 0%");
        img.attr("src", "./assets/images/save.svg");
        if(CheckPresent(i)) {
            textArea.css("background-color", "LightRed");
        }
        else if (CheckFuture(i)) {
            textArea.css("background-color", "LightGreen");
        }
        else {
            textArea.css("background-color", "LightGray");
        }
        colDiv1.append(span);
        colDiv2.append(textArea);
        saveButton.append(img);
        colDiv3.append(saveButton);
        rowDiv.append(colDiv1);
        rowDiv.append(colDiv2);
        rowDiv.append(colDiv3);
        mainContainer.append(rowDiv);
    }
    var hr = $('<hr>');
    mainContainer.append(hr);
}

//This function returns true if the current hour matches the timeslot, false otherwise
function CheckPresent(index) {
    return moment().hour() === timeArray[index] ? true : false;
}

//This function returns true if the current hour is greater than the timeslot, false otherwise
function CheckFuture(index) {
    return moment().hour() > timeArray[index] ? true : false;
}

//This function retrives the details for a timeblock from local storage
function GetDetailsFromLocalStorage(index) {
    if (localStorage.getItem("details" + index) === null) {
        return "";
    }
    else {
        return localStorage.getItem("details" + index);
    }
}

function HandleSaveButton(index) {
    localStorage.setItem("details" + index, $("#details" + index).val());
    // DisplayTimeBlocks();
}