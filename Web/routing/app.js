"use strict";

import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

app.get("/api/hello", (req, resp) =>
{
    console.log("Hello from server");
    resp.status(200).send("Hello from server\n")
});

app.get("/api/hello/:name", (req, resp) =>
{
    console.log(req.params);
    resp.status(200).send(`Hello ${req.params.name}\n`);
})

app.get("/api/hello/:name/:surname", (req,resp) =>{
    console.log(req.params);
    resp.status(200).send(`Hello ${req.params.name} ${req.params.surname}\n`);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});

app.post("/api/hello", (req, resp) =>{
    console.log(req.body);
    resp.status(200).send(`Hello ${req.body["name"]} ${req.body["surname"]}\n`);
})

