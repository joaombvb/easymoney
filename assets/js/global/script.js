import { cadastro } from "../pages/cadastro.js";
import { login } from "../pages/login.js";
import { recuperarSenha } from "../pages/recuperarSenha.js";

// Verifica se o formulário de cadastro existe antes de adicionar o evento
const formCadastro = document.getElementById('form-cadastro');
if (formCadastro) {
    // Adiciona o evento de submissão do formulário para chamar a função 'cadastro'
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio padrão do formulário
        cadastro(); // Chama a função de cadastro
    });
}

// Verifica se o formulário de login existe antes de adicionar o evento
const formLogin = document.getElementById('form-login');
if (formLogin) {
    // Adiciona o evento de submissão do formulário para chamar a função 'login'
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio padrão do formulário
        login(); // Chama a função de login
    });
}

// Verifica se o formulário de recuperação de senha existe antes de adicionar o evento
const formRecuperarSenha = document.getElementById('form-recuperar-senha');
if (formRecuperarSenha) {
    // Adiciona o evento de submissão do formulário para chamar a função 'recuperarSenha'
    formRecuperarSenha.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio padrão do formulário
        recuperarSenha(); // Chama a função de recuperação de senha
    });
}
