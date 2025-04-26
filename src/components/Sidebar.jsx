import React from 'react'
import { Link } from 'react-router-dom'
import { FaFolder, FaHome, FaTasks } from "react-icons/fa";
const Sidebar = () => {

  return (
   <aside id='sidebar' className='shadow-2xl w-[350px] sticky top-0 h-screen'>
        <h2>Toutes les pages</h2>
        <hr />

       <ul>
        <li>
            <a href="#">
                <i className="fa-solid fa-toolbox"></i>
                Dashboard
            </a>
        </li>
        <div className="flex flex-col gap-5">
        <Link to={'/users'} className='text-2xl font-bold flex items-center gap-2'><FaHome/> Acceuil</Link>
        <Link to={'mestaches'} className='text-2xl font-bold flex items-center gap-2'><FaTasks /> Mes Taches</Link>
        <Link to={'meslivraison'} className='text-2xl font-bold flex items-center gap-2'><FaFolder /> Mes Livraisoin</Link>

        </div>
       </ul>
       {/* <Deconnexion/> */}

   </aside>
  )
}

export default Sidebar
