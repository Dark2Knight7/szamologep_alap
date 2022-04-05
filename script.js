/*
Csatolj JS fájlt a projekthez!

JS: Hozd létre az kiinduló függvényeket és eseménykezelőket (init fvény)

JS: A mintának megfelelően hozd létre a számjegyek bevitelét szolgáló billentyűzetet JS-sel a .szamok tárolóba! (10 db button, melyek felirata egy számjegy)

CSS: A gombok elhelyezését elvégezheted CSS-ben! (Javasolt: flexbox)

JS: Adj eseménykezelőt a gombokhoz! Ha a gombokra kattintunk, azoknak megfelelő értékek kerüljenek be le a kijelzőbe! (A számjegyek esetében ciklussal menj végig a gomb elemeken). 

JS: Ha műveleti jelre kattintunk, akkor az is kerüljön bele a kijelző tartalmába. A műveleti jelek eseménykezelőinek hozzáadását  nem kell ciklussal megoldani! Az eseménykezelőben mentsd el az aktuális műveleti jelet egy globális muvjel változóba.

A C gomb törölje a kijelzőt! és törölje a muvjel változó értékét.

+++Ha üres a kijelző, ne lehessen műveleti jelet beírni.

+++ Egyenlőségjel esetén splitteljük fel a kijelző tartalmát a muvjel mentén és végezzük el a műveletet, majd a művelet eredménye kerüljön a kijelzőbe. (tomb=valtozo.split(„+”) -> eredménye egy tömb,melynek egyes elemei a műveleti jel két oldalán lévő számok)
*/

window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  $("footer")[0].innerHTML = "Nguyen Duc Duy";

  for (let index = 0; index < 10; index++) {
    var gomb = $(".szamok")[0];
    gomb.innerHTML += "<button id='szam'>"+index+"</button>"
  }
}

