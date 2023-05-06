import { conta } from "./Conta.js";

export class contacorrente extends conta {
    static NumerodeContas = 0;
    constructor(cliente, agencia){
         super(100, cliente, agencia)
        contacorrente.NumerodeContas ++;

    }
    sacar(valor) {
        let taxa = 1.1;
        const ValorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Não aceitamos contas negativas.")
        }

    }
  

    
}

