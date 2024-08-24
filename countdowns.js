document.getElementById('startButton').addEventListener('click', function() {
    // Show the timer containers
    document.querySelectorAll('.timer-container').forEach(container => {
        container.style.display = 'block';
    });

    // Start countdowns
    startCountdown('timer1', 'Forecast spawns in', 477);
    startCountdown('timer2', 'bunker opens in', 673);
    startCountdown('timer3', 'island spawns in', 865);
});

function startCountdown(timerId, message, duration) {
    let timerElement = document.getElementById(timerId);
    let timeLeft = duration;

    // Set the initial message and time
    timerElement.textContent = `${message} ${timeLeft}`;

    let countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = `${message} Time's up!`;
        } else {
            timeLeft--;
            timerElement.textContent = `${message} ${timeLeft}`;
        }
    }, 1000);
}
