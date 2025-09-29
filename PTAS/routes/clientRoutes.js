const clientController = require("../controllers/clientController");
const router = require('express').Router()

router.post('/login', clientController.Login)

router.post('/cadastro', clientController.Cadastro)

router.delete('/deletar', clientController.Delete)

module.exports = router