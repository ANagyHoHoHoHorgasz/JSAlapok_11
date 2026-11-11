let characterSelected = document.getElementsByClassName("placeholder-text")
let names = document.querySelectorAll(".char-name")
let hps = document.querySelectorAll(".char-hp")
console.log(names[0].textContent, names[1].textContent, names[2].textContent)
console.log(hps[0].textContent, hps[1].textContent, hps[2].textContent)

/* let aidaButton = document.getElementById("aida-btn")


function aidaAtrako(){
    characterSelected[0].textContent=names[0].textContent + hps[0].textContent
    console.log("genny")   
}

let danteButton = document.getElementById("dante-btn")
danteButton.addEventListener("click", danteAtrako)

function danteAtrako(){
    characterSelected[0].textContent=names[1].textContent + hps[1].textContent
    console.log("genny")   
}

let viktorButton = document.getElementById("viktor-btn")
viktorButton.addEventListener("click", viktorAtrako)

function viktorAtrako(){
    characterSelected[0].textContent=names[2].textContent + hps[2].textContent
    console.log("genny")
} */


let button = document.querySelectorAll("button")


for (let index = 0; index < button.length; index++) {
   button[index].addEventListener("click", atrako)
console.log(index)
function atrako(){
    characterSelected[0].textContent=names[index].textContent + hps[index].textContent
    console.log("genny")   
}

    
}

