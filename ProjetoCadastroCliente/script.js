let clientes = [
    {
        nome: "Anna",
        idade: 25,
        email:"anna@email.com"
    },
    {
        nome:"Gabriel",
        idade: 17,
        email: "gabriel@email.com",
    },
    {
        nome:"Isabella",
        idade: 18,
        email: "ida@email.com"
    },
];

function filtrarClientesAdultos(clientes) {
    return clientes.idade >= 18;
}

function mostrarClientesAdultos(){
    let clientesAdultos = clientes.filter(filtrarClientesAdultos);

    let lista = document.getElementById("listaClientesAdultos");

    lista.innerHTML = "";

    for (let i = 0; i < clientesAdultos.length; i++) {
        let item = document.createElement ("li");
        item.textContent = clientesAdultos[i].nome + "(" + clientesAdultos[i].idade + " anos) - " + clientesAdultos[i].email;
        lista.appendChild(item);
    }
}
  
function cadastrarCliente(){
    let nome = document.getElementById("nomeCliente").value;
    let idade = document.getElementById("idadeCliente").value;
    let email = document.getElementById("emailCliente").value;

if (nome && idade && email) {
    clientes.push({nome: nome, idade: idade, email: email});

    document.getElementById("mensagemCadastro").textContent = "Cliente cadastrado com sucesso!";
    document.getElementById("nomeCliente").value = "";
    document.getElementById("idadeCliente").value = "";
    document.getElementById("emailCliente").value = "";
} else{
    document.getElementById("mensagemCadastro").textContent ="Por favor, preencha todos os campos.";
}
}