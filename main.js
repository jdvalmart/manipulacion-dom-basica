const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado =document.querySelector('#resultado');
const form = document.querySelector('#form');

// forma de escuchar por medio de submit
//form.addEventListener('submit', sumarInputs );

// function sumarInputs(event) {
//     event.preventDefault()
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);

//     pResultado.innerText = "resultado : " + sumaInputs;
// }

// forma de escuchar por medio de click
form.addEventListener('click', sumarInputs );

function sumarInputs() {
    
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);

    pResultado.innerText = "resultado : " + sumaInputs;
}

