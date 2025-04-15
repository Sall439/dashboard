import { useEffect, useState } from "react";
import axios from "axios";

const ToutesLesTaches = () => {
  const [taches, setTaches] = useState([]);
  const [users, setUsers] = useState([]);
  const [assigningId, setAssigningId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const [resTaches, resUsers] = await Promise.all([
          axios.get("http://localhost:3000/admin/taches", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:3000/admin/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setTaches(resTaches.data);
        setUsers(resUsers.data);
      } catch (err) {
        console.error("Erreur chargement :", err.message);
      }
    };

    fetchData();
  }, []);

  const handleAssign = async (tacheId, assignee_id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:3000/admin/taches/${tacheId}/assign`,
        { assignee_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTaches((prev) =>
        prev.map((t) =>
          t.id === tacheId ? { ...t, assignee_id, assignee_nom: users.find(u => u.id === parseInt(assignee_id))?.nom } : t
        )
      );

      setAssigningId(null);
    } catch (err) {
      console.error("Erreur assignation :", err.message);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Toutes les tâches</h1>
      <table className="w-full border">
        <thead>
          <tr className="">
            <th className="p-2 border">Titre</th>
            <th className="p-2 border">Programme</th>
            <th className="p-2 border">Statut</th>
            <th className="p-2 border">Assignée à</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((tache) => (
            <tr key={tache.id}>
              <td className="p-2 border">{tache.titre}</td>
              <td className="p-2 border">{tache.programme_id || "N/A"}</td>
              <td className="p-2 border">{tache.status || "en_attente"}</td>
              <td className="p-2 border">
                {tache.assignee_nom || "Non assignée"}
              </td>
              <td className="p-2 border">
                {assigningId === tache.id ? (
                  <select
                    onChange={(e) => handleAssign(tache.id, e.target.value)}
                    defaultValue=""
                    className="p-1 border bg-[rgb(19,43,78)] text-white"
                  >
                    <option value="" disabled>
                      -- Choisir un utilisateur --
                    </option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.nom} {user.prenom}
                      </option>
                    ))}
                  </select>
                ) : (
                  <button
                    onClick={() => setAssigningId(tache.id)}
                    className="bg-[#fff] text-[rgb(19,43,78)] px-3 py-1  p-2 rounded-2xl"
                  >
                    Assigner à...
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToutesLesTaches;
