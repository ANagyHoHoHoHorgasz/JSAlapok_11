let aidaBTN = document.getElementById("aida-btn")
let danteBTN = document.getElementById("dante-btn")
let viktorBTN = document.getElementById("viktor-btn")
let kNev = ""
let kEletero = ""

aidaBTN.addEventListener("click", function () {
    console.log("Aida")
    kNev = document.querySelector("#card-aida .char-name").innerHTML
    kEletero = document.querySelector("#card-aida .char-hp").innerHTML
    kivalasztottKarakter()
})
danteBTN.addEventListener("click", function () {
    console.log("Dante")
    kNev = document.querySelector("#card-dante .char-name").innerHTML
    kEletero = document.querySelector("#card-dante .char-hp").innerHTML
    kivalasztottKarakter()
})
viktorBTN.addEventListener("click", function () {
    console.log("Viktor")
    kNev = document.querySelector("#card-viktor .char-name").innerHTML
    kEletero = document.querySelector("#card-viktor .char-hp").innerHTML
    kivalasztottKarakter()
})


function kivalasztottKarakter() {
    /* megfogjuk a karakterlapot */
    let karakterlapElem = document.getElementById("sheet-content")
    console.log(karakterlapElem)
    karakterlapElem.innerHTML = `
        <div class="character-card">
          <h3 class="char-name">${kNev}</h3>
          <p>Életerő: <span class="char-hp">${kEletero}</span> HP</p>
       
        </div>
`
}