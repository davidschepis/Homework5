DisplayDate();

function DisplayDate() {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
}