const clientController =  require("../controllers/clientController");
const express = require('express')

const router = express.Router();

router.post("/login", clientController.Login)

module.exports = router