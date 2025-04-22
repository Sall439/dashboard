import { useEffect, useState } from "react";
import "./acceuil.css" 
import axios from "axios";
import { FaUsers } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { useContextInscription } from "../Admin/useContext/UseInscription";
export const AcceuilAdmin = () => {

  const {url}= useContextInscription()
    const [stats, setStats] = useState({
        taches: 0,
        programmes: 0,
        utilisateurs: 0
      });
      useEffect(() => {
        const fetchStats = async () => {
          const token = localStorage.getItem("token");
          try {
            const res = await axios.get(`${url}/admin/stats`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setStats(res.data);
          } catch (err) {
            console.error("Erreur récupération stats :", err);
          }
        };
    
        fetchStats();
      }, []);


    return <div className="flex justify-between p-6 items-center gap-4 w-full flex-wrap acceuiladmin">
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
            <div className="w-full flex justify-center mb-4">
            <FaUsers className="text-3xl text-[#fff] text-center"/>

            </div>
            <h1 className="text-center text-3xl text-[#333]">Utilisateurs</h1>
            <span className="text-3xl text-center text-[#333] mt-4">{stats.utilisateurs}</span>
        </div>
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
        <div className="w-full flex justify-center mb-4">
            <MdTask className="text-3xl text-[#fff] text-center"/>
        </div>
            <h1 className="text-center text-2xl text-[#333]">Taches</h1>
            <span className="text-3xl text-center text-[#333]">{stats.taches}</span>
        </div>
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
        <div className="w-full flex justify-center mb-4">
            <BsListTask className="text-3xl text-[#fff] text-center"/>
        </div>
            <h1 className="text-center text-2xl text-[#333]">Programmes</h1>
            <span className="text-2xl text-center text-[#333]">{stats.programmes}</span>
        </div>
    </div>;
}