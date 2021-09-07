"use strict";
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
function counterdown() {
    let eventTimes = new Date("20 August 2021 09:00:00")
    let currentTimes = new Date();
    let totalTimes = eventTimes- currentTimes;
    let totalSeconds = Math.floor(totalTimes/1000);
    let totalMinutes = Math.floor(totalSeconds/60);
    let totalHours = Math.floor(totalMinutes/60);
    let totalDaysRemain = Math.floor(totalHours/24);
    let secondsRemain = totalSeconds%60;
    let minutesRemain = totalMinutes%60;
    let hoursRemain = totalHours%24;
    let addSeconds= secondsRemain<10?'0'+secondsRemain : secondsRemain;
    let addMinutes= minutesRemain<10?'0'+ minutesRemain : minutesRemain;
    let addHours = hoursRemain<10? '0'+hoursRemain : hoursRemain;

    days.innerHTML = totalDaysRemain;
    hours.innerHTML = hoursRemain;
    minutes.innerHTML = addMinutes;
    seconds.innerHTML = addSeconds;

    setInterval(counterdown,1000);
   
}

counterdown();