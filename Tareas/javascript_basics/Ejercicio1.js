"use strict";

function primeraCaracterNoRepetido(string) {

	let size = string.length;
	for (let i = 0; i < size; i++)
	{
		if (!seRepite(string, i))
		{
			return string[i];
		}
	}
}

function seRepite(string, index) {
	let count = 0;
	let char = string[index];
	let size = string.length;

	for (let i = 0; i < size; i++)
	{
		if (char == string[i])
		{
			count++;
		}
	}

	return count > 1 ? true : false; 
	
}


let test = 'abc';
console.log("Case 1:\nPrimer caracter no reptetido en ", test);

console.log(primeraCaracterNoRepetido(test));

test = 'aabcce';
console.log("Case 2:\nPrimer caracter no reptetido en ", test);

console.log(primeraCaracterNoRepetido(test));

test = 'aabbccdde';
console.log("Case 3:\nPrimer caracter no reptetido en ", test);


console.log(primeraCaracterNoRepetido(test));

