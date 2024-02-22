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


let arr = ["abc","aaa","baa","abb", "ABC", "AAC"];

console.log("Case 1:\nArray antes de alfabetizar: ",arr);
console.log("Array despues de alfabetizar:",alfabetizar(arr));

arr = ["r","Python", "java", "javascript",  "matlab"];

console.log("Case 2:\nArray antes de alfabetizar: ",arr);
console.log("Array despues de alfabetizar:",alfabetizar(arr));

arr = ["C","c","b","B", "a", "A"];

console.log("Case 1:\nArray antes de alfabetizar: ",arr);
console.log("Array despues de alfabetizar:",alfabetizar(arr));
