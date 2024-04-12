// Moon calculate javascript
// establish base number of days since January 6, 2000 @ 12:24pm
// Days from 1/6/2000 to September 2, 2022 @ 12:24pm = 8275

// Need to 1 dqy to base number every day at 12:45pm to obtain "elapsedTime"

async function getPhases() {

    let date_1 = new Date();
    let date_2 = new Date('01/06/2000');

    const days = (date_1, date_2) =>{
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = (difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    //console.log( "date time = " + date_1)
    //console.log(days(date_1, date_2) + " days since 1/6/2000");

    synodicMonth = 29.53058770576
    lunarDay = (days(date_1, date_2) % synodicMonth)

    console.log("Lunar Day = " + lunarDay)

    // Moon Phase Switch

    switch (true) {
            // new moon 01.png
        case (lunarDay > 27.960300 || lunarDay <= 0.435442):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/01.png'alt='New Moon' style='width:60px;height:60px;'>"
            document.getElementById("moon-phase").innerHTML = "Moon Phase: New Moon"
            break;
            // waxing cresent 12.png
        case (lunarDay > 0.435442 && lunarDay <= 6.435441):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/12.png'alt='Waxing Cresent' style='width:60px;height:60px;'>"
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Waxing Cresent"
            break;
            //First Quarter 17.png
        case (lunarDay > 6.435442 && lunarDay <= 8.382647):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/17.png'alt='First Quarter' style='width:60px;height:60px;'>"
            document.getElementById("moon-phase").innerHTML = "Moon Phase: First Quarter"
            break;
            //Waxing gibbous 21.png
        case (lunarDay > 8.382647 && lunarDay <= 10.435442):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/21.png' alt='Waxing Gibbous' style='width:60px;height:60px;'>"
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Waxing Gibbous"
            break;
            //Waving Gibbous 26.png
        case (lunarDay > 10.382647 && lunarDay <= 13.435442):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/26.png' alt='Waxing Gibbous' style='width:60px;height:60px;'>"
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Waxing Gibbous"
            break;
            // Full 31.png
        case (lunarDay > 13.435442 && lunarDay <= 15.435442):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/31.png' alt='Full' style='width:60px;height:60px;'>";
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Full"
            break;
            // wanning gibbous 37.png
        case (lunarDay > 15.435442 && lunarDay <= 18.147941):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/37.png' alt='Wanning Gibbous' style='width:60px;height:60px;'>";
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Wanning Gibbous"
            break;
            // wanning gibbous 39.png
        case (lunarDay > 18.147941 && lunarDay <= 21.147941):
                document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/39.png' alt='Wanning Gibbous' style='width:60px;height:60px;'>";
                document.getElementById("moon-phase").innerHTML = "Moon Phase: Wanning Gibbous"
                break;
            // third Quarter 41.png
        case (lunarDay > 21.147941 && lunarDay <= 23.147941):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/41.png' alt='Third Quarter' style='width:60px;height:60px;'>";
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Third Quarter"
            break;
            // wanning cresent 47.png
        case (lunarDay > 23.147941 && lunarDay <= 27.960300):
            document.getElementById("moon-image").innerHTML = "<img src='images/moon_phase/47.png' alt='Wanning Cresent' style='width:60px;height:60px;'>";
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Wanning Cresent"
            break;
        default:
            document.getElementById("moon-image").innerHTML = "<img src='images/site_images/warning.png'> Unfortunately, there has been an error.Please scream at the administrator!";
            document.getElementById("moon-phase").innerHTML = "Moon Phase: Error loading phase"
    }
    
    // document.getElementById("lunar-day").innerHTML = "Lunar Day = " + lunarDay + " Date Time = " + date_1

}
getPhases()
setInterval(getPhases, 1800000)



/* Moon phase
Lunar day
⠀🌑 New Moon	
0 < lunar day <= 1
⠀🌒 Waxing Crescent	
1 < lunar day <= 6.382647
⠀🌓 First Quarter	
6.382647 < lunar day <= 8.382647
⠀🌔 Waxing Gibbous	
8.382647 < lunar day <= 13.765294
⠀🌕 Full Moon	
13.765294 < lunar day <= 15.765294
⠀🌖 Waning Gibbous	
15.765294 < lunar day <= 21.147941
⠀🌗 Last Quarter	
21.147941 < lunar day <= 23.147941
⠀🌘 Waning Crescent	
23.147941 < lunar day <= 28.530588
⠀🌑 New Moon	
28.530588 < lunar day <= 29.530588 */

