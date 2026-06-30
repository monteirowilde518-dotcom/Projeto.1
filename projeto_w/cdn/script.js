function abrirCard(numero) {
  alert("Você clicou no card " + numero);
}

function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Preencha todos os campos.");
    return;
  }

  alert(
    "Formulário enviado com sucesso!\nNome: " +
      nome +
      "\nTelefone: " +
      telefone +
      "\nEmail: " +
      email,
  );
}
