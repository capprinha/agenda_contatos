const dd = parseInt(prompt("Qual o DD??"))
const form = (document.getElementById("form"));
let linhas = "";
const nome = (document.getElementById("nome"));
const telefone = (document.getElementById("tel"));
const arrayLista = [];






//função principal\\
form.addEventListener("submit", function(e){
    e.preventDefault();
    atualizarTabela();
    corpoTabela();
})



//função para atualizar a tabela\\

function atualizarTabela(){
    const telefoneExistente = arrayLista.find(function (item) {
        return item.telefone == telefone.value;
    });
    if(telefoneExistente) {
        alert("Esse número ja foi cadastrado: " + telefoneExistente.telefone)
    }
    else{ 
    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>(${dd}) ${telefone.value}</td>`;
    linha += `</td>`;
    linhas += linha;

    arrayLista.push({ telefone: telefone.value, nome: nome.value })
    console.log(arrayLista)
    
    nome.value = "";
    telefone.value = "";
    
    }
}

//função para inserir na tabela\\
function corpoTabela(){ 
    const corpoTabela = (document.querySelector("tbody"));
    corpoTabela.innerHTML = linhas;
}

    