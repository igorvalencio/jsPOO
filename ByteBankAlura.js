import { cliente } from "./Cliente.js"
import { contapoupanca } from "./ContaPoupanca.js";
import { contacorrente } from "./Contacorrente.js";
import { conta } from "./Conta.js";

const cliente1 = new cliente("Jonatas", 1003216544);
const contacorrenteJonatas = new contacorrente(1001, cliente1);
contacorrenteJonatas._saldo = 1000;
console.log(contacorrenteJonatas)

const contapoupanca1 = new contapoupanca (50, cliente1, 852147998);
 