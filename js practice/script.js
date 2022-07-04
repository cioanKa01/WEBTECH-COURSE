"use strict";

function currentTime() {
    var currentDate = new Date();
    /* document.getElementById("resultDiv").innerHTML = ("The time is " + currentDate.getHours() + ":" +
          currentDate.getMinutes() + ":" + currentDate.getSeconds());*/

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();


    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("resultDiv").innerHTML = ("The time is " + hours + ":" +
        minutes + ":" + seconds);


}

function Today() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("resultDiv").innerHTML = ("Today is :  " + n);


}


var nr = 0;

function clickMe() {
    nr++;
    document.getElementById("resultDiv").innerHTML = ("I have been double-clicked " + nr + " times");
}


function theSum() {
    var x = document.getElementById("sumNum").value;
    var s = 0;
    for (var i = 0; i <= x; i++) {
        s = s + i;
    }
    document.getElementById("resultDiv").innerHTML = ("The sum is " + s);
}