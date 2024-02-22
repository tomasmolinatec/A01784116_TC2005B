"use strict mode";

function hackerspeak(string)
{
    let newstring = "";
    let size = string.length;
    for (let i = 0; i < size; i++)
    {
        switch (string[i].toLowerCase())
        {
            case  "a":
                newstring += "4";
                break;
            case  "e":
                newstring += "3";
                break;
            case "i":
                newstring += "1";
                break;
            case "s":
                newstring += "5";
                break;
            case "o":
                newstring += "0";
                break;
            default:
                newstring += string[i];
                break; 
        }
    }
    return newstring;
}

let text = "Javascript es divertido";

console.log("Case 1:\nTexto antes de HackerSpeak: ");
console.log(text);

text = hackerspeak(text);

console.log("Texto despues de HackerSpeak: ");
console.log(text);


text = "Me llamo Tomas Molina";

console.log("Case 2:\nTexto antes de HackerSpeak: ");
console.log(text);

text = hackerspeak(text);

console.log("Texto despues de HackerSpeak: ");
console.log(text);


text = "aAbBcCdDeEfFgGhHiijJkKlLmMnNoOpPqQrRsStTuUvVxXyYzZ";

console.log("Case 3:\nTexto antes de HackerSpeak: ");
console.log(text);

text = hackerspeak(text);

console.log("Texto despues de HackerSpeak: ");
console.log(text);