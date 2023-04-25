
class cliente{
    nome;
    cpf;
}

class contacorrente
{
    agencia;
     #saldo = 0;
    sacar(valor){
        if(this.#saldo >= valor){
        this.#saldo -= valor;
        }else{
            console.log("Não dá pra ficar negativo irmão")
        }
    }
    depositar(valor){
    if(valor > 0)
    {
        this.#saldo += valor;
    }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Jonatas";
cliente1.cpf = 12345678911;

const cliente2 = new cliente();
cliente2.nome = "Natanael" 
cliente2.cpf = 32165498700 

const contacorrenteJonatas = new contacorrente();
contacorrenteJonatas.agencia = 1001;
contacorrenteJonatas.depositar(100);
contacorrenteJonatas.sacar(20);





console.log(contacorrenteJonatas)
