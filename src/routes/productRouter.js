import express from 'express'

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.json({message: "Bem vindo a nossa API"})
})

productRouter.post('/', (req, res) => {
    res.json({message: "Bem vindo a nossa API"})
})

productRouter.put('/', (req, res) => {
    res.json({message: "Bem vindo a nossa API"})
})

productRouter.delete('/', (req, res) => {
    res.json({message: "Bem vindo a nossa API"})
})

export default productRouter;