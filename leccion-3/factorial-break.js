//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var numeros = [1,2,3,4,5,6,7,8,9,10];
var bool = false;
var contador = 0;
var total = 1;

while (!bool)
{
    if(contador < 10)
    {
        total *= numeros[contador];
        contador++;
    }
    else
    {
        break;
    }
}

console.log(total);