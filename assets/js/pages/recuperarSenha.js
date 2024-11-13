// Função para recuperar a senha do usuário
export function recuperarSenha() {
    // Obtém os valores preenchidos no campo de e-mail para recuperação
    const emailRecuperarSenha = document.getElementById('emailRecuperarSenha').value;
    const nomeSalvo = localStorage.getItem('usuario');
    const emailSalvo = localStorage.getItem('email');

    // Verifica se não há dados de usuário ou e-mail salvos
    if (!nomeSalvo || !emailSalvo) {
        alert('Nenhuma conta registrada encontrada.');
        return; // Impede a recuperação de senha
    }

    // Verifica se o e-mail inserido corresponde ao e-mail salvo
    if (emailRecuperarSenha === emailSalvo) {
        // Envia o e-mail de recuperação com a senha cadastrada
        emailjs.send("service_ewcc6oi", "template_vaoggkf", {
            name: nomeSalvo,
            message: `A sua senha cadastrada é: ${localStorage.getItem('senha')}`,
            to_email: emailRecuperarSenha
        })
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text);
            alert("E-mail de recuperação enviado com sucesso. Verifique sua caixa de entrada.");
            window.location.href = 'login.html'; // Redireciona para a página de login
        }, function(error) {
            console.log("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
        });
    } else {
        alert('E-mail não possui conta cadastrada!');
    }
}
