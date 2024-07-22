import express from "express"
import { carrosRoutes } from "./carroRoutes.js"

const route = (app)=>{
    app.get("/", (req,res) => res.status(200).send(`
            <h1>Servidor de carros ReviveAuto</h1>
            <a href="/carros">Carros</a>
        `))

    app.use(express.json(), carrosRoutes)
}

export default route