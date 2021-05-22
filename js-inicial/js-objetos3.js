// const pessoa = new Object({
//   nome: 'Matheus da Silva Machado',
// });

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' Acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro).init('Honda');
// const ferrari = Object.create(carro).init('Ferrari');

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou'
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carro = {
//   rodas: 4,
//   mala: true,
// }
// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: true, // false n consigo modificar
//     writable: true, // permite sobrescrever, originalmente configurable e writable começam false

//   }
// });

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4;
//     },
//   }
// });


function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
  }
  console.log(verificarDado([]));
  
  // Crie um objeto quadrado coma propriedade lados
  // e a torne imutavel
  
  const quadrado = {}
  
  Object.defineProperties(quadrado, {
    lados: {
      value: 4,
      enumerable: true,
    }
  });
  
  const configuracao = {
    width: 800,
    height: 600,
    background: '#333',
  }
  Object.freeze(configuracao)
  
  console.log(Object.getOwnPropertyNames(String.prototype));
  console.log(Object.getOwnPropertyNames(Array.prototype));