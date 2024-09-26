<function>{
let  container= Document.getElementBytd('container'),
let cartao= Document.createElement('article'),
cartaoClassName='cartao',
cartao.innerHtml='
<div class = "cartao-conteudo">
<h3>${categoria}</h3>
<div class= "cartao-pergunta">
    <p>${pergunta}</p>
</div>
<div class= "cartao-resposta">
</div>
</div>

container.appendChild(cartao),
}
</function>