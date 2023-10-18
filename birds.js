const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Homepage of birds")
})

router.get("/about", (req, res) => {
    res.send("About of birds")
})

module.exports = router