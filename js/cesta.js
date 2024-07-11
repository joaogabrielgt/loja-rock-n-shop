if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
}

function ready() {
    const botao_remover = document.getElementsByClassName("botao_remover");
    console.log(botao_remover)
    for (var i = 0; i < botao_remover.length; i++) {
            botao_remover[i].addEventListener("click", removerProduto) 
    }
    const qtd_inputs = document.getElementsByClassName("qtd_total")
    for (var i = 0; qtd_inputs.length; i++) {
        qtd_inputs[i].addEventListener("change", atualizar_total);
    }
}

function removerProduto(event) {
    event.target.parentElement.parentElement.parentElement.remove();
    atualizar_total();
}

function atualizar_total() {
    let valor_total_carrinho = 0;
    const card_produto = document.getElementsByClassName("card_produto")
    for(var i = 0; i < card_produto.length; i++) {
        const valor_produto = card_produto[i].getElementsByClassName("preco_produto")[0].innerText.replace("R$", " ").replace(",", ".");
        const qtd_produto = card_produto[i].getElementsByClassName("qtd_total")[0].innerText;

        console.log(valor_total_carrinho);
        valor_total_carrinho = valor_total_carrinho + (valor_produto * qtd_produto);
        console.log(valor_total_carrinho);
    }   
    
    valor_total_carrinho = valor_total_carrinho.toFixed(2);
    valor_total_carrinho = valor_total_carrinho.replace(".", ",");
    console.log(valor_total_carrinho);
    document.querySelector(".valor_carrinho").innerText = "R$ " + valor_total_carrinho;
}

atualizar_total();


