import React, { useEffect, useState } from 'react'
import Carts from './Carts'
import InputForm from './InputForm'
import LivraisonCard from './LicraisonCard'
import { useContextInscription } from '../Admin/useContext/UseInscription'
import AlLivraisons from './Users/AllLivraison'
import { FaTasks } from 'react-icons/fa'
import { SiTask } from 'react-icons/si'
import axios from 'axios'


const Main = () => {
  const {url} = useContextInscription()
  const [stats, setStats] = useState({
    totalTaches: 0,
    tachesTerminees: 0,
    totalProgrammes: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${url}/user/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error("Erreur chargement stats :", err.message);
      }
    };

    fetchStats();
  }, []);
  // const {livraison}= useContextInscription()
  return (
    <div className='w-full flex flex-col'>
    <div className='main w-full static md:sticky md:top-0'>
      
        <h1 className='main-title text-center text-3xl font-bold'>Bienvenue sur Votre Dashboard</h1>
        <div className='main-head w-full'>
           <div className='head1 w-full'>

           <div className="carts flex-auto bg-[#fff] text-[#333] text-xl font-bold">
            <FaTasks/>
            <h2>Taches</h2>
            <span>{stats.totalTaches}</span>
           </div>
           <div className="carts flex-auto bg-[#fff] text-[#333] text-xl font-bold">
            <SiTask/>
            <h2>Taches Terminer</h2>
            <span>{stats.tachesTerminees}</span>
           </div>
           <div className="carts flex-auto bg-[#fff] text-[#333] text-xl font-bold">
            <FaTasks/>
            <h2>Programmes</h2>
            <span>{stats.totalProgrammes}</span>
           </div>
              
           </div>
            <div className='body'>
                <InputForm/>
               
            </div>
        </div>
    </div>

    {/* affichages des livraisons */}
    <div className="w-full">
      <AlLivraisons/>
    </div>
    </div>
  )
}

export default Main
