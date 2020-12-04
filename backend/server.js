import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3001

mongoose 

app.get('/', (req, res) => res.status(200).send('hello world'))

app.listen(port, () => console.log(`port ${port}`))
