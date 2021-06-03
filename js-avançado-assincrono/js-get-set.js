// function Button(text, background) {
//     this.text = text;
//     this.background = background;
// }

// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// };

// class Button {
//     constructor(text, background, color) {
//         this.text = text;
//         this.background = background;
//         this.color = color;
//     }
//     element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = this.text;
//         buttonElement.style.background = this.background;
//         buttonElement.style.color = this.color;
//         return buttonElement;
//     }
//     appendTo(target) {
//         const targetElement = document.querySelector(target);
//         targetElement.appendChild(this.element());
//         return targetElement;
//     }
//     static blueButton(text) {
//         return new Button(text, 'blue', 'white');
//     }
// }

// const blueButton = new Button('Comprar', 'blue', 'white');
// const botaoAzul = Button.blueButton();

// console.log(blueButton.appendTo('body'));

// class Button {
//     constructor(options) {
//         this.options = options
//     }
//     static createButton(text, background) {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         buttonElement.style.background = background;
//         return buttonElement;
//     }
// }

// const blueButton = new Button({
//     backGroudColor: 'blue',
//     text: 'Comprar',
//     color: 'White',
// });

// const blueButtonStatic = Button.createButton('clique', 'blue');

const button = {
    get tamanho() {
        return this._numero || 100;
    },
    set tamanho(numero) {
        this._numero = numero;
    }
}

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const blueButton = new Button('Logar', 'blue');