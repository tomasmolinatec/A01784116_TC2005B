"use strict";

function desc(n1,n2)
{
    return n1 > n2;
}

function selectionSort(arr, cmp)
{
    let size = arr.length;
   
    for (let i = 0; i < size; i++)
    {
        let lowest = i;

        for (let j = i+1; j < size; j++)
        {
            if (cmp(arr[j] , arr[lowest]))
            {
                lowest = j;
            }
        }
        let swap = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = swap;
    
    }
    return arr;
}


let a = [1,2,3,4,5]
console.log("Case 1:\nArray a ordenar descendentement: ", a);
console.log(selectionSort(a,desc));


a = [10,50,30,20,70,0];
console.log("Case 2:\nArray a ordenar descendentement: ", a);
console.log(selectionSort(a,desc));


a = [-1,50,-50,1,50.5,-1.5];
console.log("Case 3:\nArray a ordenar descendentement: ", a);
console.log(selectionSort(a,desc));