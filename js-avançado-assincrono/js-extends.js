class Veiculo{
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
    acelerar() {
        super.acelerar(); // acessa qualquer método
        console.log('Rápido');
    }
    empinar() {
        console.log(`Moto empinou com ${this.rodas} rodas`);
        return true;
    }
}

const honda = new Moto(2, 'gasolina', true);