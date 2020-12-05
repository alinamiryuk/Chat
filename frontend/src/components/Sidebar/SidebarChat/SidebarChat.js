import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>title</h2>
        <p>last text</p>
      </div>
    </div>
  )
}
