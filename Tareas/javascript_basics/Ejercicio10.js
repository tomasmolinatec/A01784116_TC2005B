"use strict";

function palindromo(string)
{
    if (string.length <= 1)
    {
        return true;
    }
    else if (string[0] == string.at(-1))
    {
        return palindromo(string.slice(1,-1))
    }
    else
    {
        return false;
    }
}


let string = "Tomas Molina";
console.log("Case 1:\nChecando si ", string, "es palindromo: ", palindromo(string));

string = "abccba";
console.log("Case 1:\nChecando si ", string, "es palindromo: ", palindromo(string));


string = "AXA";
console.log("Case 1:\nChecando si ", string, "es palindromo: ", palindromo(string));
