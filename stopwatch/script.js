const timerContainer = document.getElementsByClassName('timerContainer')[0]
const timerDisplay = document.getElementsByClassName('timerDisplay')[0]
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId
let hrs = 0
let mins = 0
let secs = 0

startBtn.addEventListener('click', () => {
    if(paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime, 1000) 
    }
})

pauseBtn.addEventListener('click', () => {
    if(!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})
resetBtn.addEventListener('click', () => {
    paused = true
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    timerDisplay.textContent = '00:00:00'
  
})
function updateTime(){
    elapsedTime = Date.now() - startTime
    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs  = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)
    timerDisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : ("0" + unit)
    }
}



// Store sessions 
// Unguided projects 