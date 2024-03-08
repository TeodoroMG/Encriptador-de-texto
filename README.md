<h1>Encriptador de texto </h1>
consistes en un encriptador de palabras utilizando una matriz para lograr cifrarlo .
# Encriptador de Texto

Este repositorio contiene un encriptador y desencriptador de texto implementado en JavaScript para una interfaz de usuario web.

## Explicación del Código

### Función `encriptar()`

La función `encriptar()` se activa cuando el usuario hace clic en el botón "Encriptar" en la interfaz de usuario. Su objetivo es tomar el texto ingresado por el usuario, encriptarlo utilizando la función `encriptarTexto()`, y luego mostrar el texto encriptado en la interfaz de usuario utilizando la función `mostrarMensajeEncriptado()`.

### Función `encriptarTexto(texto)`

La función `encriptarTexto(texto)` toma un texto como entrada y lo encripta utilizando una matriz de codificación predefinida. Recorre el texto letra por letra y reemplaza las letras según la matriz de codificación. Luego, devuelve el texto encriptado.

### Función `desencriptar()`

La función `desencriptar()` se activa cuando el usuario hace clic en el botón "Desencriptar". Su objetivo es tomar el texto encriptado ingresado por el usuario, desencriptarlo utilizando la función `desencriptarTexto()`, y luego mostrar el texto desencriptado en la interfaz de usuario utilizando la función `mostrarMensajeDesencriptado()`.

### Función `desencriptarTexto(textoEncriptado)`

La función `desencriptarTexto(textoEncriptado)` toma un texto encriptado como entrada y lo desencripta utilizando una matriz de codificación inversa a la utilizada en `encriptarTexto()`. Recorre el texto encriptado palabra por palabra y reemplaza las palabras según la matriz de codificación inversa. Luego, devuelve el texto desencriptado.

### Funciones `mostrarMensajeEncriptado(texto)` y `mostrarMensajeDesencriptado(texto)`

Estas funciones se utilizan para actualizar dinámicamente la interfaz de usuario con mensajes y texto específicos, dependiendo de si se está mostrando el texto encriptado o desencriptado.

## Resumen

Este conjunto de funciones permite al usuario encriptar y desencriptar texto en una interfaz web, brindando una experiencia interactiva al usuario.

Encriptador de texto(Detalles específicos) .

## Parte 1

function encriptar() {
  const texto = document.getElementById("texto").value;
  const textoEncriptado = encriptarTexto(texto);
  mostrarMensajeEncriptado(textoEncriptado);
}


## Aquí tienes una explicación de la función `encriptar()` en JavaScript:

1. `const texto = document.getElementById("texto").value;`: Esta línea obtiene el valor del elemento HTML con el id "texto". Este elemento probablemente sea un `<textarea>` donde los usuarios ingresan el texto que desean encriptar. El valor del textarea se guarda en la variable `texto`.

2. `const textoEncriptado = encriptarTexto(texto);`: Aquí se llama a otra función llamada `encriptarTexto()` pasando el texto obtenido del textarea como argumento. La función `encriptarTexto()` realizará el proceso de encriptación del texto y devolverá el texto encriptado. Este texto encriptado se guarda en la variable `textoEncriptado`.

3. `mostrarMensajeEncriptado(textoEncriptado);`: Finalmente, se llama a otra función llamada `mostrarMensajeEncriptado()` pasando el texto encriptado como argumento. Esta función se encarga de mostrar el texto encriptado en algún lugar de la página, como en otro elemento HTML.

##En resumen, la función `encriptar()` se encarga de obtener el texto del textarea, encriptarlo usando la función `encriptarTexto()` y luego mostrar el texto encriptado en la página usando la función `mostrarMensajeEncriptado()`. Esto es parte de un proceso más grande que implica encriptar y mostrar el texto en la interfaz de usuario de tu página web.

## Parte 2
## Explicación.

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

Claro, aquí tienes una explicación de la función `encriptarTexto()` en JavaScript:

1. `function encriptarTexto(texto) {`: Esta línea define una función llamada `encriptarTexto()` que acepta un parámetro `texto`, que representa el texto que se va a encriptar.

2. `const matrizCode = [...]`: Aquí se define una matriz llamada `matrizCode` que contiene pares de letras. Cada par consiste en una letra original y su correspondiente encriptación. Por ejemplo, "e" se encripta como "enter".

3. `for (let i = 0; i < matrizCode.length; i++) {`: Este bucle `for` itera sobre cada par de letras en la matriz `matrizCode`.

4. `if (texto.includes(matrizCode[i][0])) {`: En cada iteración del bucle, se verifica si el texto original (`texto`) incluye la letra original de la matriz en el índice `[0]` del par actual.

5. `texto = texto.replaceAll(matrizCode[i][0], matrizCode[i][1]);`: Si la letra original está presente en el texto, se utiliza el método `replaceAll()` para reemplazar todas las instancias de la letra original con su correspondiente encriptación en el texto.

6. `return texto;`: Una vez que se ha recorrido toda la matriz `matrizCode` y se han realizado todos los reemplazos necesarios, la función devuelve el texto encriptado.

En resumen, la función `encriptarTexto()` toma un texto como entrada, lo recorre letra por letra y lo encripta según la matriz de código proporcionada, y luego devuelve el texto encriptado. Esta función se utiliza como parte del proceso de encriptación del texto en tu aplicación.

## Parte 3



function desencriptar() {
  const textoEncriptado = document.getElementById("texto").value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  mostrarMensajeDesencriptado(textoDesencriptado);
}

## Aquí tienes una explicación de la función `desencriptar()` en JavaScript:

1. `function desencriptar() {`: Esta línea define una función llamada `desencriptar()` que no acepta ningún parámetro.

2. `const textoEncriptado = document.getElementById("texto").value;`: Aquí se obtiene el valor del elemento HTML con el id "texto". Se supone que este elemento es un input o textarea donde los usuarios ingresan el texto encriptado que desean desencriptar. El valor de este elemento se guarda en la variable `textoEncriptado`.

3. `const textoDesencriptado = desencriptarTexto(textoEncriptado);`: Luego, se llama a otra función llamada `desencriptarTexto()` pasando el texto encriptado obtenido del elemento HTML como argumento. La función `desencriptarTexto()` se encarga de desencriptar el texto y devuelve el texto desencriptado. Este texto desencriptado se guarda en la variable `textoDesencriptado`.

4. `mostrarMensajeDesencriptado(textoDesencriptado);`: Finalmente, se llama a otra función llamada `mostrarMensajeDesencriptado()` pasando el texto desencriptado como argumento. Esta función se encarga de mostrar el texto desencriptado en algún lugar de la página web, como en otro elemento HTML.

En resumen, la función `desencriptar()` se encarga de obtener el texto encriptado ingresado por el usuario, desencriptarlo usando la función `desencriptarTexto()`, y luego mostrar el texto desencriptado en la interfaz de usuario utilizando la función `mostrarMensajeDesencriptado()`. Esto es parte de un proceso más grande que implica la desencriptación y la visualización del texto desencriptado en la página web.

## Parte 4
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

## Aquí tienes una explicación de la función `desencriptarTexto()` en JavaScript:

1. `function desencriptarTexto(textoEncriptado) {`: Esta línea define una función llamada `desencriptarTexto()` que acepta un parámetro `textoEncriptado`, que representa el texto encriptado que se va a desencriptar.

2. `const matrizCode = [...]`: Aquí se define una matriz llamada `matrizCode` que contiene pares de palabras. Cada par consiste en una palabra encriptada y su correspondiente desencriptación. Por ejemplo, "enter" se desencripta como "e".

3. `for (let i = 0; i < matrizCode.length; i++) {`: Este bucle `for` itera sobre cada par de palabras en la matriz `matrizCode`.

4. `if (textoEncriptado.includes(matrizCode[i][0])) {`: En cada iteración del bucle, se verifica si el texto encriptado (`textoEncriptado`) incluye la palabra encriptada de la matriz en el índice `[0]` del par actual.

5. `textoEncriptado = textoEncriptado.replaceAll(matrizCode[i][0], matrizCode[i][1]);`: Si la palabra encriptada está presente en el texto encriptado, se utiliza el método `replaceAll()` para reemplazar todas las instancias de la palabra encriptada con su correspondiente desencriptación en el texto encriptado.

6. `return textoEncriptado;`: Una vez que se ha recorrido toda la matriz `matrizCode` y se han realizado todos los reemplazos necesarios, la función devuelve el texto desencriptado.

En resumen, la función `desencriptarTexto()` toma un texto encriptado como entrada, lo recorre palabra por palabra y lo desencripta según la matriz de código proporcionada, y luego devuelve el texto desencriptado. Esta función se utiliza como parte del proceso de desencriptación del texto en tu aplicación.

## Parte 5
function mostrarMensajeEncriptado(texto) {
  document.getElementById("titulo-mensaje").innerText = "Mensaje Encriptado";
  document.getElementById("parrafo").innerText = texto;
}

function mostrarMensajeDesencriptado(texto) {
  document.getElementById("titulo-mensaje").innerText = "Mensaje Desencriptado";
  document.getElementById("parrafo").innerText = texto;
}

## Explicación

Estas dos funciones, `mostrarMensajeEncriptado()` y `mostrarMensajeDesencriptado()`, son similares en su estructura y objetivo. Ambas se utilizan para actualizar la interfaz de usuario (UI) con un mensaje y un texto específicos. Aquí está una explicación de cada una:

1. `mostrarMensajeEncriptado(texto)`: Esta función toma un parámetro `texto`, que es el texto encriptado que se desea mostrar en la interfaz de usuario. Realiza dos acciones:
   - `document.getElementById("titulo-mensaje").innerText = "Mensaje Encriptado";`: Actualiza el contenido del elemento con el id "titulo-mensaje" para mostrar "Mensaje Encriptado". Este elemento suele ser un `<h2>` que sirve como título en la UI.
   - `document.getElementById("parrafo").innerText = texto;`: Actualiza el contenido del elemento con el id "parrafo" para mostrar el texto encriptado. Este elemento suele ser un `<p>` que muestra el texto encriptado en la UI.

2. `mostrarMensajeDesencriptado(texto)`: Esta función también toma un parámetro `texto`, que es el texto desencriptado que se desea mostrar en la interfaz de usuario. Realiza acciones similares a `mostrarMensajeEncriptado()`:
   - `document.getElementById("titulo-mensaje").innerText = "Mensaje Desencriptado";`: Actualiza el contenido del elemento con el id "titulo-mensaje" para mostrar "Mensaje Desencriptado".
   - `document.getElementById("parrafo").innerText = texto;`: Actualiza el contenido del elemento con el id "parrafo" para mostrar el texto desencriptado.

En resumen, estas funciones se utilizan para actualizar dinámicamente la interfaz de usuario con mensajes y texto específicos, dependiendo de si se está mostrando el texto encriptado o desencriptado. Esto proporciona una experiencia interactiva al usuario al utilizar el encriptador/desencriptador de texto en tu aplicación web.

## Resumen de todo el Proyecto

Este conjunto de funciones forma parte de un encriptador y desencriptador de texto que opera en una interfaz de usuario (UI) web. Aquí hay un resumen de cada función y su propósito en el contexto del programa:

1. `encriptar()`: Esta función se activa cuando el usuario hace clic en el botón "Encriptar" en la interfaz de usuario. Su objetivo es tomar el texto ingresado por el usuario, encriptarlo utilizando la función `encriptarTexto()`, y luego mostrar el texto encriptado en la interfaz de usuario utilizando la función `mostrarMensajeEncriptado()`.

2. `encriptarTexto(texto)`: Esta función toma un texto como entrada y lo encripta utilizando una matriz de codificación predefinida. Recorre el texto letra por letra y reemplaza las letras según la matriz de codificación. Luego, devuelve el texto encriptado.

3. `desencriptar()`: Similar a `encriptar()`, esta función se activa cuando el usuario hace clic en el botón "Desencriptar". Su objetivo es tomar el texto encriptado ingresado por el usuario, desencriptarlo utilizando la función `desencriptarTexto()`, y luego mostrar el texto desencriptado en la interfaz de usuario utilizando la función `mostrarMensajeDesencriptado()`.

4. `desencriptarTexto(textoEncriptado)`: Esta función toma un texto encriptado como entrada y lo desencripta utilizando una matriz de codificación inversa a la utilizada en `encriptarTexto()`. Recorre el texto encriptado palabra por palabra y reemplaza las palabras según la matriz de codificación inversa. Luego, devuelve el texto desencriptado.

5. `mostrarMensajeEncriptado(texto)`: Esta función actualiza la interfaz de usuario para mostrar el título "Mensaje Encriptado" y el texto encriptado proporcionado como entrada.

6. `mostrarMensajeDesencriptado(texto)`: Similar a `mostrarMensajeEncriptado()`, esta función actualiza la interfaz de usuario para mostrar el título "Mensaje Desencriptado" y el texto desencriptado proporcionado como entrada.

## En resumen, este conjunto de funciones permite al usuario encriptar y desencriptar texto en una interfaz web, brindando una experiencia interactiva al usuario.
