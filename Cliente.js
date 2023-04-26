 export class cliente {
    nome;
    cpf;

    depositar(valor) {
        if (valor <= 0) return console.log("Tá de sacanagem");
        this._saldo += valor;
    }

}