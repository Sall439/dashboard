import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useContextInscription } from "../Admin/useContext/UseInscription";

export const AddLivraison = ({ onAddLivraison }) => {
  const [showForm, setShowForm] = useState(false);
  const [programmeId, setProgrammeId] = useState("");
  const [tacheId, setTacheId] = useState("");
  const [programmes, setProgrammes] = useState([]);
  const [taches, setTaches] = useState([]);
  const descRef = useRef();
  const imgRef = useRef();

  const { url } = useContextInscription();

  // Récupérer programmes + tâches en cours
  useEffect(() => {
    const fetchData = async () => {
      if (!showForm) return;

      const token = localStorage.getItem("token");
      try {
        const progRes = await axios.get(`${url}/user/mes-programmes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProgrammes(progRes.data);

        const tacheRes = await axios.get(`${url}/user/mes-taches`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const enCours = tacheRes.data.filter((t) => t.status === "en_cours");
        setTaches(enCours);
      } catch (err) {
        console.error("Erreur chargement :", err.message);
      }
    };

    fetchData();
  }, []);

  // Envoi de la livraison
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!programmeId || !tacheId) {
      alert("Choisis un programme et une tâche");
      return;
    }

    const formData = new FormData();
    formData.append("programme_id", programmeId);
    formData.append("tache_id", tacheId);
    formData.append("description", descRef.current.value || "");
    Array.from(imgRef.current.files).forEach((file) =>
      formData.append("captures", file)
    );

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${url}/user/livraison`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Livraison envoyée avec succès");
      onAddLivraison && onAddLivraison(res.data);
      setShowForm(false);
      setProgrammeId("");
      setTacheId("");
      descRef.current.value = "";
      imgRef.current.value = null;
    } catch (err) {
      console.error("Erreur envoi :", err.message);
      alert("Erreur lors de la livraison");
    }
  };

  return (
    <div>
      <button
        className="bg-slate-50 text-[#000] p-1 rounded"
        onClick={() => setShowForm(true)}
      >
        Livrer mon travail
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmitForm}
            className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
          >
            <h2 className="text-xl text-black font-semibold text-center">
              Nouvelle Livraison
            </h2>

            {/* 🔽 Sélection du programme */}
            <select
              value={programmeId}
              onChange={(e) => setProgrammeId(e.target.value)}
              className="w-full border p-2 text-black rounded"
              required
            >
              <option value="">-- Choisir un programme --</option>
              {programmes.map((prog) => (
                <option key={prog.id} value={prog.id}>
                  {prog.titre}
                </option>
              ))}
            </select>

            {/* 🔽 Sélection de la tâche en cours */}
            <select
              value={tacheId}
              onChange={(e) => setTacheId(e.target.value)}
              className="w-full border p-2 text-black rounded"
              required
            >
              <option value="">-- Choisir une tâche en cours --</option>
              {taches.map((tache) => (
                <option key={tache.id} value={tache.id}>
                  {tache.titre}
                </option>
              ))}
            </select>

            {/* wDescription */}
            <textarea
              placeholder="Description (optionnelle)"
              ref={descRef}
              className="w-full text-black outline-none border px-3 py-2 rounded"
            />

            {/*Upload fichiers */}
            <input
              type="file"
              ref={imgRef}
              multiple
              accept="image/*"
              className="w-full border px-4 py-3 rounded text-black outline-none"
              required
            />

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Confirmer
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
