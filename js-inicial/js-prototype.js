// Objetos
// Criar um objeto é simples, basta definirmos uma variável
// e iniciar a definição do seu valor com as chaves {}.

// Jeito errado
// const carro = {
//     marca: 'Marca',
//     preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

// function Carro() {
//   this.marca = "Marca";
//   this.preco = 2000;
// }

// const honda = new Carro();
// honda.preco = 20000;

// A palavra chave new é responsável por criar um novo objeto
// baseado na função que passarmos a frente dela.

// const honda = new Carro();
// // Cria um novo objeto
// honda = {};

// Define o protótipo
// honda.prototype = Carro.prototype;

// Aponta a variável this para o objeto
// this = honda;

// Executa a função, substituindo this pelo objeto
// honda.marca = 'Marca';
// honda.preco = 0;

// function Carro2 (marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
// }

// const mazda = new Carro2('Mazda', 5000);

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = document.querySelector(this.seletor);
//     elementoSelecionado.classList.add("ativar");
//   },
// };

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   }
//   this.ativar = function() {
//     this.element().classList.add('Ativar');
//   }
// };

// const li = new Dom('li');

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function() {
//     return this.nome + " andou";
//   };
// }

// const joao = new Pessoa("João", 20);
// const maria = new Pessoa("Maria", 25);
// const bruno = new Pessoa("Bruno", 15);

// function Dom(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.element = elementList;
//   this.addClass = function(classe) {
//     elementList.forEach((element) => {
//       element.classList.add(classe);
//     });
//   }
//   this.removeClass = function(classe) {
//     elementList.forEach((element) => {
//       element.classList.remove(classe);
//     });
//   }
// };

// const li = new Dom('li');

// Prototype, é um objeto adicionado a função quando a mesma é criada

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// const matheus = new Pessoa('Matheus', 25);
// console.log(Pessoa.prototype);
// console.log(matheus.prototype);

// É possível adicionar novas propriedades e métodos ao objeto prototype

// Pessoa.prototype.andar = function() {
//   return 'Pessoa andou';
// }

// Herança de protótipo
// o objeto possui acesso ao métodos e propriedades dp protótipo
// do construtor responsável por criar este objeto, o objeto abaixo
// possui acesso a métodos que nunca definimmos, mas são herdados do protótipo de Object.

// Object.prototype;
// matheus.toString();
// matheus.isPrototypeOf();
// matheus.valueOf();

// Construtores Nativos
// Objetos, funções, números, strings, e outros tipos de dados
// são criados utilizando construtores. Esses construtores possuem
// um protótipo com propriedades e métodos, que poderão ser acessadas
// pelo tipo de dado.

// const pais = 'Brasil';
// const cidade = new String('Rio');
// pais.charAt(0);
// cidade.charAt(0);
// String.prototype;

// É possível acessar a função do protótipo
// é comum principalmente em códigos mais antigos
// o uso direto de funções do protótipo do construtor Array

// const lista = document.querySelectorAll('li');

// transforma em uma array
// const listaArray = Array.prototype.slice.call(lista);

// Método do Objeto vc Protótipo
// Nos objetos nativos existem métodos linkados diretamente
// ao objeto e outros linkados ao protótipo

// Array.prototype.slice.call(lista);
// Array.from(lista);

// Retorna uma lista com os métodos / propriedades
// Apenas métodos do protótipo são herdados
// Object.getOwnPropertyNames(Array);
// Object.getOwnPropertyNames(Array.prototype);

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

// Pessoa.prototype.andar = function() {
//   return 'Pessoa andou';
// }

// function Pessoa(nome, sobrenome, idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function() {
//   return `${this.nome} ${this.sobrenome}`;
// }

// const matheus = new Pessoa("Matheus", "Machado", 25);