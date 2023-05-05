import { cliente } from "./Cliente.js";
import { contapoupanca } from "./ContaPoupanca.js";
import { contacorrente } from "./Contacorrente.js";
import {conta} from "./Conta.js";

const cliente1 = new cliente("Jonatas", 1003216544);
const cliente2 = new cliente("Natanael", 3322114455)

const contacorrenteJonatas = new contacorrente(cliente1, 1001);
const contapoupancanatanael = new contapoupanca (50, cliente2, 1001);

const conta1 = new conta(0, cliente1, 1002);

console.log(conta1);

 