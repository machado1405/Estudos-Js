var videoGames = ['Switch', 'PS4', 'XBox'];

for (var numero = 0; numero <= 3; numero++){
    console.log(numero);
}

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (var i = 0; i < videoGames.length; i++){
    if(videoGames[i] === 'PS4'){
        console.log(videoGames[i]);
        break;
    }
} 

var anoCopa = [1958, 1962, 1970, 1994, 2002];

for (let i = 0; i < anoCopa.length; i++) {
    console.log(`O brasil venceu a copa de : ${anoCopa[i]}`);
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'Pera') {
        console.log(frutas[i]);
        break;
    }
}

var x = frutas[4];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].lastIndexOf()){
        var y = frutas[i];
    }
}


console.log(y);