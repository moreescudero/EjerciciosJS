//Este archivo debe calcular el factorial de 10 utilizando un bucle while

var numeros = [1,2,3,4,5,6,7,8,9,10];
var contador = 0;
var total = 1;

while (contador < numeros.length)
{
    total *= numeros[contador];
    contador++;
}

console.log(total);