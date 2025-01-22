// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contadorAscendente = 1;
while (contadorAscendente <= 10) {
  console.log(contadorAscendente);
  contadorAscendente++;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorDescendente = 10;
while (contadorDescendente >= 0) {
  console.log(contadorDescendente);
  contadorDescendente--;
}

// 3. a. Crea un programa de cuenta regresiva. Pide un número... 
let numeroDecreciente = prompt('Ingrese un número para comenzar la cuenta regresiva: ');
// 3. b. ...y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
numeroDecreciente = parseInt(numeroDecreciente); // Se convierte el valor ingresado a número entero.
while (numeroDecreciente >= 0) {
  console.log(numeroDecreciente);
  numeroDecreciente--;
}

// 4. a. Crea un programa de cuenta progresiva. Pide un número...
let numeroCreciente = prompt('Ingrese un número para comenzar la cuenta: ');
// 4. b. ...y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
numeroCreciente = parseInt(numeroCreciente); // Se convierte el valor ingresado a número entero.
let contadorCreciente = 0;
while (contadorCreciente <= numeroCreciente) {
  console.log(contadorCreciente);
  contadorCreciente++;
}