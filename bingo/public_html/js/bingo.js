var Bingo = function () {

    this.sorteados = [];

    this.sortear = function () {
        if (this.getQtdNumerosFaltam() > 0) {
            var numero = this.ordemSorteio.splice(0, 1)[0];
            this.sorteados.push(numero);
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i].onNumeroSorteado(numero, this);
            }
            return numero;
        } else {
            return null;
        }
    };
    this.listeners = [];
    this.addListener = function (listener) {
        this.listeners.push(listener);
    };
    this.getQtdNumerosFaltam = function () {
        return this.ordemSorteio.length;
    };
    this.getQtdNumerosSorteados = function () {
        return this.sorteados.length;
    };
    this.reiniciar = function () {
        var numeros = [];
        for (var i = 0; i < 75; i++) {
            numeros[i] = i + 1;
        }
        this.ordemSorteio = [];

        for (var i = 75; i > 0; i--) {
            var pos = Math.floor(Math.random() * i);
            var numero = numeros.splice(pos, 1)[0];
            this.ordemSorteio.push(numero);
        }
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i].onReiniciado(this);
        }
    };
    this.reiniciar();

    return this;
}	