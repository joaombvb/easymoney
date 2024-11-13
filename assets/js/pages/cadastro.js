import salvarDados from "../global/salvarDados.js";

// Função de cadastro do usuário
export function cadastro() {
    // Obtém os valores preenchidos nos campos de nome, e-mail, senha e confirmação de senha
    const usuario = document.getElementById('nome').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Verifica se o nome foi preenchido
    if (usuario === '') {
        alert('Por favor, preencha o nome.');
        return false; // Impede o envio do formulário
    }

    // Verifica se o e-mail inserido é válido usando expressão regular
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false; // Impede o envio do formulário
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return false; // Impede o envio do formulário
    }
    
    // Verifica se as senhas inseridas são iguais
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return false; // Impede o envio do formulário
    }

    alert('Cadastro realizado com sucesso!');
    salvarDados(usuario, email, senha); // Chama a função para salvar os dados no localStorage
    window.location.href = 'login.html'; // Redireciona para a página de login
    return true; // Permite o envio do formulário
}