// import Navbar from "./components/Navbar"

// import "animate.css"
import './App.css'

import { ContentBoard } from "./Admin/ContentBoard"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
