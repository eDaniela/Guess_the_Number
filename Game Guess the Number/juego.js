// crear un numero aleatorio entre en 1 y el 20. para empezar el jugador tendra q ingresar el nombre
// y se le pedira ingresar un numero entre el 1 y el 20. Dependiendo del numero que ingrese
// el juego le va a respo si el numero es mas chico o mas alto q el numero q se genero aleatoriamente.
// se le dara 5 intentos al jugador. De no ser asi se activara un mensaje de :PERDIO:

// Primero declaramos las variables para funcione nuestro juego.

// ---- ---- ---- VARIABLES ---- ---- ----
var numeroMinimo = 1;
var numeroMaximo = 20;
var intentos = 0; // esta es la primera oportunidad.
var nombre = prompt('Welcome to "GUESS THE NUMBER". First of all, What\'s your name?'); //le preguntaremos el nombre al jugador.
var numeroIngresado; // la declararemos dentro del ciclo for
var numeroAleatorio = Math.floor(Math.random() * numeroMaximo - numeroMinimo + 1) + numeroMinimo; // con esto generamos un numero aleatorio

// ---- ---- ---- BUCLE FOR PARA EL JUEGO---- ---- ----
for (intentos; intentos<5; ++intentos){
	numeroIngresado = parseInt(prompt('Please '+nombre+' add a number between '+numeroMinimo+' and '+numeroMaximo));

// ---- ---- ---- BUCLE IF DENTRO DEL FOR PARA EL JUEGO ---- ---- ----
	if ( numeroIngresado >= numeroMinimo && numeroIngresado <= numeroMaximo ){
		if (numeroIngresado < numeroAleatorio) {
			alert('Uh oh, that number is lower') // ---- LE DAMOS UNA PISTA
		} else if (numeroIngresado > numeroAleatorio) {
			alert('Hehe that number is higher') // ---- LE DAMOS OTRA  PISTA
		} else if ( numeroIngresado == numeroAleatorio) { // ---- EN CASO DE QUE SE DE ADIVINE EL NUMERO SE DETIENE ----
			break; // ---- ---- ---- BREAK PARA DETENER EL CICLO ---- ---- ----
		}

	} else {
		alert('Man you have to add a number between '+numeroMinimo+' and '+numeroMaximo);
	}
} //parseInt lo que nos ayuda es en convertir el dato que ingrese el jugador en un numero entero.

// ---- ---- ---- OTRO BUCLE IF PARA EVALUAR QUE SUCEDIO EN EL BUCLE FOR ---- ---- ----
if (numeroIngresado == numeroAleatorio) {
	alert('Congratulations!! YOU GUESSED THE NUMBER IN '+(intentos + 1)+' TRIES.');
} else {
	alert('So sorry man, good luck next time');
}
