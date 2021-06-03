// FUNCTION DECLARATION

function somar1(a, b) {
    return a + b;
}

const somar2 = (a, b) => {
    return a + b;
}

const somar3 = (a, b) => a + b;

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// ESCOPADA
(function() {
    const nome = 'Matheus'
})();


const active = callback => callback();

active(() => {
    console.log('testando active');
})