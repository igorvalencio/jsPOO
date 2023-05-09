export class funcionario {
    construtor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha; 
    }
    autenticar(){
        return true;
    }

    CadastrarSenha(senha){
        return this._senha = senha;
    }
}