//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

var numeros = [1,2,3,4,5,6,7,8,9,10];
var total = 1;

for(var i = 0; i < 10; i++)
{
    total *= numeros[i];
}

console.log(total);