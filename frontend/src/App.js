import { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import './App.css'
import { Chat } from './components/Chat/Chat'
import { Sidebar } from './components/Sidebar/Sidebar'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/api/messages/list').then((res) => setMessages(res.data))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('764889e5181e81c377a5', {
      cluster: 'eu',
    })
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
