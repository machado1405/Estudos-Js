function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        text,
        element,
    }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

function Pessoa(nome) {
    if (!(this instanceof Pessoa)) { // ou (!new.target)
        return new Pessoa(nome);
    }
    this.nome = nome;
}

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`
}

const designer = Pessoa('Matheus');

function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);
    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return $$(selectedElements);
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
    }
    
    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
};

const btns = $$('button');

// console.log(btns.hide());
// console.log(btns.show());

function handleClick(event) {
    console.log(event.target);
}

btns.on('click', handleClick);
btns.addClass('active', handleClick);