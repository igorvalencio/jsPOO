export class contapoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    transferir(valor, conta){
        const ValorSacado = this.sacar(valor)
        conta.depositar(ValorSacado)
    }
}