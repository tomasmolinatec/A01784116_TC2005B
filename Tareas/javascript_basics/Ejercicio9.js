"use strict";

function stringMasCorto(strings)
{
    let masChico = strings[0].length;
    let size = strings.length;

    for(let i = 1; i < size; i++)
    {
        if (strings[i].length < masChico)
        {
            masChico = strings[i].length;
        }
    }

    return masChico;
}


let arr = ["dos", "0", "javascript"];

console.log("Case 1:\nArray de strings: ");
console.log(arr);

let chico = stringMasCorto(arr);

console.log("Longitud del string mas corto: ");
console.log(chico);


arr = ["1234","123","123","123456"];

console.log("Case 2:\nArray de strings: ");
console.log(arr);

chico = stringMasCorto(arr);

console.log("Longitud del string mas corto: ");
console.log(chico);


arr = ["","tomas","molina","hello"];

console.log("Case 3:\nArray de strings: ");
console.log(arr);

chico = stringMasCorto(arr);

console.log("Longitud del string mas corto: ");
console.log(chico);