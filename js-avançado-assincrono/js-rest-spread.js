function perimetroForma(lado, totalLados = 4) {
    // console.log(arguments); //mostra os argumentos
    return lado * totalLados
}

perimetroForma(10, 4);

function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador} ganhou um ${premio}`);
    }) 
}
const ganhadores = ['Marcia', 'Pedro', 'Maria'];
anunciarGanhadores('Carro', ...ganhadores);

const frutas2 = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas2, 'pizza', ...legumes]

console.log(comidas);

const todosOsNumeros = [3, 4, 5, 12, 3, 3, 24, 2, 3, 4]
const numeroMaximo = Math.max(...todosOsNumeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
const btnArray = [...btns];

function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}

const redButton = createButton();
console.log(redButton);

const frutas = ['Banana', 'Uva', 'Morango'];
let comidas2 = ['Pizza', 'Batata'];

comidas2.push(...frutas);
console.log(comidas2);