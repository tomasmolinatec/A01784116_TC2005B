"use strict";

function mcd(num1, num2)
{
    let bigger = num1 > num2 ? num1 : num2;
    bigger = Math.floor(bigger / 2);
    let result = 0;

    for (let i = 0; i < bigger ; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
        {
            result = i;
        }
    }
    return result;
}


let n1 = 120;
let n2 = 36;

console.log("Maximo comun divisor de: ", n1, n2);

console.log(mcd(n1,n2));