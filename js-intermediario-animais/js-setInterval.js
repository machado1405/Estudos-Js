// function espera(texto) {
//     console.log(texto);
// }

// setTimeout(espera, 1000, 'Testando timeout');
// setTimeout(function () {
//     console.log('testando');
// }, 1000);

// Não espera o loop acabar, precisa multiplicar pelo i 
// for (let i = 0; i < 20; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

// const botao = document.querySelector('button');

// botao.addEventListener('click', handleClick);

// function handleClick() {
//     setTimeout(() => {
//         this.classList.toggle('active');
//     }, 1000);
// }

// function loop(texto) {
//     console.log(texto);
// }

// setInterval(loop, 300, '300ms');

// let i = 0;
// const meuLoop = setInterval(() => {
//     console.log(i++);
//     if (i > 20) {
//         clearInterval(meuLoop);
//     }
// }, 300);

// const mudarCor = document.querySelector('body');


// let i = 0;

// const meuLoop = setInterval(() => {
//     mudarCor.classList.toggle('azul');
// }, 2000);

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');;
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}


