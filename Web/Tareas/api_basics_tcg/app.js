"use strict";

import express from "express";

const app = express();

const port = 3000;

//Middleware
app.use(express.json());

let attributes = ["id", "name", "description"];


function hasRequiredAttributes(obj, requiredAttributes) 
{
    return requiredAttributes.every(attr => obj.hasOwnProperty(attr));
}

function idExists(id)
{
    for(let i = 0; i < cards.length; i++)
    {
        if(cards[i].id == id)
        {
            return true;
        }
    }
    return false;
}



let cards = [{
    "id": 0,
    "name": "Knight",
    "description": "Royal Knight at your service!"
}]

//let cards = []

app.get("/api/cartas", (req, resp) =>
{
    if (cards.length == 0)
    {
        resp.status(200).send("NO HAY CARTAS\n");
    }
    else
    {
        resp.status(200).json(cards);
    }
});

app.get("/api/cartas/:id", (req, resp) =>
{
    let cartaEncontrada = cards.find( card => req.params.id == card.id);
    //console.log(cartaEncontrada);
    if (cartaEncontrada != undefined)
    {
        resp.status(200).json(cartaEncontrada);
    }
    else
    {
        resp.status(200).send("NO SE ENCONTRO LA CARTA");
    }
})


app.post("/api/agregarcartas", (req, resp) =>{
    
    const data = req.body;
    let statusstring = "";
    data.forEach (card =>{
        if (hasRequiredAttributes(card,attributes) && Object.keys(card).length == attributes.length && !idExists(card.id))
        {
           cards.push(card);
           statusstring += `La carta con id ${card.id} y nombre ${card.name} fue agregada correctamente.\n`;
        }
        else
        {
            statusstring +=`La carta con id ${card.id} y nombre ${card.name} NO fue agregada correctamente.\n`;
        }
    })
    resp.status(200).send(statusstring);

    
})

app.delete("/api/cartas/:id", (req, resp) =>{
    
    let index = -1;
    for(let i = 0; i < cards.length; i++)
    {
        if (cards[i].id == req.params.id)
        {
            index = i; 
            break;
        }
    }

    
    if (index !== -1) {
        // Found the item, remove it
        cards.splice(index, 1);
        resp.status(200).send(`SE BORRO LA CARTA CON ID: ${req.params.id}`);
    } else {
        // Item not found
        resp.status(200).send("NO SE ENCONTRO LA CARTA");
    }
    
    
})

app.put("/api/cartas/:id", (req, resp) =>{
    
    const data = req.body;
    let statusstring = "";
    

    let index = -1;
    for(let i = 0; i < cards.length; i++)
    {
        if (cards[i].id == req.params.id)
        {
            index = i; 
            break;
        }
    }

    if (index == -1)
    {
        resp.status(200).send("NO SE ENCONTRO LA CARTA");
    }
    else
    {
        Object.keys(data).forEach(param =>{
            if(attributes.includes(param))
            {
                cards[index][param] = data[param];
                statusstring += `El paramentro de ${param} se actualizo!\n`;
            }
            else
            {
                statusstring += `El paramentro de ${param} no es valido.\n`;
            }
        });
            
        resp.status(200).send(statusstring);
    }
    
    
})


//Listen
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});