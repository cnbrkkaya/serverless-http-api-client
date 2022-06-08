// import { useState } from 'react'
// import './App.css'
// import { API } from 'aws-amplify'

// function App() {
//   const [apiData, setApiData] = useState('')

//   const handleClick = async () => {
//     const data = await API.get('dev-noteapp', '/note/list', {
//       headers: {},
//     })
//     console.log(data)
//     setApiData(data.body)
//   }
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <button onClick={handleClick}>Click me!</button>
//       </header>
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import MainPage from './Pages/MainPage/MainPage'
import CreatePage from './Pages/CreatePage/CreatePage'
import NotePage from './Pages/NotePage/NotePage'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className='grid place-items-center h-screen mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/notes/:id' element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  )
}

export default App
