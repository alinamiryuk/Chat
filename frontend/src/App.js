import { useEffect } from 'react'
import Pusher from 'pusher-js'
import './App.css'
import { Chat } from './components/Chat/Chat'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {
  useEffect(() => {
    const pusher = new Pusher('764889e5181e81c377a5', {
      cluster: 'eu',
    })
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
