var pessoa = {
    nome: 'Matheus',
    idade: 25,
    profissao: 'Desenvolvedor Front end',
    possuiFaculdade: true,
}

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.lados);
console.log('A área do quadrado é de : ' + quadrado.area(5) + ' metros quadrados');
console.log(quadrado.perimetro(5));

console.log(Math.PI);
console.log(Math.random() * 100);