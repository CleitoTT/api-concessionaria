import mongoose from "mongoose";

async function conectaNoBanco(){
    mongoose.connect(process.env.BD_CONNECTION_STRING)

    return mongoose.connection
}

export default conectaNoBanco