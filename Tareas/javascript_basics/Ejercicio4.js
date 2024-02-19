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

let text = "hola como estas Yo estoy Bien";

console.log("Antes de capitalizar: ");
console.log(text);

text = cap(text);

console.log("Despues de capitalizar: ");
console.log(text);
