const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
    console.log(fruta);
};

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
    btn.style.color = 'white';
};

const carro = {
    marca: 'Honda',
    ano: 2018,
}

for(const propriedade in carro) {
    console.log(propriedade, carro[propriedade]);
};

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

// for(const style of btnStyles) {
//     console.log(`${style}: ${btnStyles[style]}`);
// };

// let i = 0;
// do {
//     console.log(i++);
// } while (i <= 5);


const items = document.querySelectorAll('li');
for(const item of items) {
    item.classList.add('ativo');
    console.log(item);
};

for(const windowKey in window) {
    console.log(`${windowKey}: ${window[windowKey]}`);
};
