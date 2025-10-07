const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')

const {PrismaClient} = require("../generated/prisma/client")
const client = new PrismaClient();

class admController{
   static async CadastrarMesa(req, res) {
    const {codigo, n_lugares} = req.body

    const mesa = await client.mesa.create({
    data:{
     codigo,
     n_lugares,
    }
});

    res.json({
        mensagem: "Cadastro de Mesa realizado com Sucesso!",
        erro: false,
    })
}
}