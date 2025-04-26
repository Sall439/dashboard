import React from 'react'
import { useContextInscription } from '../Admin/useContext/UseInscription'

const InputForm = () => {

 const {filterName, setFilterName} = useContextInscription()
  return (
    <form id='form'>
        <div className='form'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Rechercher une livraison...' value={filterName} onChange={(e) => setFilterName(e.target.value)}/>
        </div>
    </form>
  )
}

export default InputForm
