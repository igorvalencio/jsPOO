import { cliente } from "./Cliente.js";

export class contacorrente {
    static NumerodeContas = 0;
    _cliente;
    agencia;
    _saldo =0;

    set cliente(NovoValor){
        if(NovoValor instanceof cliente){
            this._cliente = NovoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    constructor(agencia, cliente){
            this.agencia = agencia;
            this.cliente = cliente;
            contacorrente.NumerodeContas++;
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

}
