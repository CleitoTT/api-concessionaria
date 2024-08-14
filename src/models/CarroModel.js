import mongoose from "mongoose"

const carroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    marca: { type: String },
    modelo: { type: String },
    ano: { type: Number },
    imagem: { type: String }
}, {versionKey:false})

const carro = mongoose.model("carros", carroSchema)

export default carro
