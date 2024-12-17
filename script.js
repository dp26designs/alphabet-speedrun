// blue #3b4069;
// gray #ece0d5;
 // gray blue#f0f3eb;
// red orange #ff593e;
let letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  
  let minutes = 0
  let seconds = 0
  let milliseconds = 0
  let appendMinutes = document.querySelector("#minutes")
  let appendSeconds = document.querySelector("#seconds")
  let appendMilliseconds = document.querySelector("#milliseconds")
  
  let Interval
  
  let letterColor = document.getElementById("letter")
  
  let endScreen = document.getElementById("endScreen")
  
  function startTimer() {
    milliseconds++
    if (milliseconds <= 9) {
      appendMilliseconds.innerHTML = "0" + milliseconds
    }
  
    if (milliseconds > 9) {
      appendMilliseconds.innerHTML = milliseconds
    }
  
    if (milliseconds > 99) {
      seconds++
      appendSeconds.innerHTML = "0" + seconds
      milliseconds = 0
      appendMilliseconds.innerHTML = "0" + 0
    }
  
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds
    }
  
    if (seconds > 59) {
      minutes++
      appendMinutes.innerHTML = "0" + minutes
      seconds = 0
      appendSeconds.innerHTML = "0" + 0
    }
  }
  window.addEventListener("keydown", () => {
    if (letter[0] === "a" && event.key === letter[0]) {
      clearInterval(Interval)
      milliseconds = "00"
      seconds = "00"
      minutes = "00"
      appendMilliseconds.innerHTML = milliseconds
      appendSeconds.innerHTML = seconds
      appendMinutes.innerHTML = minutes
  
      Interval = setInterval(startTimer, 10)
      letter.push(letter.shift())
      document.getElementById("letter").innerHTML = letter[0]
      
        letterColor.style.color = "white"
    } else if (letter[0] !== "z" && event.key === letter[0]) {
      letter.push(letter.shift())
      document.getElementById("letter").innerHTML = letter[0]
  
      letterColor.style.color = "white"
    } else if (letter[0] === "z" && event.key === letter[0]) {
      letter.push(letter.shift())
      document.getElementById("letter").innerHTML = letter[0]
  
      clearInterval(Interval)
  
          document.getElementById("endTime").innerHTML = appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendMilliseconds.innerHTML
   
  
      endScreen.style.display = "block"
      
    } else {
      letterColor.style.color = "#ff593e"
    }
  })
  
  function restart() {
    letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]
    document.getElementById("letter").innerHTML = letter[0]
  
    letterColor.style.color = "white"
  
    clearInterval(Interval)
    milliseconds = "00"
    seconds = "00"
    minutes = "00"
    appendMilliseconds.innerHTML = milliseconds
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
  }
  
  function retry() {
      endScreen.style.display = "none"
  letterColor.style.color = "white"
   clearInterval(Interval)
    milliseconds = "00"
    seconds = "00"
    minutes = "00"
    appendMilliseconds.innerHTML = milliseconds
    appendSeconds.innerHTML = seconds
    appendMinutes.innerHTML = minutes
  }