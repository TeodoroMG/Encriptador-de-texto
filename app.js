/*variables*/ 

const campo_texto = document.querySelector("# texto-encriptado");

const campo_mensaje = document.querySelector("# campo-mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat" 





const matriz_code = [
[ "e", "enter"],//índice 0
[ "i", "imes"],//índice 1
[ "a", "ai"],//índice 2
[ "o", "ober"],//índice 3
[ "u", "ufat"],//índice 4
];

function btnEncriptar() {
   const texto = campo_texto.value;
   campo_mensaje.value = texto;


}
function encriptar(fraseEncriptada ){
for(let  i=0 ; i < matriz_code.length; i++){
if (fraseEncriptada.includes( matriz_code[i][0])){
    fraseEncriptada = fraseEncriptada.replaceAll(
      matriz_code[i][0],
      matriz_code[i][1],
      
  
    );
}
 }

 return fraseEncriptada;
}
;
