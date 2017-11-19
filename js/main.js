$(document).ready(function () {
    var tick  = new Audio('/assets/tick.mp3');
    tick.loop = true;
    tick.play();
    var interval = setInterval(showTime, 1000);
    var curr_second = 24;
    $('#clock-large').html(curr_second);
    function showTime() {
        if (curr_second < 11) {
            $('#clock-large').html("0" + --curr_second);

        } else {

            $('#clock-large').html(--curr_second);
        }
        if (curr_second == 12) {
            var snd = new Audio("/assets/shotclock.mp3"); // buffers automatically when created
            snd.play();
        }
        if (curr_second == 0) {
            var snd = new Audio("/assets/buzzer.mp3"); // buffers automatically when created
            snd.play();
            clearInterval(interval);
            setTimeout(function(){window.location.reload();},1500);
        }
    }

    //var date = new Date();
    //var day = date.getDate();
    //var month = date.getMonth();
    //var thisDay = date.getDay(),
    //    thisDay = myDays[thisDay];
    //var yy = date.getYear();
    //var year = (yy < 1000) ? yy + 1900 : yy;

    //$('#date-large').innerHTML = "<b>" + thisDay + "</b>, " + day + " " + months[month] + " " + year;
});
