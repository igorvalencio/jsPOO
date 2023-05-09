export class sistemaAutenticacao{
        static login(autenticavel, senha){
            if(sistemaAutenticacao.ehautenticavel(autenticavel)){
                return
            }
            return autenticavel.autenticar(senha);
        }
}