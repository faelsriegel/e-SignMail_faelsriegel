//mostrar conteudo input em tempo real na assinatura
var capturando = "";

function capturar() {
  capturando = document.getElementById("campoCliente").value;
  document.getElementById("outCliente").innerHTML = capturando;

  capturando = document.getElementById("campoDuracao").value;
  document.getElementById("outDuracao").innerHTML = capturando;

  capturando = document.getElementById("campoDominio").value;
  document.getElementById("outDominio").innerHTML = capturando;
}

// encontra o botao
const buttonCopiar = document.getElementById('btnCopy2')
//configura a funcao que sera chamada uando ele for pressionado
buttonCopiar.onclick = copiar;

function copiar() {
  // seleciona a area onde a assinatura esta
  var area = document.getElementById("modelo-dom-final");
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

