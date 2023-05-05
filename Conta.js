export class conta{
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    set cliente(novoValor) {
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        let taxa = 1;
        const ValorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Não aceitamos contas negativas.")
        }

    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const ValorSacado = this.sacar(valor)
        conta.depositar(ValorSacado)
    }
}

