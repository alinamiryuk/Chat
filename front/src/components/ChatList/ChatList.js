import React from 'react'
import './ChatList.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, Chat, MoreVert, DonutLarge } from '@material-ui/icons'

export const ChatList = () => {
  return (
    <div className="chatlist">
      <div className="chatlist__header">
        <Avatar src="https://avatars3.githubusercontent.com/u/64744719?s=60&v=4" />
        <div className="chatlist__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatlist__search">
        <div className="chatlist__searchContainer">
          <SearchOutlined />
          <input placeholder="search your chat" type="text" />
        </div>
      </div>
    </div>
  )
}
