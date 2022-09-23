const express = require('express')
const {Router} = express
const API = require('./products')

const api = new API()

const router = Router()

router.get("/", (req, res) =>{
    res.status(200).send(api.getAll())
})
router.get("/:id", (req,res) =>{
    const {id} = req.params
    const producto = api.getById(id)
    res.status(200).send({producto})
})
router.post("/", (req, res) =>{
    const newProduct = req.body
    const producto = api.add(newProduct)
    res.status(201).send({producto})
})
router.put("/:id", (req, res) =>{
    const {id} = req.params
    const idParse = parseInt(id)
    const producto = req.body
    api.update(producto, idParse)
    res.status(201).send({acualizado: "OK"})
})
router.delete("/", (req,res) =>{
    api.deleteAll()
    res.status(201).send({productos: "eliminados"})
})
router.delete("/:id", (req, res) =>{
    const {id} = req.params
    api.deleteById(id)
    res.status(201).send({borrado: "OK"})
})
module.exports = router