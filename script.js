var btnR = document.getElementById("btnR");
var red = document.getElementById("red");
var btnL = document.getElementById("btnL");
var btnD = document.getElementById("btnD");
var btnU = document.getElementById("btnU");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");

btnR.onclick = moveRight

function moveRight () {
    if((red.offsetLeft + red.clientWidth)<(yellow.clientWidth)) {
        var leftActualPosition = red.offsetLeft;
        red.style.left = leftActualPosition + 40 + "px";
        console.log(red.offsetLeft);
    } 
    // if(red.offsetTop >= 160 && red.offsetTop <= 240) {
//tu dat vynimku na vychod cez modry obdlznik 
    // }
};

btnL.onclick = moveLeft

function moveLeft () {
    if(red.offsetLeft>0) {
        var leftActualPosition = red.offsetLeft;
        red.style.left = leftActualPosition - 40 + "px";
        console.log(red.offsetLeft);
    }
};

btnD.onclick = moveDown

function moveDown () {
    if((red.offsetTop + red.clientHeight) < (yellow.clientHeight)) {
        var topActualPosition = red.offsetTop;
        red.style.top = topActualPosition + 40 + "px";
        console.log(red.offsetTop);
    }
};

btnU.onclick = moveUp

function moveUp () {
    if(red.offsetTop > 0) {
        var topActualPosition = red.offsetTop;
        red.style.top = topActualPosition - 40 + "px";
        console.log(red.offsetTop);
    }
};











// FOR LOOP


// for (i=10; i <= 100; i++ ) {
//     if (i%2 == 0) {
//         // System.out.print(i + " ");
//         console.log("Hodnota i je teraz"+ i);
//     }

//     };

// for (var i=0, i <= 10, i++ ) {
//     if (i%2 == 0) {
//         // System.out.print(i + " ");
//         console.log("Hodnota i je teraz"+ i);
//     }

    
// };

//WHILE LOOP - while sa vykona len ked je splnena podmienka

// var i = 10;
// while (i <= 100 ) {
//     if (i%2 == 0) {
//         console.log("Hodnota i je teraz "+ i);
        
//     }
//     i++;

// };
// //zadanie c 2
// var i = 0;
// while ()


// //do while cyklus - vykona sa vzdy aspon raz - nema sa pouzivat

// do{
//     console.log();
//     i++;
// } while (i<10)


//  BREAK PRERUSENIE CYKLU - MOC SA NEPOUZIVA - PRERUSI CYKLUS A VYJDE VON Z CYKLU
// CONTINUE - PRI SPLNENI PODMIENKY PRESKOCI DANY KROK A POKRACCUJE INKREMENTOVANIM

// ERRORS - 