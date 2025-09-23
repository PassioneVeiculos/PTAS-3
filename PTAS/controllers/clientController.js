const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')

const {PrismaClient} = require("../generated/prisma/client")
const client = new PrismaClient();

class clientController{

    static async Login(req, res) {
        const {email, senha} = req.body
        const usuario = await client.usuario.findUnique({
            where: {
                email: email,
            }
        })
        if(!usuario) {
            return res.json({
                message: "Usuário não encontrado"
            })
        }

        const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
        if(!senhaCorreta) {
            return res.status(401).json({
                message: "Senha Incorreta!"
            })
        }

        const token = jwt.sign({ id: usuario.id },
            process.env.SENHA_SERVIDOR,
            {
                expiresIn: '1h',
            })
        const response = {
            message: "Logado com Sucesso!",
            erro: false,
            token: token
        }
        res.status(420).json(response)
    }

    static async Cadastro(req, res) {
        const {nome, email, senha} = req.body

        const salt = bcryptjs.genSaltSync(8)
        const hashSenha = bcryptjs.hashSync(senha, salt)

        const usuario = await clientController.usuario.create({
            data: {
                nome,
                email,
                senha: hashSenha,
            }
        })
        const response = {
            message: "Usuário Cadastrado com Sucesso!",
            erro: false,
        }
        res.status(418).send(response)
    }
}

module.exports = clientController