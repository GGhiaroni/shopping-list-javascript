const item = document.getElementById('input-item');
const botaoSalvarItem = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0;

const listaItensComprados = document.getElementById('lista-itens-comprados');

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(e) {
    e.preventDefault();

    if (item.value.trim() === '') {
        alert('Por favor, insira um item.');
        return;
    }

    const itemDaLista = document.createElement('li');

    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('flex', 'items-center', 'justify-between', 'mt-4');

    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('flex', 'items-center', 'cursor-pointer', 'w-full', 'gap-2');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('peer', 'hidden', 'input-checkbox');
    checkboxInput.id = 'checkbox-' + contador++;

    const checkboxCustomizado = document.createElement('div');
    checkboxCustomizado.classList.add(
        'w-5', 'h-5', 'bg-neutro', 'border-2', 'border-solid', 'border-preto',
        'cursor-pointer', 'rounded-md', 'checkbox-customizado'
    );

    checkboxLabel.addEventListener("click", function (e) {
        const checkboxInput = e.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = e.currentTarget.querySelector(".checkbox-customizado");

        if (checkboxInput.checked)
        {
            checkboxCustomizado.classList.add('bg-preto', 'check-mark', 'relative'); 
            console.log("pintou");
            listaItensComprados.appendChild(itemDaLista);
        }
    });

    const nomeDoItem = document.createElement('p');
    nomeDoItem.classList.add(
        'font-fonteTexto', 'text-base', 'font-normal', 'leading-6', 
        'peer-checked:line-through', 'peer-checked:text-gray-500'
    );
    nomeDoItem.innerText = item.value;

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    checkboxLabel.appendChild(nomeDoItem);

    const containerBotoes = document.createElement('div');
    containerBotoes.classList.add('flex', 'justify-center');
    const botaoRemover = document.createElement('button');
    const botaoEditar = document.createElement('button');

    const imgRemover = document.createElement('img');
    imgRemover.classList.add('w-5');
    imgRemover.src = 'img/delete.svg';
    imgRemover.alt = 'Botão para remover';
    botaoRemover.appendChild(imgRemover);

    const imgEditar = document.createElement('img');
    imgEditar.classList.add('w-4', 'ml-1');
    imgEditar.src = 'img/edit.svg';
    imgEditar.alt = 'Botão para editar';
    botaoEditar.appendChild(imgEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(checkboxLabel);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);

    listaDeCompras.appendChild(itemDaLista);

    item.value = '';
}
