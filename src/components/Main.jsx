import React from 'react'
import Carts from './Carts'
import InputForm from './InputForm'
import CartUser from './CartUser'
import image from "../assets/1328670.jpeg"

const Main = () => {
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
                <CartUser username={"Saliou"} date={"10/02/2003"} title_img={"Attaque des titans"} img={image}/>
            </div>
        </div>
    </div>
  )
}

export default Main
