import React from 'react'
import { AddLivraison } from './AddLivraison'
import Deconnexion from '../Deconnexion/Deconnexion'
import { IoMenu } from 'react-icons/io5'

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
            <Deconnexion/>
        </div>
        <IoMenu className='menu' onClick={() => {
          const sidebar = document.querySelector("#sidebar");
          sidebar.classList.toggle("active");
          console.log(sidebar);
          
        }}/>
   </nav>
  )
}

export default Navbar
