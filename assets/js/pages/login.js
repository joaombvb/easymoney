// Função de login do usuário
export function login() {
    // Obtém os dados salvos no localStorage
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');
    
    // Obtém os valores preenchidos nos campos de login
    const emailLogin = document.getElementById('emailLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    // Verifica se não há dados de login salvos
    if (!emailSalvo || !senhaSalva) {
        alert('Nenhuma conta registrada encontrada.');
        return false; // Impede o login
    }

    // Verifica se o e-mail e a senha inseridos correspondem aos salvos
    if (emailLogin === emailSalvo && senhaLogin === senhaSalva) {
        alert('Login realizado com sucesso!');
        window.location.href = 'home.html'; // Redireciona para a página principal
        return true; // Permite o login
    } else {
        alert('Dados inválidos!');
        return false; // Impede o login
    }
}