class clientController{

    static Login = (req, res) => {
        const {email, senha} = req.body
        const response = {
            message: "Yey",
            erro: false,
            token: `${email}, ${senha}`
        }
        res.status(418)
        res.send(response)
    }
}

module.exports = clientController