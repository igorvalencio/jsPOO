import {conta} from "./Conta.js"

export class contapoupanca extends conta
{
   constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia )
   }
   sacar(valor){
<<<<<<< HEAD
      const taxa = 1.01;
      return this._sacar(valor,taxa)
=======
      const taxa = 1.02;
      return this._sacar(valor, taxa)
>>>>>>> 56aa4573174ddf65bb6521bc2908a07d3603d8bf
   }
}