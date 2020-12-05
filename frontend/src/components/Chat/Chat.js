import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from '@material-ui/icons'
import React, { useState } from 'react'
import './Chat.css'
import axios from '../../axios'

export const Chat = ({ messages }) => {
  const [input, setInput] = useState('')
  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post('/api/messages/create', {
      text: input,
      sender: 'ddddddddddd',
      datetime: 'now',
      received: false,
    })
    setInput('')
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>title</h3>
          <p>last seen...</p>
        </div>
        <div className="chat__headerIcons">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && 'chat__receiver'}`}
          >
            <span className="chat__name">{message.sender}</span>
            {message.text}
            <span className="chat__datetime">{message.datetime}</span>
          </p>
        ))}
        
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            placeholder="Write a message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton type="submit" onClick={sendMessage}>
            <Send />
          </IconButton>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  )
}
