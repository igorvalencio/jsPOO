import { cliente } from "./Cliente.js";
import { gerente } from "./Funcionarios/Gerente.js";
import { diretor } from "./Funcionarios/Diretor.js";
import { sistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

<<<<<<< HEAD
const diretorjonatas = new diretor("Jonatas", 2000, 321654987)
diretorjonatas.Cadastrarsenha("123");

const gerentenatanael = new gerente("Natanael", 1000, 123456798)
gerentenatanael.CadastrarSenha("321");

const cliente1 = new cliente("john", 231546987, "456")
const Diretorlogado = sistemaAutenticacao.login(diretorjonatas, "123")
const Gerentelogado = sistemaAutenticacao.login(gerentenatanael, "321");
const clientelogado = sistemaAutenticacao.login(cliente1, "456");

console.log(Diretorlogado, Gerentelogado);
=======
const cliente1 = new cliente("Jonatas", 212345897);
const cliente2 = new cliente("Natanael", 3322114455)

const contacorrenteJonatas = new contacorrente(cliente1, 1001);
const contapoupancanatanael = new contapoupanca (50, cliente2, 1001);
const conta1 = new conta(0, cliente1, 1002)


console.log(conta);

 
>>>>>>> 56aa4573174ddf65bb6521bc2908a07d3603d8bf
