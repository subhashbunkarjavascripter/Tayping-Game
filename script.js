const words = ["Welcome","Hello", "web" ,"faster", "Mango","banana","orange"
    ,"grapes","sweet","Shamosa","Intersting","Weldone","congratulation"
]

let currentword
let score = 0
let time = 30
let isplaying = false

const word = document.querySelector("#word h1")
const input = document.querySelector("#input")
const scores = document.querySelector(".score h1")
const timer =document.querySelector(".timer h1")

function init(){
    showNewWord()
    input.addEventListener('input',checkInput)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}

function showNewWord(){
    const randomIndex = Math.floor(Math.random() * words.length)
    currentword = words[randomIndex]
    word.innerText = currentword
    input.value =""
}
function checkInput(){
    if(input.value === currentword){
        score++
        score.innerText = `Score:${score}`
        showNewWord()
        time = 30
    }
}
function countdown(){
     if(time > 0){
        time--
     } else if(time===0){
        isplaying =false
     }
     timer.innerText = `Time:${time}s`
}

function checkStatus(){
    if(!isplaying && time === 0){
        word.innerText = 'game over'
    }
}
init()