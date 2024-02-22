"use strict";

function alfabetizar(arr)
{
    let size = arr.length;
   
    for (let i = 0; i < size; i++)
    {
        let lowest = arr[i];
        let index = i;
        for (let j = i+1; j < size; j++)
        {
            if (arr[j].toLowerCase() < lowest.toLowerCase())
            {
                lowest = arr[j];
                index = j;
            }
        }
        let swap = arr[i];
        arr[i] = lowest;
        arr[index] = swap;
    
    }
    return arr;
}


function masfrecuente(arr)
{
    arr = alfabetizar(arr);
    let size = arr.length;
    let moda = [];
    let maxrepeticiones = 0;
    let repeticiones = 1;

    for (let i = 1; i < size; i++)
    {
        if (arr[i-1] == arr[i])
        {
            repeticiones++;
        }
        else {
            if(repeticiones > maxrepeticiones)
            {
                maxrepeticiones = repeticiones;
                moda = [arr[i-1]];
            }
            else if (repeticiones == maxrepeticiones)
            {
                moda.push(arr[i-1]);
            }
            repeticiones = 1;
        }

        if (i == size - 1) 
        { 
            if (repeticiones > maxrepeticiones) 
            {
                moda = [arr[i]];
            } 
            else if (repeticiones == maxrepeticiones) {
                moda.push(arr[i]);
        }
        }
    }

    return moda;
}


let palabras = ["hola", "tomas", "tomas", "hola", "hola"];

console.log("Case 1:\nArray de palabras:", palabras);
console.log("La palabra mas frecuente: ", masfrecuente(palabras));


palabras = ["hola", "como", "estas"];

console.log("Case 2:\nArray de palabras:", palabras);
console.log("La palabra mas frecuente: ", masfrecuente(palabras));


palabras = ["hola", "hello", "bonjour", "hello", "hello", "hola", "bonjour", "hello"];

console.log("Case 1:\nArray de palabras:", palabras);
console.log("La palabra mas frecuente: ", masfrecuente(palabras));

