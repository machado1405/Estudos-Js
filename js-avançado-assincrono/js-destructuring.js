const carro = {
    marca: 'Honda',
    ano: 2018,
}

const {marca, ano} = carro;

const cliente = {
    nome: 'Matheus',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1'],
        }
    }
}

const {livros, videos} = cliente.compras.digitais;
const {cadernos} = cliente.compras.fisicas;

const frutas = ['Banana', 'Uva', 'Morango']

const [primeira, segunda, terceira] = frutas;

// function handleKeyboard({key, keyCode}) {
//     console.log(key, keyCode);
// }

// document.addEventListener('keyup', handleKeyboard);

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles

// console.log(backgroundColor);
// console.log(margin);
// console.log(color);

let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo',
}

const {nome, raca, cor} = cachorro;

// console.log(nome);
// console.log(raca);
// console.log(cor);