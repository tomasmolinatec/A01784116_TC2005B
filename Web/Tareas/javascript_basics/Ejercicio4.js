"strict mode";

function cap(text)
{
    newtext = "" + text[0].toUpperCase();
    let size = text.length;

    for (let i = 1; i < size; i++)
    {
        if (text[i-1] == " ")
        {
            newtext += text[i].toUpperCase();
            
        }
        else 
        {
            newtext += text[i]
        }
    }

    return newtext;
}

let text = "hola como estas";

console.log("Case 1:\nAntes de capitalizar: ");
console.log(text);

text = cap(text);

console.log("Despues de capitalizar: ");
console.log(text);


text = "Hola soy tomas Molina";

console.log("Case 2:\nAntes de capitalizar: ");
console.log(text);

text = cap(text);

console.log("Despues de capitalizar: ");
console.log(text);


text = " a b c d e f g A";

console.log("Case 3:\nAntes de capitalizar: ");
console.log(text);

text = cap(text);

console.log("Despues de capitalizar: ");
console.log(text);