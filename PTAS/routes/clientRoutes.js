const clientController = require("../controllers/clientController");
const router = require('express').Router()

router.post('/login', clientController.Login)

router.post('/cadastro', clientController.Cadastro)

module.exports = router