const player = require("play-sound")();

// Function to play the alert sound

function playAlertSound() {
    // Replace 'alert.mp3' with the path to your sound file
    player.play("./tornado-sirens.mp3", (err) => {
        if (err) console.log("Error playing sound:", err);
    });
}

//playAlertSound();

// Function to check the time and play alert if it's a new hour
function checkAndAlert() {
    const now = new Date();
    const currentHour = now.getHours();

    // Play alert if it's a new hour
    if (currentHour !== checkAndAlert.lastHour) {
        playAlertSound();
        checkAndAlert.lastHour = currentHour;
    }
}

// Set the duration for which the alerts will run (in minutes)
const durationInMinutes = 180; // Change this value as needed

// Set interval to check and alert every minute
const intervalId = setInterval(checkAndAlert, 5000);

// Set timeout to stop the alerts after the specified duration
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Alerts stopped after the specified duration.");
}, durationInMinutes * 60 * 1000);

