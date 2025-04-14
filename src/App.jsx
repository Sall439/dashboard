// import Navbar from "./components/Navbar"
// import "animate.css"
import './App.css'
import { InscriptionProvider } from './Admin/useContext/UseInscription'
import { Login } from './Admin/Inscription/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  
  const [livraison, setLivraison] = useState([])

  const handleAddLivraison = (newLiv) => {
    setLivraison(prev => [newLiv, ...prev]) 
  }

  return (
      <div className="app">
       {/* <Inscription/> */}
       <ContentBoard/>
      </div>
  )
}

export default App
