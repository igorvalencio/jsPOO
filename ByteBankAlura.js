import { cliente } from "./Cliente.js"
import { contapoupanca } from "./ContaPoupanca.js";
import { contacorrente } from "./Contacorrente.js";
import { conta } from "./Conta.js";

const cliente1 = new cliente("Jonatas", 1003216544);

const contacorrenteJonatas = new contacorrente(cliente1, 1001);

const contapoupanca1 = new contapoupanca (50, cliente1, 852147998);

console.log(contacorrenteJonatas)
 