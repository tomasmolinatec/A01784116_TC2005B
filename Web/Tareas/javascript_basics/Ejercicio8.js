"use strict";

function quitaDuplicados(arr)
{
   
    for (let i = 0; i < arr.length ; i++)
    {
        for (let j = arr.length ; j > i; j--)
        {   
            if (arr[i] == arr[j])
            {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
    
}



let arr = [1,1,2,2,3,3,4,5,6];

console.log("Case 1:\nArray antes de quitar duplicados: ");
console.log(arr);

arr = quitaDuplicados(arr);

console.log("Resultado: ");
console.log(arr);


arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

console.log("Case 2:\nArray antes de quitar duplicados: ");
console.log(arr);

arr = quitaDuplicados(arr);

console.log("Resultado: ");
console.log(arr);


arr = [1,2,2,3,3,3,1,1,1,1,1,1,1];

console.log("Case 3:\nArray antes de quitar duplicados: ");
console.log(arr);

arr = quitaDuplicados(arr);

console.log("Resultado: ");
console.log(arr);