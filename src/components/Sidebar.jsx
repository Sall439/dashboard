import React from 'react'

const Sidebar = () => {
  return (
   <aside id='sidebar'>
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
