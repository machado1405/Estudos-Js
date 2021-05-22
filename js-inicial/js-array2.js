// Arrays armazenam uma coleção de elementos.
// Estes podem ser strings, arrays, boolean
// number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baxudi', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kia';

console.log(carros.length)

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  length: 4,
}

const objArray = Array.from(obj);

console.log(li)
console.log(arrayLi)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[2][0].length)

instrumentos.sort();

const idades = [32,21,33,43,1,12,8];
idades.sort();

console.log(instrumentos)
console.log(idades)

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');
const novaArray = carros.push('Parati', 'Gol');

console.log(novaArray)

console.log(carros);

console.log(carros.shift())

console.log(carros);
console.log(carros.splice(2,4,'Fusca'))

console.log(carros);

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2));

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];


let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1')

console.log(htmlString)

const linguagens = ['html', 'css', 'js', 'php', 'python'];

const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop())
console.log(linguagens)
console.log(cloneLinguagens)

// CONTINUAÇÃO AULA ARRAY

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
const addUltimoValor = comidas.push('Arroz');
const addPrimeiroValor = comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana');
// Verifique se Juliana faz parte dos estudantes
estudantes.includes('Juliana');

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

// htmlli2 = htmlString2.join('li');
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice(); // Salva antes de fazer alterações
carros.pop();
console.log(carros);
console.log(carrosCopia);

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   array[index] = 'teste';
//   // console.log(array);
// });

// const li = document.querySelectorAll('li');

// li.forEach((item) => {
//   item.classList.add('ativo');
// });

// carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },

//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },

//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return 
// }, 0);

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual; // verifica se o anterior é mmaior que o atual, se for retorna o anterior, senao retorna o atual
// }, 0);

// console.log(maiorNumero);

// const frutas = ['Banana', 'Pera', 'Uva'];
// some se uma retornar true considera true, no every todas precisam ser true frutas.every();
// const temUva = frutas.some((item) => {
//   console.log(item);
//   return item === 'Uva';
// });

// console.log(temUva)

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);
const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});

// console.log(objetoCurso);

const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorNumero = numeros.filter(n => n > 100);
// console.log(maiorNumero);

const instrumento = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const verificaBaixo = instrumento.some((instrumento) => {
  return instrumento === 'Baixo';
});

// console.log(verificaBaixo);

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60',
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);