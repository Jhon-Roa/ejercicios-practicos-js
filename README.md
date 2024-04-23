# **Análisis código fuente**

## Código N1: 

En el primer ejercicio, lo que desde mi perspectiva analizo que el codigo, aparte de lo obvio que es extraer el código fuente tiene dos elementos que se repiten en el resto de los ejercicios:

- Una linea de código dedicada a validar si los valores que se le pasaron <u>son un array</u> (`if(!Array.isArray(array)) return {"message": "El parámetro debe ser un arreglo"}`)
- Una linea de código para comprobar si el array <u>esta vacío</u> (`if(array.length === 0) return {"message": "El arreglo no puede estar vacio"}`)

Otro punto que me parece importante a destacar es que es una función flecha

### Código:

`(() => {
const devolverPrimerElemento = (array) => {
if(array.length === 0) return {"message": "El arreglo no puede estar vacio"}
if(!Array.isArray(array)) return {"message": "El parámetro debe ser un arreglo"}
return array[0];
};`

## Código N2:

Podría decirse que lo mismo que el anterior pero este toma el ultimo elemento.

Lo único destacable es que esta no es una función flecha

### Código:

`function devolverUltimoElemento(array) {

## if(array.length === 0) {

return "No hay elementos en el array";
}
if(!Array.isArray(array)) {
return "El parámetro no es un array";
}
return array.at(-1);
}`

## Código N3:

Esta toma el largo de el array con la función length

esta es similar a len de Python, lo que noto es que esta es una propiedad por lo que no lleva un paréntesis al final como si pude notar en otros métodos 

### Código:

`function obtenerLargoDelArray(array) {
return (!Array.isArray(array) ? "El parámetro no es un arreglo." : array.length);
}`

## Código N4:

Esta función toma dos argumentos que le pases, el primero un array , el segundo una string o un numero, y busca el segundo parámetro en el primero (el array) y nos devuelve una función booleana si la encuentra, algo a destacar es un pequeño cambio en la comprobación de el array que indica que <u>el primer parámetro</u> debe ser un array.

Puedo ver que hay una nueva propiedad que desconocía (<u>includes</u>) que parece ser la que retorna la variable booleana

### Código:

`function arrayContiene(array, elemento) {
if(!Array.isArray(array)){
return "El primer argumento debe ser un arreglo"
}
return array.includes(elemento);`

## Código N5:

Tuve que investigar un poco para entender este código, como el anterior que incluía un método que desconocía (includes) este contiene otro método que suma todos los numeros dentro de una función numerica (<u>reduce</u>) que presenta un acumulador y un numero actual, supongo que tendra otros varios usos aparte de la suma total

otro punto que quisiera destacar es la validación que se realizo para comprobar que el array fuera de números

### Código: 

`function numeroMasGrande(arrayOfNums) {
if(!Array.isArray(arrayOfNums)) return "El parametro debe ser un arreglo"
if(arrayOfNums.some((item) => typeof item !== "number")) return "Los elementos deben ser numeros"
return arrayOfNums.reduce((acc, curr) => acc + curr, 0)
}`

## Código N6:

Esta función funciona para comprobar si un numero comienza con nueve, comienza comprobando si le pasaste un numero, luego lo cambia a string y itera para extraer el primer numero, finalmente devuelve true o false

### Código:

`function empiezaConNueve(num) {
if(typeof num !== "number") return "El parametro debe ser un numero";
const numeroAString = String(num)
const primerDigito = Number(numeroAString[0]);
return primerDigito === 9
}`

Considero que los 6 codigos en general estuvieron algo complejos de entender porque no es mi forma de codificar