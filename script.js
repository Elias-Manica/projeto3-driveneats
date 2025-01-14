let botaoClicado;
let botaoClicadoBebi;
let botaoClicadoSobre;
let fecharPedido;
let selecionarComida;
let selecionarBebida;
let selecionarSobremesa;
let msg;
let message;
let nomeComida;
let precoComida;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;
let frase;

function botaoSelecionado(elemento) {
  selecionarComida = elemento.innerHTML;
  nomeComida = elemento.firstElementChild.textContent;
  precoComida = elemento.lastElementChild.textContent;

  botaoClicado = document.querySelector(".principal .escondido");
  if (botaoClicado !== null) {
    botaoClicado.classList.remove("escondido");
    botaoClicado.classList.remove("cor");
    botaoClicado.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
  selecionarPedido();
}

function botaoSelecionadoBebida(elemento) {
  selecionarBebida = elemento.innerHTML;
  nomeBebida = elemento.firstElementChild.textContent;
  precoBebida = elemento.lastElementChild.textContent;

  botaoClicadoBebi = document.querySelector(".bebida .escondido ");
  if (botaoClicadoBebi !== null) {
    botaoClicadoBebi.classList.remove("escondido");
    botaoClicadoBebi.classList.remove("cor");
    botaoClicadoBebi.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
  selecionarPedido();
}

function botaoSelecionadoSobremesa(elemento) {
  selecionarSobremesa = elemento.innerHTML;
  nomeSobremesa = elemento.firstElementChild.textContent;
  precoSobremesa = elemento.lastElementChild.textContent;

  icone = document.querySelector(".sobremesa .icone");

  botaoClicadoSobre = document.querySelector(".sobremesa .escondido ");
  if (botaoClicadoSobre !== null) {
    botaoClicadoSobre.classList.remove("escondido");
    botaoClicadoSobre.classList.remove("cor");
    botaoClicadoSobre.classList.add("branco");
  }
  elemento.classList.add("escondido");
  elemento.classList.add("cor");
  elemento.classList.remove("branco");
  selecionarPedido();
}

function selecionarPedido() {
  if (selecionarComida && selecionarBebida && selecionarSobremesa) {
    fecharPedido = document.querySelector(".fecharPedido");
    fecharPedido.classList.add("fundoVerde");
    frase = document.querySelector(".fraseBotao");
    frase.innerHTML = "Fechar pedido";
  }
}

function encaminharPedido(elemento) {
  if (frase.innerHTML === "Fechar pedido") {
    let todaTela = document.querySelector(".confirmacaoPedido");
    todaTela.classList.remove("oculto");
    let layout = document.querySelector(".layoutConfirmar");
    layout.classList.remove("oculto");

    precoComida =
      precoComida[precoComida.length - 5] +
      precoComida[precoComida.length - 4] +
      "." +
      precoComida[precoComida.length - 2] +
      precoComida[precoComida.length - 1];

    precoBebida =
      precoBebida[precoBebida.length - 5] +
      precoBebida[precoBebida.length - 4] +
      "." +
      precoBebida[precoBebida.length - 2] +
      precoBebida[precoBebida.length - 1];

    precoSobremesa =
      precoSobremesa[precoSobremesa.length - 5] +
      precoSobremesa[precoSobremesa.length - 4] +
      "." +
      precoSobremesa[precoSobremesa.length - 2] +
      precoSobremesa[precoSobremesa.length - 1];

    let valorTotal =
      Number(precoComida) + Number(precoBebida) + Number(precoSobremesa);

    layout.children[1].children[0].innerHTML = nomeComida;
    layout.children[1].children[1].innerHTML = precoComida;
    layout.children[2].children[0].innerHTML = nomeBebida;
    layout.children[2].children[1].innerHTML = precoBebida;
    layout.children[3].children[0].innerHTML = nomeSobremesa;
    layout.children[3].children[1].innerHTML = precoSobremesa;
    layout.children[4].children[1].innerHTML = `R$ ${valorTotal.toFixed(2)}`;
  }
}

function pedidoWhatsapp() {
  let valorTotal =
    Number(precoComida) + Number(precoBebida) + Number(precoSobremesa);
  msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${nomeComida}
  - Bebida: ${nomeBebida}
  - Sobremesa: ${nomeSobremesa}
Total: R$ ${valorTotal.toFixed(2)}`;

  message = `https://wa.me/5521980279273?text=${encodeURIComponent(msg)}`;
  open(message);
}

function cancelar() {
  let todaTela = document.querySelector(".confirmacaoPedido");
  todaTela.classList.add("oculto");
  let layout = document.querySelector(".layoutConfirmar");
  layout.classList.add("oculto");
}
