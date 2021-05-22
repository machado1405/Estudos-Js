// const cep = fetch('https://viacep.com.br/ws/84070066/json/'); // usar http ou https no inicio
// cep.then(resolucao => {
//     const r2 = resolucao.clone();
//     r2.json().then((json) => {
//         // console.log(json);
//     });
//     resolucao.text().then((body) => {         
//         const conteudo = document.querySelector('.conteudo');
//         conteudo.innerText = body.logradouro;
//         // console.log(body);
//     });
// });

// const bg = fetch('./css/estilo.css');
// bg.then(resolucao => {
//     resolucao.text().then((body) => {
//         const conteudo = document.querySelector('.conteudo');
//         const style = document.createElement('style');
//         style.innerHTML = body;
//         // conteudo.appendChild(style);
//         console.log();
//     });
// });

// const div = document.createElement('div');
// const html = fetch('./sobre.html');
// html.then(resolucao => {
//     resolucao.text().then((body) => {
//         div.innerHTML = body;
//         const titulo = div.querySelector('h1');
//         const texto = div.querySelector('p');
//         document.querySelector('h1').innerText = titulo.innerText;
//         document.querySelector('p').innerText = texto.innerText;
//     });
// });

// const img = fetch('./imagens/img-teste.png');
// img.then(resolucao => {
//     resolucao.blob().then((body) => {
//         const blobUrl = URL.createObjectURL(body);
//         const imagemDom = document.querySelector('img');
//         imagemDom.src = blobUrl;
//     });
// });

// const doc = fetch('./doc.txt');
// doc.then(response => {
//     // response.headers.forEach(console.log);
//     if (response.status === 404) {
//         console.log('Não existe a página');
//     } else if (response.status === 200) {
//         console.log('Requisição feita com sucesso');
//     }
// });



// EXERCÍCIOS
// Buscar CEP usando a API do viacep.com.br
const inputCep = document.querySelector('#cep');
const btnBuscar = document.querySelector('#btnBuscar');
const textArea = document.querySelector('#endereco');

function buscarCep(event) {
    event.preventDefault();
    const cepDigitado = inputCep.value;
    const validaCep = fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
    validaCep.then(resolucao => {
        resolucao.text().then((body) => {
            textArea.innerText = body;
        });
    });
}

btnBuscar.addEventListener('click', buscarCep);

// Retornar o valor da bitcoin em reais atualizando a cada 30s API blockchain.info/ticker
const texto = document.querySelector('[data-bitcoin="preco-bitcoin"]');

function fetchBtc() {
    const valorBitCoin = fetch('https://blockchain.info/ticker');
    valorBitCoin.then(resolucao => {
        resolucao.json().then((body) => {
            const precoAtt = (' R$ ' + body.BRL.buy).replace('.', ',');
            texto.innerText = `Preço atualizado de compra bitcoin = ${precoAtt}`;
        });
    });
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// API api.chucknorris.io/jokes/random retornar uma piada randomica ao clicar em proxima

const divPiadas = document.querySelector('#piadas');
const btnProxima = document.querySelector('#btnProxima');

function mudaPiada() {
    const piadasApi = fetch('https://api.chucknorris.io/jokes/random');
    piadasApi.then(resolucao => {
        resolucao.json().then(body => {
            divPiadas.innerText = body.value;
        });
    });
}

btnProxima.addEventListener('click', mudaPiada);
