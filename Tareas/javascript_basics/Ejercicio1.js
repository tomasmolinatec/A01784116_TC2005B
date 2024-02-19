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


console.log("Usando abacddbec: ")
let test = 'abacddbec';

console.log(primeraCaracterNoRepetido(test));


console.log("Usando abbccdde: ")
test = 'abbccdde';

console.log(primeraCaracterNoRepetido(test));
