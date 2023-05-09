import { cliente } from "./Cliente.js";
import { gerente } from "./Funcionarios/Gerente.js";
import { diretor } from "./Funcionarios/Diretor.js";
import { sistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

const diretorjonatas = new diretor("Jonatas", 2000, 321654987)
diretorjonatas.Cadastrarsenha("123");

const gerentenatanael = new gerente("Natanael", 1000, 123456798)
gerentenatanael.CadastrarSenha("321");

const cliente1 = new cliente("john", 231546987, "456")
const Diretorlogado = sistemaAutenticacao.login(diretorjonatas, "123")
const Gerentelogado = sistemaAutenticacao.login(gerentenatanael, "321");
const clientelogado = sistemaAutenticacao.login(cliente1, "456");

console.log(Diretorlogado, Gerentelogado);
