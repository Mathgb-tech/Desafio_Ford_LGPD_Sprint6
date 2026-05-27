
//class contato

class contato {
    constructor(nome, sobrenome, email, telefone,  contato, tipo_contato, mensagem) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.email = email;
            this.telefone = telefone;
            this.contato = contato;
            this.tipo_contato = tipo_contato;
            this.mensagem = mensagem;
    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("tipo-contato").value,
        form.elements.namedItem("mensagem").value);

    Enviar(data);
}

function Enviar(dados) {
    const forms = document.querySelector("#formulario");
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        var nome = document.getElementById("nomeid");

        if (nome.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        }   
        forms.reset();
        console.log(dados)
        console.log(`nome: ${dados.nome} \n sobrenome: ${dados.sobrenome} \n email: ${dados.email} \n telefone: ${dados.telefone} \n contato: ${dados.contato} \n Tipo do contato: ${dados.tipo_contato} \n Mensagem: ${dados.mensagem}`);
    }, { once: true});
}