import React from 'react'

const Navbar = () => {
  return (
   <nav className='navbar'>
        <div className="left">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <p>User Panel</p>
        </div>

        <div className="right">
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-regular fa-bell"></i>
            <i class="fa-regular fa-user"></i>
        </div>
   </nav>
  )
}

export default Navbar
