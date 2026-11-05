let focim = document.getElementById("focim")
focim.textContent="Mátrix rendszer"
let statuszElemek = document.getElementsByClassName("statusz-szoveg")
console.log(statuszElemek.length)
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."
let listaElemek = document.querySelectorAll(".lista-elem")
console.log(listaElemek[0].textContent)
listaElemek[1].textContent = "Szerver állapot: ONLINE"
let nevInput = document.querySelector("#jatekos-nev-input")
let inditoGomb = document.querySelector("#indito-gomb")
let eredmenyDiv = document.getElementById("eredmeny")

inditoGomb.addEventListener("click", function () {
    let gombSzovege = inditoGomb.textContent
    let jatekosNev = nevInput.value
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`
})
