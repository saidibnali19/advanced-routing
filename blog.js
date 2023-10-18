const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Homepage of blog")
})

router.get("/01", (req, res) => {
    res.send("Blog post 01")
})

router.get("/02", (req, res) => {
    res.send("Blog post 02")
})

module.exports = router