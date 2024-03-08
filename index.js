function encriptar() {
  const texto = document.getElementById("texto").value;
  const textoEncriptado = encriptarTexto(texto);
  mostrarMensajeEncriptado(textoEncriptado);
}

function encriptarTexto(texto) {
  const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCode.length; i++) {
    if (texto.includes(matrizCode[i][0])) {
      texto = texto.replaceAll(matrizCode[i][0], matrizCode[i][1]);
    }
  }
  return texto;
}

function desencriptar() {
  const textoEncriptado = document.getElementById("texto").value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  mostrarMensajeDesencriptado(textoDesencriptado);
}

function desencriptarTexto(textoEncriptado) {
  const matrizCode = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  for (let i = 0; i < matrizCode.length; i++) {
    if (textoEncriptado.includes(matrizCode[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }
  return textoEncriptado;
}

function mostrarMensajeEncriptado(texto) {
  document.getElementById("titulo-mensaje").innerText = "Mensaje Encriptado";
  document.getElementById("parrafo").innerText = texto;
}

function mostrarMensajeDesencriptado(texto) {
  document.getElementById("titulo-mensaje").innerText = "Mensaje Desencriptado";
  document.getElementById("parrafo").innerText = texto;
}
