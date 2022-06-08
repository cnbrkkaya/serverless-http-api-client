import { useState } from 'react'
import './App.css'
import { API } from 'aws-amplify'

function App() {
  const [apiData, setApiData] = useState('')

  const handleClick = async () => {
    const data = await API.get('dev-noteapp', '/note/list', {
      headers: {},
    })
    console.log(data)
    setApiData(data.body)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleClick}>Click me!</button>
      </header>
    </div>
  )
}

export default App
