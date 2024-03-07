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
    let cartaEncontrada = cards.find( card => req.params.id == card.id);
    //console.log(cartaEncontrada);
    if (cartaEncontrada != undefined)
    {
        cards = cards.filter(card => card.id != req.params.id);
        resp.status(200).send("Se BORRO LA CARTA!");
    }
    else
    {
        resp.status(200).send("NO SE ENCONTRO LA CARTA");
    }
    
    

})

//Listen
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});