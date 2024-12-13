const mensagemListaVazia = document.getElementById('mensagem-lista-vazia');

export function verificarListaVazia(lista)
{
    console.log(lista);
    if (lista.querySelectorAll('li').length === 0)
    {
        mensagemListaVazia.classList.add('block');
        mensagemListaVazia.classList.remove('hidden');
    }
    else
    {
        mensagemListaVazia.classList.add('hidden');    
        mensagemListaVazia.classList.remove('block');
    }
}