let timerEl = document.getElementById('timer-el')
let startBtn = document.getElementById('start-btn')
let stopBtn = document.getElementById('stop-btn')
let resetBtn = document.getElementById('reset-btn')
let timeIsStop = true
let sec = 0
let min = 0
let hour = 0
let currentTime = '00:00:00'
timerEl.innerHTML = currentTime

startBtn.addEventListener('click', function() {
    if(timeIsStop === true) {
        timeIsStop = false
        timerCycle()
    }  
})

stopBtn.addEventListener('click', function() {
    if(timeIsStop === false) {
        timeIsStop = true
    }
})

function timerCycle() {
    if(timeIsStop === false) {
        sec = parseInt(sec)
        min = parseInt(min)
        hour = parseInt(hour)

        sec += 1

        if(sec === 60) {
            min += 1
            sec = 0
        }

        if(min === 60) {
            hour += 1
            min = 0
        }

        if(sec < 10) {
            sec = '0' + sec
        }

        if(min < 10) {
            min = '0' + min
        }

        if(hour < 10) {
            hour = '0' + hour
        }

        timerEl.innerText = hour + ':' + min + ':' + sec

        setTimeout("timerCycle()", 1000)
    }

}

resetBtn.addEventListener('click', function() {
    timeIsStop === true
    timerEl.innerText = '00:00:00'
    sec = 0
    min = 0
    hour = 0
})