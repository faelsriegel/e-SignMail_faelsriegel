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



