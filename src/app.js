import express from "express"
import conectaNoBanco from "./config/dbConnect.js"
import route from "./routes/index.js"
import cors from "cors"
import controleDeErros from "./middlewares/controleDeErros.js"

const conexao = await conectaNoBanco()

conexao.on("error", (erro)=>{
    console.error("Ocorreu um erro de conexão", erro);
})

conexao.once("open", ()=>{
    console.log("Conectado com o banco de dados");
})

const app = express()
app.use(cors({ origin:"*" }))
route(app)
app.use(controleDeErros)

export default app