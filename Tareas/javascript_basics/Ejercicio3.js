"use strict";


function invertir(array)
{
    let size = Math.floor(array.length / 2 );
    
    for (let i = 0; i < size; i++)
    {
        array = swap(array, i);
    }
    return array;
}

function swap(array, index)
{
    let size = array.length;

    let change = array[index];
    array[index] = array[size-index-1];
    array[size-index-1] = change;
    return array;
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log("Case 1:\nEl array antes de invertir:", arr)
arr = invertir(arr);
console.log("El array despues de invertir:", arr)


arr = [7,7,5,5,3,3,3]
console.log("Case 2:\nEl array antes de invertir:", arr)
arr = invertir(arr);
console.log("El array despues de invertir:", arr)

arr = [10,20,30,40,50]
console.log("Case 3:\nEl array antes de invertir:", arr)
arr = invertir(arr);
console.log("El array despues de invertir:", arr)