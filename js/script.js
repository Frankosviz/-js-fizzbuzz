// Creiamo dei cicli 'for' per conoscere i multipli dei numeri che ci servono

// Assegniamo un valore iniziale alla nostra variabile per far partire il ciclo

    // let numeri1a100 = 1;

    // //    - Contatore       - Condizione       - Incremento       

    // for (let numeri1a100 = 1; numeri1a100 <= 100; numeri1a100++) {
    //     //console.log(numeri1a100);
    // }

    
    // let multipli3 = 3;

    // //    - Contatore       - Condizione       - Incremento

    // for (let multipli3 = 3; multipli3 <= 99; multipli3 += 3) {
    //     //console.log(multipli3);
    // }

    // E così via...


    // let multipli5 = 5;

    // for (let multipli5 = 5; multipli5 <= 95; multipli5 += 5) {
    //     //console.log(multipli5);
    // }
    // let multipli3e5 = 15;

    // for (let multipli3e5 = 15; multipli3e5 <= 75; multipli3e5 += 15) {
    //     //console.log(multipli3e5);
    // }

    // Adesso che abbiamo i nostri multipli sottoforma di variabili, impostiamo html e css 

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
            // let divIndent = document.getElementById("boxes");
            // console.dir(divIndent);
            // let newDiv = document.createElement("div");
            // console.log(newDiv);
         if (i % 3 === 0 && i % 5 === 0) {

            tmpHtml += `<div class="box">${'fizzBuzz'}</div>`;

            console.log("fizzBuzz");

            let newDiv = document.createElement("div");
            console.log(newDiv);

            newDiv.classList.add("fizzbuzz");

            outputDiv.appendChild(newDiv);

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
    
