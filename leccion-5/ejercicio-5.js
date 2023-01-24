/*Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

var alturaCentimetros = 167;
var alturaMetros = 1.67;
var pesoKg = 50.2;
var alturaArriba = Math.round(alturaMetros);
var pesoBajo = Math.floor(pesoKg);
var maxValor = Number.MAX_VALUE + 1;

console.log(alturaCentimetros);
console.log(alturaMetros);
console.log(pesoKg);
console.log(alturaArriba);
console.log(pesoBajo);
console.log(maxValor);
