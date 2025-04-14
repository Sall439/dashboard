// import Navbar from "./components/Navbar"
// import "animate.css"
import './App.css'
import { Inscription } from "./Admin/Inscription/Inscription"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Admin/Inscription/Login'
import { PrivateRoutes } from './protectionRoutes/PrivateRoutes'
import { ContentBoard } from './Admin/ContentBoard'
import { AcceuilAdmin } from './AcceuilAdmin/AcceuilAdmin'
import { AddProgramm } from './Programmes/AddProgram'
import { Users } from './components/Users/Users.jsx'
import { InscriptionProvider } from './Admin/useContext/UseInscription.jsx'

function App() {
  
  

  return  <InscriptionProvider>
  <Router>
    <div className="app">
    <Routes>
      <Route path="/" element={<Inscription/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/admin" element={
         <PrivateRoutes requiredRole={"admin"}>
        <ContentBoard/>
      </PrivateRoutes>
        } />
        <Route path="/acceuil" element={
          <AcceuilAdmin/>
        }/>
        <Route path="/addprogram" element={
          
          <AddProgramm/>
        }/>
        
      <Route path="/users" element={
        <PrivateRoutes requiredRole={"user"}>
          <Users/>
        </PrivateRoutes>
        } />
    </Routes>
    </div>
  </Router>

</InscriptionProvider>
}

export default App
