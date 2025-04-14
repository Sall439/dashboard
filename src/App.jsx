// import Navbar from "./components/Navbar"

// import "animate.css"
import './App.css'

import { ContentBoard } from "./Admin/ContentBoard"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from "./components/Main"
import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  const [livraison, setLivraison] = useState([])

  const handleAddLivraison = (newLiv) => {
    setLivraison(prev => [newLiv, ...prev]) 
  }

  return (
      <div className="container">
       {/* <Inscription/> */}
       {/* <ContentBoard/> */}
       <Navbar onAddLivraison={handleAddLivraison}/>
       <Sidebar/>
       <Main livraison={livraison}/>
      </div>
  )
}

export default App
