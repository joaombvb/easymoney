// Função para salvar os dados do usuário no localStorage
export default function salvarDados(usuario, email, senha) {
    localStorage.setItem('usuario', usuario); // Salva o nome do usuário
    localStorage.setItem('email', email); // Salva o e-mail
    localStorage.setItem('senha', senha); // Salva a senha
}