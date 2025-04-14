import React from 'react'
import { AddLivraison } from './AddLivraison'

const Navbar = ({onAddLivraison}) => {
  return (
   <nav className='navbar'>
        <div className="left">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <p>User Panel</p>
        </div>

        <div className="add-btn">
          <AddLivraison onAddLivraison={onAddLivraison}/>
        </div>
        <div className="right">
            <i className="fa-regular fa-envelope"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-regular fa-user"></i>
        </div>
   </nav>
  )
}

export default Navbar
