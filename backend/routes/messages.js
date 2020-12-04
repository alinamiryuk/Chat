import express from 'express'
import Messages from '../models/Messages.js'

const router = express.Router()

router.post('/create', (req, res) => {
  const message = req.body
  Messages.create(message, (err, data) =>
    err ? res.status(500).send(err) : res.status(201).send(data)
  )
})

router.get('/list', (req, res) => {
  Messages.find((err, data) =>
    err ? res.status(500).send(err) : res.status(200).send(data)
  )
})

export { router as messagesRouter }
