let countdown = document.getElementById("countdown")
let timeLeft = 600 //10 x 60 seconds

function timer() {
    timeLeft -= 1 //start = 600, 1 second = 599, 2 seconds = 598, ..., 10 minutes =0
    let minute = Math.floor(timeLeft / 60)
    let second = timeLeft % 60
    let displayMinute = minute<10 ? "0"+minute : minute
    let displaySecond = second<10 ? "0"+second : second
    countdown.textContent = displayMinute + ":" + displaySecond
    if (timeLeft == 0){
        clearInterval(clear)
    }
}
let clear = setInterval(timer, 1000)

let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")
let saveScoreHome = 0
let saveScoreGuest = 0

function plusOneHome() {
    scoreHome.textContent = saveScoreHome + 1
    saveScoreHome += 1
}

function plusTwoHome() {
    scoreHome.textContent = saveScoreHome + 2
    saveScoreHome += 2
}

function plusThreeHome() {
    scoreHome.textContent = saveScoreHome + 3
    saveScoreHome += 3
}

function plusOneGuest() {
    scoreGuest.textContent = saveScoreGuest + 1
    saveScoreGuest += 1
}

function plusTwoGuest() {
    scoreGuest.textContent = saveScoreGuest + 2
    saveScoreGuest += 2
}

function plusThreeGuest() {
    scoreGuest.textContent = saveScoreGuest + 3
    saveScoreGuest += 3
}