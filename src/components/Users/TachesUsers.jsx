import { useEffect, useState } from "react";
import axios from "axios";

const MesTaches = () => {
  const [taches, setTaches] = useState([]);

  // 🔁 Récupération des tâches au chargement
  useEffect(() => {
    fetchTaches();
  }, []);

  const fetchTaches = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:3000/user/mes-taches", {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("données récupérées", res.data);
      setTaches(res.data);
    } catch (err) {
      console.error("Erreur chargement tâches :", err.message);
    }
  };

  // ✅ Démarrer une tâche
  const handleStart = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:3000/user/taches/${id}/start`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTaches(); // refresh les données après action
    } catch (err) {
      console.error("Erreur démarrage :", err.message);
    }
  };

  // ✅ Terminer une tâche (si livraison faite)
  const handleTerminer = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:3000/user/taches/${id}/complete`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTaches(); // refresh
    } catch (err) {
      console.error("Erreur terminaison :", err.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4 text-center text-[rgb(19,43,78)]">
        Mes Tâches Assignées
      </h2>

      {taches.length === 0 ? (
        <p>Aucune tâche assignée pour le moment.</p>
      ) : (
        <div className="w-full p-4">
          {taches.map((tache, index) => {
            const livraisonFaite = tache.livraison === true;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg mb-6 p-4 border border-gray-200"
              >
                <div className="p-2">
                  <h1 className="text-xl font-bold text-[rgb(19,43,78)]">
                    {tache.programme}
                  </h1>
                  <h3 className="text-lg font-semibold">{tache.titre}</h3>
                  <p className="text-gray-600">{tache.description}</p>
                </div>

                <div className="flex gap-2 mt-3">
                  {tache.status === "en_attente" && (
                    <button
                      onClick={() => handleStart(tache.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Démarrer
                    </button>
                  )}

                  {tache.status === "en_cours" && (
                    <>
                      <button
                        disabled
                        className="bg-yellow-500 text-white px-4 py-2 rounded cursor-not-allowed"
                      >
                        Tâche en cours
                      </button>

                      <button
                        disabled={!livraisonFaite}
                        onClick={() => handleTerminer(tache.id)}
                        className={`px-4 py-2 rounded text-white ${
                          livraisonFaite
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Terminer
                      </button>
                    </>
                  )}

                  {tache.status === "terminee" && (
                    <span className="text-green-700 font-bold">
                      ✅ Tâche terminée
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MesTaches;
