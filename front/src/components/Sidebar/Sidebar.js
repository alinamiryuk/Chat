import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, Chat, MoreVert, DonutLarge } from '@material-ui/icons'
import { SidebarChat } from './SidebarChat/SidebarChat'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars3.githubusercontent.com/u/64744719?s=60&v=4" />
        <div className="sidebar__headerIcons">
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
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="search your chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}
