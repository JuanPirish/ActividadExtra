do {
    let numeroComputadora = Math.floor(Math.random() * 9) + 1;

    let numeroUsuario;
    do {
        numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 9:"));
    } while (numeroUsuario < 1 || numeroUsuario > 9);

    let eleccion = prompt("¿Tu número es mayor, menor o igual al de la computadora?");

    if (numeroUsuario > numeroComputadora && eleccion.toLowerCase() === "mayor") {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es mayor ¡Ha adivinado!`);
    } else if (numeroUsuario < numeroComputadora && eleccion.toLowerCase() === "menor") {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es menor ¡Ha adivinado!`);
    } else if (numeroUsuario === numeroComputadora && eleccion.toLowerCase() === "igual") {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es igual ¡Ha adivinado!`);
    } else {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. ¡No adivinó!`);
    }

    var jugarOtraVez = prompt("¿Quieres jugar otra vez? (SI/NO)");
} while (jugarOtraVez.toLowerCase() === "si");

alert("Gracias por jugar. Nombre: Juan, Carnet: 123456");