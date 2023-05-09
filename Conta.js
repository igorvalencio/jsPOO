export class conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == conta){
             throw new Error("Não é possível criar uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == conta) {
            throw new Error("Não é possível criar um construtor tipo Conta.")
        }
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

<<<<<<< HEAD
    sacar() {
      throw new Error("Sacar é um metodo abstrato")

=======
    sacar(valor) {
        throw new Error("O método sacar é abstrato")
>>>>>>> 56aa4573174ddf65bb6521bc2908a07d3603d8bf
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const ValorSacado = this.sacar(valor)
        conta.depositar(ValorSacado)
    }
}

