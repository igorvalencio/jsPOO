import { Conta } from "./Conta.js";

export class contacorrente extends Conta 
{
    static NumerodeContas = 0;
    constructor(agencia, cliente)
    {
           super(0, cliente, agencia);
            contacorrente.NumerodeContas++;
    }

    sacar(valor);
    {
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

