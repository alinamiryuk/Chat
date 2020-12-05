import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { messagesRouter } from './routes/messages.js'
import { pusher } from './pusher.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const DB_KEY = process.env.DB_KEY

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use('/api/messages', messagesRouter)

app.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`port ${PORT}`)

  mongoose.connect(DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  const db = mongoose.connection

  db.once('open', () => {
    console.log('database connected')

    const messagesCollection = db.collection('messages')
    const changeStream = messagesCollection.watch()

    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument
        pusher.trigger('messages', 'inserted', {
          sender: messageDetails.sender,
          text: messageDetails.text,
        })
      } else {
        console.log('error pusher')
      }
    })
  })
})
