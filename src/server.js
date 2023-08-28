
// const express = require('express')

import express from 'express'
import bodyParser from 'body-parser'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import authRouter from './routers/authRouter.js'
import {PORT} from './config.js'

const api = express()

api.use(bodyParser.json())

api.get('/', (req, res) => {
    res.json({message: "Bem-vindo a minha API"})
})

api.use('/user', userRouter)
api.use('/product', productRouter)
api.use('/auth', authRouter)

api.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}! http://localhost: ${PORT}`)
})