"use strict";

function potenciaDeDos(numero)
{
    while (numero > 2)
    {
        numero /= 2;
    }

    return numero == 2;
}

let n = 256;
console.log("Case 1:\nEl numero ", n, "es potencia de dos?")
console.log(potenciaDeDos(n));

n = 100;
console.log("Case 2:\nEl numero ", n, "es potencia de dos?")
console.log(potenciaDeDos(n));

 n = 2;
console.log("Case 3:\nEl numero ", n, "es potencia de dos?")
console.log(potenciaDeDos(n));