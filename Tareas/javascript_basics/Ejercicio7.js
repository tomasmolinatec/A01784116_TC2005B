"use strict";

function factoriza(numero)
{
    let factores = [];
    
    for (let i = 1; i < numero + 1; i ++)
    {
        if (numero % i == 0)
        {
            factores.push(i);
        }
    }

    return factores;
}

let x = 12;

console.log("Case 1:\nNumero a factorizar: ");
console.log(x);

x = factoriza(x);

console.log("Factores: ");
console.log(x);

x = 5;

console.log("Case 2:\nNumero a factorizar: ");
console.log(x);

x = factoriza(x);

console.log("Factores: ");
console.log(x);

x = 120;

console.log("Case 3:\nNumero a factorizar: ");
console.log(x);

x = factoriza(x);

console.log("Factores: ");
console.log(x);