import { conta } from "./Conta.js";

export class contacorrente extends conta {
    static NumerodeContas = 0;
    constructor(cliente, agencia){
         super(0, cliente, agencia)
        contacorrente.NumerodeContas ++;

    }
    sacar(valor) {
        {
            const taxa = 1.02;
            return this._sacar(valor,taxa)
         }

    }
  

    
}

