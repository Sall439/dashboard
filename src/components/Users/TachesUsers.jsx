import { useEffect, useState } from "react";
import axios from "axios";

const MesTaches = () => {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const fetchTaches = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3000/user/mes-taches", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTaches(res.data);
      } catch (err) {
        console.error("Erreur chargement tâches :", err.message);
      }
    };

    fetchTaches();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mes Tâches Assignées</h2>

      {taches.length === 0 ? (
        <p>Aucune tâche assignée pour le moment.</p>
      ) : (
       <div className="w-full p-8 ">
        {taches.map((tache,index)=>(
            <div key={index} className="bg-white shadow-md rounded-lg mb-4">
              <div className="p-4">
                <h1 className="text-xl font-bold">{tache.programme}</h1>
                <h3 className="text-lg font-semibold">{tache.title}</h3>
                <p className="text-gray-600">{tache.description}</p>
              </div>
              <div className="text-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Demmarrer</button>
              </div>
            </div>
        ))}
       </div>
      )}
    </div>
  );
};

export default MesTaches;
