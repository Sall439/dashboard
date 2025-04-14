// import Navbar from "./components/Navbar"
// import "animate.css"
import './App.css'
import { InscriptionProvider } from './Admin/useContext/UseInscription'
import { Inscription } from './Admin/Inscription/Inscription'
import { Login } from './Admin/Inscription/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
        <InscriptionProvider>
          <Router>
            <div className="app">
            <Routes>
              <Route path="/" element={<Inscription/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
            </div>
          </Router>
  
        </InscriptionProvider>
  )
}

export default App
