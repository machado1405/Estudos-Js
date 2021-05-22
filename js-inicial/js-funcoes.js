function verdadeiro(valor) {
    return !!valor;
}

function perimetoQuadrado (lado) {
    return lado + lado + lado + lado;
}

function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

function parOuImpar (numero) {
    var modulo = numero % 2;
    if (modulo != 0){
        return 'ímpar';
    }else {
        return 'par';
    }
}


function tipoDeDado (dado) {
    return typeof dado;
}

addEventListener('click', function() {
    console.log('Matheus Machado');
})

var totalPaises = 193;

function precisoVisitar (paisesVisitados){  
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// function darOi() {
//   console.log('oi');
// }

// darOi.call();

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano + velocidade);
// };

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach.call((item) => {
//   console.log(item);
// });

// function Dom(seletor){
//   this.element = document.querySelectorAll(seletor);
// };
// Dom.prototype.ativo = function (classe){
//   this.element.classList.add(classe);
// };
// const ul = new Dom('ul');

// const li = document.querySelectorAll('li');
// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains('ativo');
// });
// console.log(filtro);

// const carro = {
//   marca : 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`
//   }
// }

// const honda = {
//   marca: 'Honda'
// }

// const acelerarHonda = carro.acelerar.bind(honda);
// console.log(acelerarHonda(320, 20));

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;

  return elemento;
}

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo'); // cria automaticamente o h1 com a classe titulo
console.log(h1Titulo('cursos de java script'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

// function criarH1(tag, conteudo) {
//   const elemento = document.createElement(tag);
//   if(tag === 'h1') {
//     elemento.classList.add('titulo');
//   }else {
//     console.log('adicione a tag h1');
//   }
//   conteudo ? elemento.innerHTML = conteudo : null;
//   return elemento;
// }


