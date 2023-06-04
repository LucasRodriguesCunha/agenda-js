// Credencial pré-definida
const username = 'admin';
const password = 'senha123';

// Array para armazenar os contatos
let contatos = [];

// Função para adicionar um novo contato
function adicionarContato() {
    const nome = document.getElementById('inputNome').value;
    const telefone = document.getElementById('inputTelefone').value;
    const email = document.getElementById('inputEmail').value;

    const contato = {
        nome: nome,
        telefone: telefone,
        email: email
    };

    contatos.push(contato);

    // Limpar os campos de input
    document.getElementById('inputNome').value = '';
    document.getElementById('inputTelefone').value = '';
    document.getElementById('inputEmail').value = '';
}

// Função para editar um contato existente
function editarContato(index) {
    const novoNome = document.getElementById('inputNome').value;
    const novoTelefone = document.getElementById('inputTelefone').value;
    const novoEmail = document.getElementById('inputEmail').value;

    if (index >= 0 && index < contatos.length) {
        contatos[index].nome = novoNome;
        contatos[index].telefone = novoTelefone;
        contatos[index].email = novoEmail;
    }

    // Limpar os campos de input
    document.getElementById('inputNome').value = '';
    document.getElementById('inputTelefone').value = '';
    document.getElementById('inputEmail').value = '';
}

// Função para excluir um contato existente
function excluirContato(index) {
    if (index >= 0 && index < contatos.length) {
        contatos.splice(index, 1);
    }
}

// Função para exibir os contatos na agenda
function exibirContatos() {
    const listaContatos = document.getElementById('listaContatos');

    // Limpar a lista de contatos
    listaContatos.innerHTML = '';

    if (contatos.length === 0) {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'Nenhum contato encontrado.';
        listaContatos.appendChild(mensagem);
    } else {
        contatos.forEach(function (contato, index) {
            const item = document.createElement('li');
            item.textContent = '--- Contato ' + (index + 1) + ' ---';

            const nome = document.createElement('p');
            nome.textContent = 'Nome: ' + contato.nome;

            const telefone = document.createElement('p');
            telefone.textContent = 'Telefone: ' + contato.telefone;

            const email = document.createElement('p');
            email.textContent = 'Email: ' + contato.email;

            item.appendChild(nome);
            item.appendChild(telefone);
            item.appendChild(email);

            listaContatos.appendChild(item);
        });
    }
}

// Função para limpar a agenda (remover todos os contatos)
function limparAgenda() {
    contatos = [];
    exibirContatos();
}

// Verificar a credencial do usuário
function verificarCredencial() {
    const usuario = document.getElementById('inputUsuario').value;
    const senha = document.getElementById('inputSenha').value;

    if (usuario === username && senha === password) {
        // Mostrar a seção da agenda
        document.getElementById('agendaSection').style.display = 'block';
        // Esconder a seção de login
        document.getElementById('loginSection').style.display = 'none';
    } else {
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }

  // Limpar os campos de input
}
