import React from 'react'

const Sidebar = () => {
  return (
   <aside id='sidebar'>
        <div className="title">
            <i className="fa-solid fa-user-tie"></i>
            <p>Dashbord User</p>
        </div>

        <h2>Toutes les pages</h2>
        <hr />

       <ul>
        <li>
            <a href="#">
                <i className="fa-solid fa-toolbox"></i>
                Dashboard
            </a>
        </li>
       </ul>
   </aside>
  )
}

export default Sidebar
