// pode exportar uma classe igual uma funçao type="module"

class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _actualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.futureDate);
    }

    get _timeStampDiff() {
        return this. _futureDate.getTime() - this._actualDate.getTime();
    }

    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); // conversao de mili segundos para dias
    }
    
    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); // conversao de mili segundos para dias
    }

    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000)); // conversao de mili segundos para dias
    }

    get seconds() {
        return Math.floor(this._timeStampDiff / 1000); // conversao de mili segundos para dias
    }

    get total() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        }
    }
}

// caso seja usado para uma outra aplicaçao
// para funcionar como module, instanciar o objeto
// em no arquivo main, onde ficam as importacoes.

const tempoParaONatal =  new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaValentinesDay =  new Countdown('12 june 2021 23:59:59 GMT-0300');

console.log(tempoParaONatal.total);
console.log(tempoParaValentinesDay.total);
