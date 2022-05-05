const texto = document.querySelector(".menssagem");
const saida = document.querySelector(".saida");

function btnincripita(){
  const textoEncripitado = encripitar(texto.value)
  saida.value = textoEncripitado
  saida.style.background = 'white'
}

function btndesencripita(){
  const textoEncripitado = desencripitar(texto.value)
  saida.value = textoEncripitado
}


function encripitar(stringEncripitada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"],["a", "ai"], ["u", "ufat"]]
  stringEncripitada = stringEncripitada.toLowerCase();

  for(let x=0; x < matrizCodigo.length; x++) {
    if (stringEncripitada.includes(matrizCodigo[x][0])) {
      stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1])
    }
  }
  return stringEncripitada;
}

function desencripitar(stringDesencripitar){
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"],["ai", "a"]]
  stringDesencripitar = stringDesencripitar.toLowerCase();

  for(let x=0; x < matrizCodigo.length; x++) {
    if (stringDesencripitar.includes(matrizCodigo[x][0])) {
      stringDesencripitar = stringDesencripitar.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1])
    }
  }
  return stringDesencripitar;
}

function copiarTexto() {
  saida.select();
  saida.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + saida.value);
}

var btn = document.querySelector(".copiar");
btn.addEventListener("click", function() { 
    location.reload();
});
