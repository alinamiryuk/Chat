import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'

export const Chat = () => {
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
        <p className="chat__message">
          <span className="chat__name">Alina</span>
          message text
          <span className="chat__datetime">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Alina</span>
          message text
          <span className="chat__datetime">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">You</span>
          message text
          <span className="chat__datetime">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
      </div>
    </div>
  )
}
