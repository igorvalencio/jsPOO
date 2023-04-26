import {cliente} from "./Cliente.js"
import { contacorrente } from "./Contacorrente.js";

const cliente1 = new cliente();
cliente1.nome = "Jonatas";
cliente1.cpf = 12345678911;

const cliente2 = new cliente();
cliente2.nome = "Natanael"
cliente2.cpf = 32165498700

const contacorrenteJonatas = new contacorrente();
contacorrenteJonatas.agencia = 1001;
contacorrenteJonatas.depositar(100);

const valorSacado = contacorrenteJonatas.sacar(20);
console.log(contacorrenteJonatas._saldo)


