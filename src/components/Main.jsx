import React from 'react'
import Carts from './Carts'
import InputForm from './InputForm'
import LivraisonCard from './LicraisonCard'


const Main = ({livraison}) => {
  return (
    <div className='main'>
        <h1>Bienvenue sur Votre Dashboard</h1>
        <div className='main-head'>
           <div className='head1'>
                <Carts title={"Taches"} img={"fa-solid fa-list-ul"}/>
                <Carts title={"Taches Valides"} img={"fa-solid fa-list-check"}/>
                <Carts title={"Programmes"} img={"fa-solid fa-folder-open"}/>
           </div>
            <div className='body'>
                <InputForm/>
               
                {livraison.map((liv, index) => (
                  <LivraisonCard key={index} livraison={liv}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Main
