import React, { useState } from 'react'

const InputForm = () => {

  const [search, setSearch] = useState('')
  return (
    <form id='form'>
        <div className='form'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Rechercher une livraison...' value={''} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    </form>
  )
}

export default InputForm
