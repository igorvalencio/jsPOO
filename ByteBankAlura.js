import {cliente} from "./Cliente.js"
import { contacorrente, contacorrente } from "./Contacorrente.js";

const cliente1 = new cliente();
const contacorrente1 = new contacorrente();
cliente1.nome = "Jonatas";
cliente1.cpf = 12345678911;


const cliente2 = new cliente();
const contacorrente2 = new contacorrente();
cliente2.nome = "Natanael"
cliente2.cpf = 32165498700

// const contacorrenteJonatas = new contacorrente();
// contacorrenteJonatas.agencia = 1001;
// contacorrenteJonatas.cliente = cliente1;
// contacorrenteJonatas._saldo = 1000;
// contacorrenteJonatas.depositar(1000);
// contacorrenteJonatas.sacar(500);

// const contacorrenteNatanael = new contacorrente();
// contacorrenteNatanael.agencia = 1001;
// contacorrenteNatanael.cliente = cliente2;
// contacorrenteNatanael._saldo = 1000;
// contacorrenteNatanael.depositar(2000);
// contacorrenteNatanael.sacar(100);


console.log(contacorrenteJonatas)
console.log(contacorrenteNatanael)


