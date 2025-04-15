import React, { useState } from 'react'

const User = () => {

    const [livraison, setLivraison] = useState([])

  const handleAddLivraison = (newLiv) => {
    setLivraison(prev => [newLiv, ...prev]) 
  }


  return (
    <div className="container">
       <Navbar onAddLivraison ={handleAddLivraison}/>
       <Sidebar/>
       <Main livraison = {livraison}/>
      </div>
  )
}

export default User
