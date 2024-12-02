const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(e) {
    e.preventDefault();
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add('flex', 'items-center', 'justify-between'); 

    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;

    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button");

    const imgRemover = document.createElement("img");
    imgRemover.src = "img/delete.svg";
    imgRemover.alt = "Botão para remover"
    const imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg";
    imgEditar.alt = "Botão para editar"
    
    botaoRemover.appendChild(imgRemover);
    containerBotoes.appendChild(botaoRemover);
    
    botaoEditar.appendChild(imgEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);

    listaDeCompras.appendChild(itemDaLista);
}


