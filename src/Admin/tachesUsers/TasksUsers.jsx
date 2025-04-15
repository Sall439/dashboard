import { useEffect, useState } from "react";
import axios from "axios";

const UsersWithTaches = () => {
  const [users, setUsers] = useState([]);
  const [opened, setOpened] = useState(null); 

  useEffect(() => {
    const fetchAll = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3000/admin/users-taches", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Erreur récupération users+tâches :", err.message);
      }
    };

    fetchAll();
  }, []);

  const toggleAccordion = (userId) => {
    if (opened === userId) {
      setOpened(null); 
    } else {
      setOpened(userId); 
  };
  }
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Utilisateurs & Leurs Tâches</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border mb-4 rounded shadow"
        >
          <div
            className="p-4 bg-blue-50 cursor-pointer flex justify-between items-center"
            onClick={() => toggleAccordion(user.id)}
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                {user.nom} {user.prenom} ({user.role})
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <span className="text-2xl">
              {opened === user.id ? "−" : "+"}
            </span>
          </div>

          {opened === user.id && (
            <div className="p-4 bg-white border-t">
              {user.taches.length === 0 ? (
                <p className="text-sm text-gray-500">Aucune tâche assignée.</p>
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                  {user.taches.map((tache) => (
                    <li key={tache.id}>
                      <div>
                        <strong>{tache.titre}</strong> – {tache.description}{" "}
                        <span className="text-xs text-gray-500">
                          ({tache.programme || "Sans programme"})
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">Statut : {tache.status || "en_attente"}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
// }
export default UsersWithTaches;
