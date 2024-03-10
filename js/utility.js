// Lezione di oggi in classe

// let elTesto = document.getElementById('testo');

// let elColore = document.getElementById('colore');

// let elForma = document.getElementById('forma');

// let elButton = document.querySelector('.btn.btn-success');

// //console.log(elTesto, elColore, elForma, elButton);

// let elBox = document.querySelector('.box');

// //console.log(elBox);

// // Abbiamo preso tutto cio che ci serve dall html
// //Adesso aggiungiamo un event in questo caso click

// console.log(forma.classList);

// elButton.addEventListener('click' , function(){

//     //console.log('Hai cliccato il bottone');

//     let testo = elTesto.value;
//     let colore = elColore.value;
//     let forma = elForma.value;
//     console.log(testo, colore, forma);
//     let formaClass = (forma === 'circle') ? 'rounded-circle' : '';
//     //'rounded-circle'
//     // elBox.classList.add('bg-black');
//     // elBox.classList.remove('d-none');
//     elBox.innerHTML = testo;

//     //elBox.classList.toggle('bg-black'); prova
//     // elBox.className = '';
//     elBox.className = 'box' + colore + '' + formaClass; // ClassName viene usato così
//     // elBox.classList.add(colore);
//     // elBox.classList.remove('d-none');

// });

// //Aggiungiamo una funzione come secondo valore da passare a elButton


// 08/03
// Esercizio in classe - Quadrati Dinamici

// Creiamo un quadrato grande tipo scacchiera
// 10 quadrati per lato
// ognuno 80px
// Creare una griglia quadrata di 100 quadrati (10 + 10)
// Centrata in pagina con un numero progressivo al centro di ogni quadrato
// I quadrati avranno lo sfondo blu



// template quadratini - Esercizio svolto in classe

//<div id="boxes" class="d-flex justify-content-center align-content-center ">
            //<div class="box">

            //</div>
    //</div> 

//  const squareWrapper = document.createElement('div');

//  // consolidato che squareWrapper è un oggetto
//  squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap container'
//  // con className andiamo ad incollare le classi di html da Js
//  squareWrapper.setAttribute('id','boxes');
//  //console.dir(squareWrapper);

//  let numBox = 100; 
//  let tmpHtml = ''; //variabile preparata per contenere l'html

// // Facciamo un ciclo per stampare tutti i quadrati

//  for(let i = 0; i < numBox; i++){
//      tmpHtml += `<div class="box">${i + 1}</div>`;
//  }

//  squareWrapper.innerHTML = tmpHtml;
// // console.log(squareWrapper);

// // // mettiamo la griglia con i quadrati gia pronta tutta dentro la pagina html

//  const container = document.querySelector('.container');
//  container.append(squareWrapper);
