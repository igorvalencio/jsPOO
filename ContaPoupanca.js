import {conta} from "./Conta.js"

export class contapoupanca extends conta
{
   constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia )
   }
}