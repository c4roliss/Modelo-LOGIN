function entrar(){
    var Email = document.getElementById('email')
    var Senha = document.getElementById('senha')
    if(Email.value=='' || Senha.value == ''){
        alert('[ERRO] Algum espaço encontra-se em branco. Por favor,verifique!')
    }
}