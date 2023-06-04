function verificarCredenciais() {
    const usuarioInput = document.getElementById("usuário");
    const senhaInput = document.getElementById("senha");
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    const usuarioCorreto = "Lucas";
    const senhaCorreta = "123";

    const avisoElement = document.getElementById("aviso");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "cad_contato.html"; // Redirecionar para a página após o login bem-sucedido
    } else {
        avisoElement.textContent = "Credenciais inválidas. Por favor, tente novamente."; // Exibir mensagem de erro para credenciais inválidas
    }
}