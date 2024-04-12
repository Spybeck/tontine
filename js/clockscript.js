// JavaScript Document
var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');
var dayDate = document.getElementById('today');
var utcDayDate = document.getElementById('utc');
var chDayDate = document.getElementById('china');



function initClock() {
    // documentation: https://momentjs.com/timezone/docs/
    var date = new Date();
    var utcDate = date.toUTCString('LLLL');
    //zh-Hans
    const formatter = new Intl.DateTimeFormat('zh-Hans', {
        hour: 'numeric',
        hour12: false,
        minute: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timeZone: 'Asia/Hong_kong',
      });
    var chTime = ('Intl.DateTimeFormat string: ', formatter.format(date));
    var hour = date.getHours() % 12; // 0 - 23
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var month = date.getMonth();
    var day = date.getDay();
    var thisDate = date.getDate();
    var monthsTxt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysTxt = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var hourDeg = (hour * 30) + (0.5 * minute); // Every hour, 30 deg. 30/60
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6; // 360 / 60

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

    // Current date time
    for (var i = 0; i < monthsTxt.length; i++) {
        var thisMonth = (monthsTxt[month]);
    }

    for (var i = 0; i < daysTxt.length; i++) {
        var thisDay = (daysTxt[day]);
    }
    // Local date
    dayDate.value = (thisDay + " " + thisMonth + " " + thisDate + ", " + date.getFullYear()) + " Local";

    // UTC date time
    utcDayDate.value = (utcDate);

    // China date time
    chDayDate.value = ("Taishan: " + chTime);
    //console.log(chTime)
    
    setTimeout(initClock, 1000);

}
initClock();


