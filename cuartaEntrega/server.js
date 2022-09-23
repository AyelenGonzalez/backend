const express = require('express')

const products = require('./Modules/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('./Public'))

const PORT = 8080

app.get('/', (req, res) =>{
    res.status(200).send('API Productos')
})

app.use('/productos', products)
app.use('/productos/:id', products)

app.listen(PORT, err => {
    err ? console.log(err) :
    console.log(`listening on port ${PORT}`)
})