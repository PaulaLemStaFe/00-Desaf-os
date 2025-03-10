// 1. a. Pregunta al usuario qué día de la semana es. 
let diaDeSemana = prompt("¿Qué día de la semana es?:").toLowerCase();
// 1. b. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
if (diaDeSemana == "sábado" || diaDeSemana == "sabado" || diaDeSemana == "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroIngresado = prompt("Ingresa cualquier número: ");
if (numeroIngresado >= 0) {
    alert("El número es positivo.");
} else {
    alert("El número es negativo.");
}

// 3. a. Crea un sistema de puntuación para un juego. 
let puntuacion = prompt("Ingresa tu puntuación: ");
// 3. b. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    // 3. c. En caso contrario, muestra "Intentalo nuevamente para ganar.".
    alert("Inténtalo nuevamente para ganar.");
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = prompt("Ingresa tu saldo de cuenta: ");
alert(`El saldo de Su cuenta es: ${saldoCuenta}`);

// 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingresa tu nombre, por favor: ");
alert(`Bienvenid@ a nuestra web, ${nombre}.`);
