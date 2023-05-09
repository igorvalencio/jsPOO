import {conta} from "./Conta.js"

export class contapoupanca extends conta
{
   constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia )
   }
   sacar(valor){
      const taxa = 1.01;
      return this._sacar(valor,taxa)
   }
}