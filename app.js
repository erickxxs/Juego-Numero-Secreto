let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    intentos++;
    let numeroDEUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDEUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDEUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
    }else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    limpiarCaja();
    return;
}
function condicionesIniciales () {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Inserta un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function reiniciarJuego () {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados);
    console.log(numerosSorteados.length);

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
condicionesIniciales();