// const mes = 'Dezembro';

// mes = 'Janeiro'; //erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

// const data = {
//     dia: 28,
//     mes: 'Dezembro',
//     ano: 2018, 
// }

// data.dia = 29; // Funciona
// data = 'Janeiro' // Erro

// Const : mantém o escopo no bloco, impede a redeclaração
// e impede a modificação do valor da variável evitando bugs no código.

// Let : Mantém o escopo no bloco, impede a redeclaração
// mas permite a modificação do valor da variável.

{
    var cor = 'Preto';
    const marca = 'Fiat'; // Não funciona pois o console log esta fora do bloco e somente var eh global
    let portas = 4;
    console.log(cor, marca, portas);
}

const dois = 2;

function somarDois (x) {
    return x + dois;
}

function dividirDois (x) {
    return x / dois;
}

console.log(somarDois(2));
console.log(dividirDois(2));

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);