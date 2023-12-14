$(document).ready(function(){
    // display hours of current day
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYY'));

    // create timeblocks
    for (let i = 0; i < 24; i++) {
        let timeblock = $('<div>').addClass('timeblock');
        let hour = $('<span>').text(`${hour}:00`);
        let input = $('<input>').attr('type', 'text');
        let saveButton = $('<button>').addClass('save-button').text('Save');

        // timeblock.append(hour, input, saveButton);
        // $('#timeblocks').append(timeblock);
        
    }

});