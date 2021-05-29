let containerSenha = document.getElementById('divsenha');
let inputSenha = document.getElementById('senha');
let iconSenha = document.getElementById('imgsenha');


iconSenha.addEventListener('click',function(){
    containerSenha.classList.toggle('visible');
    if(containerSenha.classList.contains('visible')){
        iconSenha.src = 'Imagens/eye.svg';
        inputSenha.type = 'text';        
    } else{
        iconSenha.src = 'Imagens/eye-off.svg';
        inputSenha.type = 'password';
    }
});

function entrar(){
    var Email = document.getElementById('email')
    var Senha = document.getElementById('senha')
    if(Email.value=='' || Senha.value == ''){
        alert('[ERRO] Algum espaço encontra-se em branco. Por favor,verifique!')
    }
}