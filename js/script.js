    // Creiamo il nostro wrapper - quadrati

    let wrapper = document.createElement('div');
    wrapper.className = ('d-flex justify-content-center align-content-center flex-wrap container'); 
    wrapper.setAttribute('id', 'boxes');

    // console.log(wrapper);

    let num100 = 100;

    //Creiamo una variabile a cui associeremo i quadratini

    let tmpHtml = ''; 

    // Eseguiamo un ciclo 'for' e calcoliamo tutti i multipli che ci sono stati richiesti

    //  Contatore - Condizione - Incremento
     for (let i = 1; i <= num100; i++) {

            
         if (i % 3 === 0 && i % 5 === 0) {


    // Adesso tramite i backtick scriviamo nel quadrato fizzbuzz (esclusivamente i multipli di 3 e 5)

            tmpHtml += `<div class="box">${'fizzBuzz'}</div>`;

            console.log("fizzBuzz");

            // E così via...

         } else if (i % 3 === 0) {

            tmpHtml += `<div class="box">${'fizz'}</div>`;
            
            console.log("fizz");

         } else if (i % 5 === 0) {
             
            tmpHtml += `<div class="box">${'buzz'}</div>`;
            
            console.log("buzz");

         } else {

            tmpHtml += `<div class="box">${i + 0}</div>`;

            console.log(i);
         }

    }

    
    // Associamo il nostro wrapper al ciclo 'for' che abbiamo eseguito

    wrapper.innerHTML = tmpHtml;

    console.log(wrapper);

    // Andiamo ad utilizzare append per restituire graficamente ciò che abbiamo scritto

    let container = document.querySelector('.container');
    container.append(wrapper);
    //  console.log(container);
    
