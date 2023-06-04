let usuarios = [];
let posicaoAtual = -1;
let modoInclusao = false;
let usuarioAntesCancelar = {};

function incluir() {
  modoInclusao = true;
  let inputNome = document.getElementById("nome");
  let inputSobrenome = document.getElementById("sobrenome");
  let inputEndereco = document.getElementById("endereço");
  let inputTelefone = document.getElementById("telefone");

  let botaoSalvar = document.getElementById("btnSalvar");
  let botaoCancelar = document.getElementById("btnCancelar");

  inputNome.disabled = false;
  inputSobrenome.disabled = false;
  inputEndereco.disabled = false;
  inputTelefone.disabled = false;

  botaoSalvar.disabled = false;
  botaoCancelar.disabled = false;

  let usuario = {
    nome: "",
    sobrenome: "",
    endereco: "",
    telefone: ""
  }

  console.log(usuario);
}

function salvar() {
  let inputNome = document.getElementById("nome");
  let inputSobrenome = document.getElementById("sobrenome");
  let inputEndereco = document.getElementById("endereço");
  let inputTelefone = document.getElementById("telefone");

  let usuario = {
    nome: inputNome.value,
    sobrenome: inputSobrenome.value,
    endereco: inputEndereco.value,
    telefone: inputTelefone.value
  }

  if (modoInclusao) {
    usuarios.push(usuario);
    posicaoAtual = usuarios.length - 1;

    console.log("Usuário incluído:");
    console.log(usuario);
  } else {
    usuarios[posicaoAtual] = usuario;

    console.log("Usuário editado:");
    console.log(usuario);
  }

  inputNome.disabled = true;
  inputSobrenome.disabled = true;
  inputEndereco.disabled = true;
  inputTelefone.disabled = true;

  let botaoSalvar = document.getElementById("btnSalvar");
  let botaoCancelar = document.getElementById("btnCancelar");

  botaoSalvar.disabled = true;
  botaoCancelar.disabled = true;
}

function cancelar() {
  let inputNome = document.getElementById("nome");
  let inputSobrenome = document.getElementById("sobrenome");
  let inputEndereco = document.getElementById("endereço");
  let inputTelefone = document.getElementById("telefone");

  if (modoInclusao) {
    inputNome.value = usuarioAntesCancelar.nome || '';
    inputSobrenome.value = usuarioAntesCancelar.sobrenome || '';
    inputEndereco.value = usuarioAntesCancelar.endereco || '';
    inputTelefone.value = usuarioAntesCancelar.telefone || '';
  }

  inputNome.disabled = true;
  inputSobrenome.disabled = true;
  inputEndereco.disabled = true;
  inputTelefone.disabled = true;

  let botaoSalvar = document.getElementById("btnSalvar");
  let botaoCancelar = document.getElementById("btnCancelar");

  botaoSalvar.disabled = true;
  botaoCancelar.disabled = true;

  console.log("Operação cancelada.");
}

  function exibirUsuarioAtual() {
    if (posicaoAtual >= 0 && posicaoAtual < usuarios.length) {
      let usuario = usuarios[posicaoAtual];
  
      let inputNome = document.getElementById("nome");
      let inputSobrenome = document.getElementById("sobrenome");
      let inputEndereco = document.getElementById("endereço");
      let inputTelefone = document.getElementById("telefone");
  
      inputNome.value = usuario.nome;
      inputSobrenome.value = usuario.sobrenome;
      inputEndereco.value = usuario.endereco;
      inputTelefone.value = usuario.telefone;
    }
  }

function anterior() {
  if (posicaoAtual > 0) {
    posicaoAtual--;
    exibirUsuarioAtual();
  }
}

function proximo() {
  if (posicaoAtual < usuarios.length - 1) {
    posicaoAtual++;
    exibirUsuarioAtual();
  }
}

function primeiro() {
  posicaoAtual = 0;
  exibirUsuarioAtual();
}

function ultimo() {
  posicaoAtual = usuarios.length - 1;
  exibirUsuarioAtual();
}

function excluir() {
  if (usuarios.length === 0) {
    console.log("Não há usuários para excluir.");
    return -1;
  }

  let usuarioExcluido = usuarios[posicaoAtual];

  usuarios.splice(posicaoAtual, 1);

  if (usuarios.length === 0) {
    posicaoAtual = -1;
    console.log("Usuário excluído. Não há mais usuários.");
  } else if (posicaoAtual === usuarios.length) {
    posicaoAtual--;
    console.log("Usuário excluído. Exibindo usuário anterior.");
  } else {
    console.log("Usuário excluído.");
  }

  let usuarioAtual = usuarios[posicaoAtual];

  let inputNome = document.getElementById("nome");
  let inputSobrenome = document.getElementById("sobrenome");
  let inputEndereco = document.getElementById("endereço");
  let inputTelefone = document.getElementById("telefone");

  inputNome.value = usuarioAtual.nome;
  inputSobrenome.value = usuarioAtual.sobrenome;
  inputEndereco.value = usuarioAtual.endereco;
  inputTelefone.value = usuarioAtual.telefone;

  console.log(usuarios);

  return posicaoAtual;

}

function editar() {
  modoInclusao = false;

  let inputNome = document.getElementById("nome");
  let inputSobrenome = document.getElementById("sobrenome");
  let inputEndereco = document.getElementById("endereço");
  let inputTelefone = document.getElementById("telefone");

  let botaoSalvar = document.getElementById("btnSalvar");
  let botaoCancelar = document.getElementById("btnCancelar");

  inputNome.disabled = false;
  inputSobrenome.disabled = false;
  inputEndereco.disabled = false;
  inputTelefone.disabled = false;

  botaoSalvar.disabled = false;
  botaoCancelar.disabled = false;


}






