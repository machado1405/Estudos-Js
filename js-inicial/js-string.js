// Native
// Objetos nativos são aqueles definidos na especificação da
// linguagem e são implementados independente do host.

// Host
// Objets do host são aqueles implementados pelo próprio ambiente.
// Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros.
// Em node.js os objetos do Host são diferentes
// já que não estamos em um ambiente de browser.

// User
// Objetos do user, são os objetos definidos pelo seu aplicativo.
// Ou seja, qualquer objeto que você criar ou que importar de
// alguma biblioteca externa.

// Bibliotecas
// Bibliotecas como o jQuery foram criadas para resolver o problema de inconsistências
// entre browsers e adicionar funcionalidades que não existiam
// nativamente. A padronização dos browsers e a implementação de soluções nativas.
// torna as mesmas obsoletas.

// API
// Application Programming Interface, é uma interface de software
// criada para a interação com outros softwares.
// Ou seja, toda interação que fazemos com o browser utilizando
// objetos, métodos e propriedades, estamos na verdade
// interagindo com a API do browser.

// 5 objetos nativos
// Object, String, Array, Function, number

// window, history, document, HTMLCollection, NodeList

// const frase = "A melhor linguagem é ";
// const linguagem = "JavaScript ";
// const teste = "Sei não eim";
// const fraseFinal = frase.concat(linguagem, teste);

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// listaFrutas.includes(fruta);

// console.log(fruta.startsWith('Ba'));
// console.log(fruta.startsWith('ba'));
// console.log(fruta.endsWith('Na'));
// console.log(fruta.endsWith('na'));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, "."));
// });

listaPrecos[0].padStart(10, ".");
listaPrecos[0].padEnd(10, ".");

// str.replace
// Troca parta da string por outra. Podemos utilizar uma regular
// expression ou um valor direto. Se usarmos um valor direto ele
// irá trocar apenas o primeiro valor que encontrar.

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
let preco = "R$ 1200,43";
preco = preco.replace(",", ".");

const arrayItens = listaItens.split(", ");
const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", ""); // + converte string em numero
  const taxa = item.descricao.startsWith("Taxa");
  if (taxa) {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(`Taxa total de: ${taxaTotal} reais`);
console.log(`Recebimento total de: ${recebimentoTotal} reais`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;

transacoes2.forEach((item) => {
  item = item.toLowerCase().trim();
  if (item.startsWith('taxa')) {
    taxasTotal++;
  }
});
console.log(taxasTotal);