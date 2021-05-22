// window.alert('Este é um teste');
// alert('Este é um teste'); funciona

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log('Clicou em ', h1Selecionado);
}

h1Selecionado.addEventListener('click', callbackh1);

console.log(document.location.href); // retorna url da página

const ativo = document.querySelector('.ativo'); // seleciona o a primeira classe para selecionar todas igual usar querySelctorAll

const linguagem = navigator.language;
console.log(linguagem);

const larguraTela = window.innerWidth;
console.log(larguraTela);