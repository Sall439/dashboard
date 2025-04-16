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
import { InscriptionProvider } from './Admin/useContext/UseInscription.jsx'
import { ListeUsers } from './Programmes/ListeUsers.jsx'
import AddTache from './Admin/AddTasks/AjouterTaches.jsx'
import  UsersWithTaches  from './Admin/tachesUsers/TasksUsers.jsx'
import ToutesLesTaches from './Admin/tachesUsers/AllTasks.jsx'
import User from './components/User.jsx'
import MesTaches from './components/Users/TachesUsers.jsx'
import Main from './components/Main.jsx'
import AlLivraisons from './components/Users/AllLivraison.jsx'
import { MesLivraisons } from './components/Users/MesLivraisons.jsx'


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
        } >
          <Route index element={<AcceuilAdmin/>} />
          <Route path="addprogram" element={<AddProgramm/>} />
          <Route path='ListUser' element={<ListeUsers/>}/>
          <Route path='ajouterTaches' element={<AddTache/>}/>
          <Route path='userswithtask' element={<UsersWithTaches/>}/>
          <Route path='alltasks' element={<ToutesLesTaches/>}/>
        </Route>
      <Route path="/users" element={
        <PrivateRoutes requiredRole={"user"}>
          <User/>
        </PrivateRoutes>
        }>
          <Route index element={<Main/>}/>
          <Route path='mestaches' element={<MesTaches/>}/>
          <Route path='meslivraison' element={<MesLivraisons/>}/>
        </Route>
    </Routes>
    </div>
  </Router>

</InscriptionProvider>
}

export default App
