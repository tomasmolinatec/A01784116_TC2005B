"use strict";

function mcd(num1, num2)
{
    let bigger = num1 > num2 ? num1 : num2;
    let result = 0;

    for (let i = 0; i < bigger + 1 ; i++)
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

console.log("Case 1:\nMaximo comun divisor de: ", n1, n2);

console.log(mcd(n1,n2));

n1 = 1;
n2 = 10;

console.log("Case 2:\nMaximo comun divisor de: ", n1, n2);

console.log(mcd(n1,n2));


n1 = 8;
n2 = 8;

console.log("Case 3:\nMaximo comun divisor de: ", n1, n2);

console.log(mcd(n1,n2));