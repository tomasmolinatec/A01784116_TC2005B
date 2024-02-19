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

arr = invertir(arr);

console.log(arr)

