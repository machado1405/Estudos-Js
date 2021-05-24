const json = fetch('./dados.json');
json.then(resolve => {
    resolve.json().then(body => {
        body.forEach((materia) => {
            materia;
        });
    });
});

fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
    const jsonFinal = JSON.parse(jsonText)
    // console.log(jsonFinal);
});

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

localStorage.config = JSON.stringify(configuracoes);
const localConvertido = JSON.parse(localStorage.config);
console.log(localConvertido);

