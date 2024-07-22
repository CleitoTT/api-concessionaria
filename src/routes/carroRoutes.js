import express from "express"
import CarrosController from "../controllers/carrosController.js"

export const carrosRoutes = express.Router()

carrosRoutes.get("/carros", CarrosController.listarCarros)
carrosRoutes.get("/carros/:id", CarrosController.listarCarroporId)
carrosRoutes.post("/carros", CarrosController.cadastrarCarro)
carrosRoutes.put("/carros/:id", CarrosController.atualizarCarro)
carrosRoutes.delete("/carros/:id", CarrosController.apagarCarro)