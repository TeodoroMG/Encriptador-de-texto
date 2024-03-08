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

