import carro from "../models/carroModel.js"

class CarrosController {
    
    static async listarCarros (req, res, next) {
        try{
            const listaCarros = await carro.find()
            res.status(200).json(listaCarros)
        }catch(erro){
            next(erro)
        }
    }
    
    static async listarCarroporId (req, res, next) {
        try{
            const id = req.params.id
            const carroEncontrado = await carro.findById(id)

            if(carroEncontrado !== null){
                res.status(200).json({ carroEncontrado })
            }else{
                res.status(404).json({ message: "Id do carro não localizado" })
            }
        }catch(erro){
            next(erro)
        }
    }

    static async cadastrarCarro (req, res, next){
        try{
            const novoCarro = await carro.create(req.body) 
            res.status(201).json({ message: "Carro criado com sucesso", novoCarro })
        }catch(erro){
            next(erro)
        }
    }

    static async atualizarCarro (req, res, next) {
        try{
            const id = req.params.id;
            const atualizacoes = req.body
            await carro.findByIdAndUpdate(id, atualizacoes)
            res.status(200).json({ message: "Carro atualizado com sucesso"})
        }catch(erro){
            next(erro)
        }
    }

    static async apagarCarro (req, res, next){
        try{
            const id = req.params.id
            await carro.findByIdAndDelete(id)
            res.status(200).json({ message: "Carro deletado com sucesso" })
        }catch(erro){
            next(erro)
        }
    }
}

export default CarrosController