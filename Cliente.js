import { conta } from "./Conta.js";

export class cliente extends conta {
    get cpf(){
       return this._cpf = cpf;
    }

    constructor(nome, cpf){
        super(nome, cpf)
        this.nome = nome;
        this._cpf = cpf;
    }

}