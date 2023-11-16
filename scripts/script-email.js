//mostrar conteudo input em tempo real na assinatura
var capturando = "";

function capturar() {
  capturando = document.getElementById("campoCliente").value;
  document.getElementById("outCliente").innerHTML = capturando;

  capturando = document.getElementById("campoEmail1").value;
  document.getElementById("outEmail1").innerHTML = "<strong>" + capturando + "</strong>";

  capturando = document.getElementById("campoSenha1").value;
  document.getElementById("outSenha1").innerHTML = capturando;

  capturando = document.getElementById("campoEmail2").value;
  document.getElementById("outEmail2").innerHTML = "<strong>" + capturando + "</strong>";

  capturando = document.getElementById("campoSenha2").value;
  document.getElementById("outSenha2").innerHTML = capturando;

  capturando = document.getElementById("campoEmail3").value;
  document.getElementById("outEmail3").innerHTML = "<strong>" + capturando + "</strong>";

  capturando = document.getElementById("campoSenha3").value;
  document.getElementById("outSenha3").innerHTML = capturando;

  capturando = document.getElementById("campoEmail4").value;
  document.getElementById("outEmail4").innerHTML = "<strong>" + capturando + "</strong>";

  capturando = document.getElementById("campoSenha4").value;
  document.getElementById("outSenha4").innerHTML = capturando;

  capturando = document.getElementById("campoEmail5").value;
  document.getElementById("outEmail5").innerHTML = "<strong>" + capturando + "</strong>";

  capturando = document.getElementById("campoSenha5").value;
  document.getElementById("outSenha5").innerHTML = capturando;
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
    alert("Email copiado. Cole em seu gerenciador de email.");
  }
}




// capturando = document.getElementById("campoSenha3").value;
//   document.getElementById("outSenha3").innerHTML = capturando;

//   capturando = document.getElementById("campoEmail3").value;
//   document.getElementById("outEmail3").innerHTML = capturando;

//   capturando = document.getElementById("campoSenha4").value;
//   document.getElementById("outSenha4").innerHTML = capturando;

//   capturando = document.getElementById("campoEmail4").value;
//   document.getElementById("outEmail4").innerHTML = capturando;

//   capturando = document.getElementById("campoSenha5").value;
//   document.getElementById("outSenha5").innerHTML = capturando;

//   capturando = document.getElementById("campoEmail5").value;
//   document.getElementById("outEmail5").innerHTML = capturando;
