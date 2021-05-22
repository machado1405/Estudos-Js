var dadosPessoais = {
    nome : 'Matheus',
    sobrenome : 'Machado',
    idade : 25,
    profissao : 'Desenvolvedor front end',
}

//console.log(dadosPessoais.nome + ' ' + dadosPessoais.sobrenome);

dadosPessoais.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dadosPessoais.nomeCompleto());

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa == 'Homem') {
            return 'Labrador latindo'
        }else {
            return 'Labrador em silêncio'
        }
    }
}

console.log(cachorro.latir('homem'));