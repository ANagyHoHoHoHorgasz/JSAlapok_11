// =========================================================
// 1. LÉPÉS: Egyetlen elem megfogása ID alapján és írás bele
// =========================================================
const focimElem = document.getElementById('focim');
focimElem.textContent = 'Mátrix Rendszer';


// =========================================================
// 2. LÉPÉS: Elemek megfogása osztálynév alapján (getElementsByClassName)
// =========================================================
// Figyelem: Ez egy elemlistát (HTMLCollection) ad vissza!
const statuszElemek = document.getElementsByClassName('statusz-szoveg');

console.log('A talált státusz elemek száma:', statuszElemek.length);

// Az első elemet az [0] index-szel érjük el és írunk bele:
statuszElemek[0].textContent = 'Rendszer ellenőrzése folyamatban...';

// A második elemet a [1] index-szel érjük el:
statuszElemek[1].textContent = 'Kapcsolódás a hálózathoz...';


// =========================================================
// 3. LÉPÉS: Elemek megfogása CSS szelektorral (querySelectorAll)
// =========================================================
// Figyelem: Ez is egy listát (NodeList) ad vissza az összes illeszkedő elemről!
const listaElemek = document.querySelectorAll('.lista-elem');

// Kiolvassuk az első elem tartalmát a konzolra:
console.log('Első lista elem eredetileg:', listaElemek[0].textContent);

// Módosítjuk a második elem tartalmát:
listaElemek[1].textContent = 'Szerver állapot: ONLINE';


// =========================================================
// 4. LÉPÉS: Input mező, gomb megfogása és eseménykezelő (click)
// =========================================================
// Űrlapelem és gomb kijelölése querySelector-ral
const nevInput = document.querySelector('#jatekos-nev-input');
const inditoGomb = document.querySelector('#indito-gomb');
const eredmenyDiv = document.getElementById('eredmeny');

// Kattintás eseménykezelő rákötése a gombra
inditoGomb.addEventListener('click', () => {
  // A gomb feliratának kiolvasása:
  const gombSzovege = inditoGomb.textContent;
  
  // Az input mezőben lévő aktuális érték kiolvasása (.value):
  const jatekosNev = nevInput.value;

  // Kiírás az eredmény kijelzőbe:
  eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`;
});