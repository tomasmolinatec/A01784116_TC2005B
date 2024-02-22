"use strict";


function selectionSort(arr)
{
    let size = arr.length;
   
    for (let i = 0; i < size; i++)
    {
        let lowest = i;

        for (let j = i+1; j < size; j++)
        {
            if (arr[j] < arr[lowest])
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

function medianaymoda(arr)
{
    arr = selectionSort(arr);
    let size = arr.length;


    let mediana = size % 2 == 0 ? (arr[size/2 -1] + arr[size/2]) / 2: arr[size/2 - 0.5];
    
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

    return [mediana, moda]


}


let arr = [1,2,2,1];

console.log("Case 1:\nArray al cual sacar media y moda: ", arr);
let mym = medianaymoda(arr);
console.log("Media: ", mym[0]);
console.log("Moda: ", mym[1]);

arr = [1,2,3,4,5,5,6,6,7,7,7];

console.log("Case 2:\nArray al cual sacar media y moda: ", arr);
mym = medianaymoda(arr);
console.log("Media: ", mym[0]);
console.log("Moda: ", mym[1]);

arr = [1,2,3,4,5,6,7];

console.log("Case 3:\nArray al cual sacar media y moda: ", arr);
mym = medianaymoda(arr);
console.log("Media: ", mym[0]);
console.log("Moda: ", mym[1]);
