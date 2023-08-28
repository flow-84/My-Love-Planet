const express = require('express')
const router = express.Router()
const nachricht = require("../api/places")
router.use("/places", nachricht)
module.exports = router