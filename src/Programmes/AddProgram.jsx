import axios from "axios";
import { useState } from "react";
import { useContextInscription } from "../Admin/useContext/UseInscription";

export const AddProgramm = () => {
    const [titre, setTitre] = useState("")
    const {url} = useContextInscription()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!titre) return;
        try{
            
         const response = await axios.post(`${url}/admin/programme`, 
            {titre},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            } )

            console.log(localStorage.getItem("role"));
            
         console.log(response);
         setTitre("")
        }catch(error) {
            console.log(error.response.data.message);
            
            console.error("Erreur inconnue :", error);
            
        }
    }
    return <div className="flex w-full p-8 justify-center items-center h-screen flex-col gap-6">
        <h1 className="text-center text-3xl font-bold">Ajouter Programmes</h1>
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-1 w-full addprogram">
        <div className=" w-1/2 addinput">
        <input type="text" name="titre" id="titre" className="w-full p-2 border"
         placeholder="ajouter un titre" value={titre} onChange={(e)=>setTitre(e.target.value)}/>
        </div>
       <button type="submit" className="bg-[rgb(19,43,78)] p-2 text-[18px] font-bold rounded-b-sm cursor-pointer">Ajouter</button>
        </form>
    </div>;
}