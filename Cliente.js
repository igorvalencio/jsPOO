export class cliente {
    nome;
    _cpf;

    get cpf(){
       return this._cpf = cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}