import React from 'react'

const Sidebar = () => {
  return (
   <aside id='sidebar'>
        <div className="title">
            <i class="fa-solid fa-user-tie"></i>
            <p>Dashbord User</p>
        </div>

        <h2>Toutes les pages</h2>
        <hr />

       <ul>
        <li>
            <a href="#">
                <i class="fa-solid fa-toolbox"></i>
                Dashboard
            </a>
        </li>
       </ul>
   </aside>
  )
}

export default Sidebar
