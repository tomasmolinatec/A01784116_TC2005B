"use strict";

function BubbleSort(array)
{
    let size = array.length
    for (let i = 0; i < size-1; i++)
    {
        let swapCheck = false;
        for (let j = i + 1; j < size; j++)
        {
            if (array[i] > array[j])
            {
                let swap = array[i];
                array[i] = array[j];
                array[j] = swap;
                swapCheck = true;
            }
        }
        if (!swapCheck)
        {
            return array;
        }
    }

    return array;

}

let array = [3,1,2,-1,5];

console.log("Case 1:\nEl array antes de ordenar: ")
console.log(array)


array = BubbleSort(array);

console.log("El array despues de ordenar: ")
console.log(array)


array = [3,2,1,4,5,6,2,4,6,3];

console.log("Case 2:\nEl array antes de ordenar: ")
console.log(array)


array = BubbleSort(array);

console.log("El array despues de ordenar: ")
console.log(array)

array = [9,9,9,5,5,5,1,1,1,0];

console.log("Case 1:\nEl array antes de ordenar: ")
console.log(array)


array = BubbleSort(array);

console.log("El array despues de ordenar: ")
console.log(array)
