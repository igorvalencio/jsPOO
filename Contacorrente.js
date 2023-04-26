export class contacorrente {
    cliente;
    agencia;
    _saldo;
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Não aceitamos contas negativas.")
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return console.log("Só conseguimos depositar valor maior que R$1,00")
        } this._saldo += valor;
    }

    }
