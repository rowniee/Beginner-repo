function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'Pm' : 'Am';
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.querySelector("#day").textContent = dayNames[dayNumber];
    document.querySelector("#hour").textContent = hour;
    document.querySelector("#minute").textContent = minute;
    document.querySelector("#ampm").textContent = ampm;

    setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime);
