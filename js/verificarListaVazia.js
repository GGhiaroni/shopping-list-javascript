const mensagemListaVazia = document.getElementById('mensagem-lista-vazia');

export function verificarListaVazia(lista)
{
    if (lista.childElementCount === 0)
    {
        mensagemListaVazia.classList.add('block');
    }
    else
    {
        mensagemListaVazia.classList.add('hidden');    
    }
}