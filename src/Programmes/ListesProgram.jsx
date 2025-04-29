import axios from "axios";
import { useEffect, useState } from "react";
import { useContextInscription } from "../Admin/useContext/UseInscription";

export const ListesProgram = () => {
    const [programmes, setProgrammes] = useState([]);
    const {url}= useContextInscription()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem("token");
            const progRes = await axios.get(`${url}/admin/programmes`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            setProgrammes(progRes.data);
          } catch (err) {
            console.error("Erreur de chargement des données :", err);
          }
        };
    
        fetchData();
      }, []);

    const handleDelete = async (programmeId) => {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`${url}/admin/programmes/${programmeId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setProgrammes(programmes.filter((programme) => programme.id !== programmeId));
        } catch (err) {
          console.error("Erreur de suppression du programme :", err);
        }
      };
      
     console.log(programmes);
     

    return <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-3">Listes Programmes</h1>
        <div className="flex gap-2  justify-center w-full mx-auto flex-wrap">
            {programmes.map((programme) => (
                <div key={programme.id} className="border mb-4 rounded shadow w-1/4 mx-auto p-4 h-1/2 flex-auto bg-[#fff]">
                    <h2 className="text-center text-[18px] md:text-2xl text-[#000] font-bold p-2">{programme.titre}</h2>
                    <img src="/public/react.PNG" alt="" />
                    <div>
                        <button className="w-full p-2 bg-[rgb(19,43,78)]
                         text-white font-bold  rounded-xl cursor-pointer" onClick={() => handleDelete(programme.id)}>supprimmer</button>
                    </div>
                </div>
            ))}
    </div>
    </div>;
}