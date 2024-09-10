const dd = parseInt(prompt("Qual o DD??"))
const form = (document.getElementById("form"));
const numero = []
let linhas = "";




//função principal
form.addEventListener("submit", function(e){
    e.preventDefault();
    atualizarTabela();
    corpoTabela();
})

function atualizarTabela(){
    const nome = (document.getElementById("nome"));
    const telefone = (document.getElementById("tel"));

    /*if(numero.includes(telefone.value)){
        alert("Este numero ja foi add a agenda")
    }
    else*/

    let linha = `<tr>`;

    linha += `<td>${nome.value}</td>`;
    linha += `<td>(${dd}) ${telefone.value}</td>`;
    linha += `</td>`;
    linhas += linha;

    nome.value = "";
    telefone.value = [""];
    
}


function corpoTabela(){ 
    const corpoTabela = (document.querySelector("tbody"));
    corpoTabela.innerHTML = linhas;
}

    