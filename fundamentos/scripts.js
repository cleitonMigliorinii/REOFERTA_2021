function gerarValores(){

    const qtdeValores = document.getElementById('qtdeNumerosGerar').value;
    const qtdeSorteio = document.getElementById('qtdeSortear').value;

    criarValorElementos(qtdeValores);

}


function criarValorElementos(qtdeValores){

    let elementoPrincipal = document.getElementById('conteudoSorteio');

    for(var i = 0; i < qtdeValores; i++){

        //<div>1</div>
        const divValor = document.createElement("div");
        const textValor = document.createTextNode(`${i + 1}`);

        let attributeClass = document.createAttribute("class");
        let attributeId = document.createAttribute("id");

        attributeClass.value = "divValorItem";
        attributeId.value = i + 1;

    
        divValor.appendChild(textValor);
        divValor.setAttributeNode(attributeClass);
        divValor.setAttributeNode(attributeId);


        elementoPrincipal.appendChild(divValor);

    }


}

function sortear(){

    const qtdeValores = document.getElementById('qtdeNumerosGerar').value;
    const qtdeSorteio = document.getElementById('qtdeSortear').value;

    const valorSorteado = Math.floor(Math.random() * qtdeValores);

    let elementoSorteado = document.getElementById(valorSorteado);
    elementoSorteado.classList.add("sorteado");

}