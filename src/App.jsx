
// import { AddLivraison } from './Admin/AddLivraison'
import { AddLivraison } from './Admin/AddLivraison'
import { ContentBoard } from './Admin/ContentBoard'
import { Inscription } from './Admin/Inscription'
import { Navbar } from './Admin/Navbar'
import { Program } from './Admin/Program'
import { Sidebar } from './Admin/Sidebar'
import { TasksInput } from './Admin/TasksInput'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return <div className='app'>
    {/* <Router>
      <Navbar/>
    <div className=" gap-4 flex justify-between">
      <Sidebar/>
      <div className='w-full flex flex-col justify-center items-center'>
      <Routes>
        <Route path="/" element={<TasksInput/>}/>
        <Route path="/livraison" element={<AddLivraison/>}/>
        <Route path="/program" element={<Program/>}/>
      </Routes>

      </div>
    </div>
    </Router> */}
  <Inscription/>
   
  </div>
}

export default App
