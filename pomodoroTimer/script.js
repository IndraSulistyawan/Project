
const display = document.getElementById("display")

const pauseButton = document.getElementById("pause")

let myInterval
let intervalRunning = false
let time = 1500 //25 minutes
let minutes
let seconds


document.getElementById("start").addEventListener("click", () => {
    console.log("continue")
    if(!intervalRunning){
        myInterval = setInterval(()=>{
            time--
            minutes = Math.floor(time / 60)
            seconds = time % 60
            console.log(`${time}, ${minutes} : ${seconds}`)
            display.innerHTML = `${minutes} : ${seconds}`
            if(time === 0){
                clearInterval(myInterval)
                intervalRunning = false
            }
        }, 1000)
        intervalRunning = true
    }
})

pauseButton.addEventListener("click", () => {
    if(intervalRunning){
        clearInterval(myInterval)
        console.log("pause")
        intervalRunning = false
    }
})



