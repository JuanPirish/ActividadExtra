var mes = parseInt(prompt(" Ingrese tu mes de nacimiento (1-12):"));
var dia = parseInt(prompt("Ingrese tu dia de nacimiento"));

if((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) { 
  alert(" Tu signo es aries"); 
}  else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    alert("Tu signo es Tauro");
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    alert("Tu signo es Géminis");
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    alert("Tu signo es Cáncer");
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    alert("Tu signo es Leo");
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    alert("Tu signo es Virgo");
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    alert("Tu signo es Libra");
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    alert("Tu signo es Escorpio");
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    alert("Tu signo es Sagitario");
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    alert("Tu signo es Capricornio");
} else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    alert("Tu signo es Acuario");
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    alert("Tu signo es Piscis");
} else {alert("Fecha invalida, revisa tus datos "); } 