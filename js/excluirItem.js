import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if (confirmacao)
    {
        elemento.remove();
        verificarListaVazia(listaDeCompras);
    }
};

export { excluirItem };
