import { cliente } from "./Cliente.js"
import { contacorrente } from "./Contacorrente.js";

const cliente1 = new cliente("Jonatas", 1003216544);
const cliente2 = new cliente("Natanael", 31245698711);

const contacorrenteJonatas = new contacorrente(1001, cliente1);
contacorrenteJonatas._saldo = 1000;

const contacorrenteNatanael = new contacorrente(1001, cliente2);
contacorrenteNatanael._saldo = 1000;



console.log(contacorrenteJonatas)
console.log(contacorrenteNatanael)
console.log(contacorrente.NumerodeContas)