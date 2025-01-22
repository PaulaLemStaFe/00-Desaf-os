// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenida y bienvenido a mi sitio web!");

// 2. a. Crea una variable llamada "nombre" y asígnale tu nombre.
let nombreMio = "Paula";

// 2. b. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
console.log(`¡Hola, ${nombreMio}!`);

// 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombreMio2 = "Paula";
alert(`¡Hola, ${nombreMio2}!`);

// 4. a. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");

// 4. b. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
console.log("Tu lenguaje de programación favorito es: " + lenguajeFavorito);

// 5. a. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
let valor1A = 5;
let valor2A = 10;

// 5. b. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
let resultadoA = valor1A + valor2A;

// 5. c. Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log(`La suma de ${valor1A} y ${valor2A} es igual a ${resultadoA}.`);

// 6. a. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
let valor1B = 20;
let valor2B = 15;

// 6. b. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
let resultadoB = valor1B - valor2B;

// 6. c. Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
console.log(`La diferencia entre ${valor1B} y ${valor2B} es igual a ${resultadoB}.`);

// 7. a. Pide al usuario que ingrese su edad con prompt.
let edadUsuario = prompt("¿Cuál es tu edad?");
console.log(`Tu edad es: ${edadUsuario} años.`);

// 7. b. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y...
//       ...muestra un mensaje apropiado en la consola.
if (edadUsuario >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// 8. a. Crea una variable "numero" y solicita un valor con prompt.
let numeroSolicitado = prompt("Por favor, ingresa un número:");

// 8. b. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
if (numeroSolicitado > 0) {
    console.log(`El número ${numeroSolicitado} es positivo.`);
} else if (numeroSolicitado < 0) {
    console.log(`El número ${numeroSolicitado} es positivo.`);
} else {
    console.log("El número es cero.");
}

// 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 10. a. Crea una variable "nota" y asígnale un valor numérico.
let nota = 8;

// 10. b. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio1 = Math.random();
console.log(`Número aleatorio generado: ${numeroAleatorio1}`);

// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatorio generado: ${numeroAleatorio2}`);

// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatorio generado: ${numeroAleatorio3}`);
