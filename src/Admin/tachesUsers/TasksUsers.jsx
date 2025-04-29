import { useEffect, useState } from "react";
import axios from "axios";
import { useContextInscription } from "../useContext/UseInscription";

const UsersWithTaches = () => {
  const [users, setUsers] = useState([]);
const {url} = useContextInscription()
  useEffect(() => {
    const fetchAll = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${url}/admin/users-taches`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Erreur récupération users+tâches :", err.message);
      }
    };

    fetchAll();
  }, []);

  console.log("users", users);
  
 
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Utilisateurs & Leurs Tâches</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border mb-4 rounded shadow w-[70%] mx-auto"
        >
          <div
            className="p-4 bg-blue-50 cursor-pointer flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                {user.nom} {user.prenom} 
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
           
          </div>

          <div className="p-4 bg-white border-t">
              {user.taches.length === 0 ? (
                <p className="text-sm text-gray-500">Aucune tâche assignée.</p>
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  {user.taches?.map((tache) => {
                    return  <li key={tache.id} className="mt-2">
                    <div className="mt-2 border-b-2">
                      <h1 className="text-black font-bold text-2xl
                      ">{tache.titre}</h1>
                      <p className="text-black">{tache.description}</p>
                      <span className=" text-gray-500 mt-2">
                        ({tache.programme || "Sans programme"})
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 text-end">Statut : {tache.status || "en_attente"}</div>
                  </li>
                  })}
                </ul>
              )}
            </div>
        </div>
      ))}
    </div>
  );
};
export default UsersWithTaches;
