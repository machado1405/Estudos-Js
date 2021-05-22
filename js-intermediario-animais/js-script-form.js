const contato = document.querySelector('#contato');
const dados = {};
function handleChange(event) {
    const target = event.target;
    console.log(event.target.value);
    if (!target.checkValidity(event)) {
        target.classList.add('invalido');
        target.setCustomValidity('Você deve inserir um e-mail válido');
        target.nextElementSibling.innerText = target.validationMessage;
    }
    if (event.target.checked) {
        console.log(event.target.value);
    }
    document.body.style.backgroundColor = event.target.value;
    dados[event.target.name] = event.target.value;
}

contato.addEventListener('change', handleChange);