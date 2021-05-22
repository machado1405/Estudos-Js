var numero = 20;
var numero2 = 10;

numero += numero2; // += -= /= *=
console.log(numero);
console.log(numero2);

var idade = 16;

var podeBeber = idade >= 18 ? 'Pode Beber' : 'Não pode beber'; 
console.log(podeBeber);                                       
            
// pode ou nao utilizar 
// parenteses na condição (idade >= 18) ou idade >= 18
// condição ? true : false

var scroll = 1000;
scroll += 500;
console.log(scroll);

var possuiCarro = true;
var possuiCasa = false;
var darCredito = (possuiCarro && possuiCasa) ? 'Liberar financiamento' : 'Não liberar financiamento' ;

console.log(darCredito);
