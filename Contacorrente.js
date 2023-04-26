export class contacorrente {
    agencia;
    _saldo = 1000;
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Não dá pra ficar negativo irmão")
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } this._saldo += valor;
    }
}