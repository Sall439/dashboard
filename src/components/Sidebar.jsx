import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
   <aside id='sidebar' className='shadow-2xl w-[350px] sticky top-5'>
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
        <Link to={'/users'} className='text-2xl font-bold'> Acceuil</Link>
        <Link to={'mestaches'} className='text-2xl font-bold'> Mes Taches</Link>
        <Link to={'meslivraison'} className='text-2xl font-bold'> Mes Livraisoin</Link>

        </div>
       </ul>
   </aside>
  )
}

export default Sidebar
