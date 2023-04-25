
class cliente{
    nome;
    cpf;
}

class contacorrente
{
    agencia;
    //# significa que é privado
    //quando tem _ antes, significa que é privado também.
     #saldo = 0;
    sacar(valor){
        if(this.#saldo >= valor){
        this.#saldo -= valor;
        return valor;
        }else{
            console.log("Não dá pra ficar negativo irmão")
        }
    }
    depositar(valor){
    if(valor <=0) return console.log("Tá de sacanagem");
    this.#saldo += valor;
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
contacorrenteJonatas.depositar(0);

const valorSacado = contacorrenteJonatas.sacar(20);






console.log(contacorrenteJonatas)
