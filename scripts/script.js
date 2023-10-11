//mostrar conteudo input em tempo real na assinatura
var capturando = "";

function capturar() {
  capturando = document.getElementById("campoNome").value;
  document.getElementById("outNome").innerHTML = capturando;

  capturando = document.getElementById("campoCargo").value;
  document.getElementById("outCargo").innerHTML = capturando;

  // capturando = document.getElementById("campoTelefone").value;
  // document.getElementById("outTelefone").innerHTML = capturando;

  capturando = document.getElementById("campoEmail").value;
  document.getElementById("outEmail").innerHTML = capturando;

  // capturando = document.getElementById("campoSite").value;
  // document.getElementById("outSite").innerHTML = capturando;
}

// encontra o botao
const buttonCopiar = document.getElementById('btnCopy1')
//configura a funcao que sera chamada uando ele for pressionado
buttonCopiar.onclick = copiar;

function copiar() {
  // seleciona a area onde a assinatura esta
  var area = document.getElementById("modelo-email-final");
  if (document.body.createTextRange) {
    // para browsers antigos
    // cria um elemento chamado "range", move a area para dentro dele e o seleciona
    var range = document.body.createTextRange();
    range.moveToElementText(area);
    range.select();
    // executa o comando de copiar
    document.execCommand("Copy");
    alert("Copiado para a area de tranferencia");
  } else if (window.getSelection) {
    // para os outros
    // cria um elemento chamado "range", move a area para dentro dele e o seleciona
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);
    // executa o comando de copiar
    document.execCommand("Copy");
    alert("Assinatura copiada. Cole em seu gerenciador de email.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const linkAssinatura = document.getElementById("linkAssinatura");
  const linkCobranca = document.getElementById("linkCobranca");

  // Verifica a classe do switch para definir o estado padrão
  if (toggleSwitch.classList.contains("leftDefault") && window.location.href.includes("assinatura")) {
    // Defina a esquerda como padrão para a página "assinatura"
    toggleSwitch.checked = false;
  } else if (toggleSwitch.classList.contains("rightDefault") && window.location.href.includes("cobranca")) {
    // Defina a direita como padrão para a página "cobranca"
    toggleSwitch.checked = true;
  }

  // Evento de clique na seta esquerda
  const leftArrow = document.querySelector(".left");
  leftArrow.addEventListener("click", function () {
    history.back(); // Volta para a página anterior
  });

  // Evento de clique no botão Voltar
  const voltarBotao = document.getElementById("voltar");
  voltarBotao.addEventListener("click", function () {
    history.back(); // Volta para a página anterior
  });

  // Evento de clique na seta esquerda
  const rightArrow = document.querySelector(".right");
  rightArrow.addEventListener("click", function () {
    linkCobranca.click(); // Redireciona para a página de cobrança // Volta para a página anterior
  });
  // Evento de mudança no switch para redirecionar para a página alternativa
  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked && window.location.href.includes("Assinatura")) {
      linkCobranca.click(); // Redireciona para a página de cobrança
    } else if (!toggleSwitch.checked && window.location.href.includes("cobranca")) {
      linkAssinatura.click(); // Redireciona para a página de assinatura
    }
  });
});