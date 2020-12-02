import './App.css'
import { Chat } from './components/Chat/Chat'
import { ChatList } from './components/ChatList/ChatList'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <ChatList />
        <Chat />
      </div>
    </div>
  )
}

export default App
