import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
// import "animate.css"
import './App.css'
import { Inscription } from "./Admin/Inscription/Inscription"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
      <div className="container">
        {/* <Navbar/>
        <Sidebar/>
        <Main/> */}
        <Inscription/>
      </div>
  )
}

export default App
