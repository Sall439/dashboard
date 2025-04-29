import { useEffect, useState } from "react";
import axios from "axios";
import { useContextInscription } from "../useContext/UseInscription";

const AddTache = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [programmeId, setProgrammeId] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [programmes, setProgrammes] = useState([]);
  const [users, setUsers] = useState([]);

  const {url}= useContextInscription()
  console.log("url backend", url);
  
  // Récupérer programmes et users au chargement
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const progRes = await axios.get(`${url}/admin/programmes`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const userRes = await axios.get(`${url}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProgrammes(progRes.data);
        setUsers(userRes.data);
      } catch (err) {
        console.error("Erreur de chargement des données :", err);
      }
    };

    fetchData();
  }, []);

 
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titre || !description || !programmeId || !assigneeId) {
      alert("Tous les champs sont requis !");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${url}/admin/tasks`, {
        titre,
        description,
        programmeId,
         assigneeId
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
     
      console.log(response.data);
      
      alert("Tâche ajoutée !");
      setTitre("");
      setDescription("");
      setProgrammeId("");
      setAssigneeId("");
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Ajouter une tâche</h2>
      <form onSubmit={handleSubmit} className="w-full p-4 ajouterTaches">

        <div className="mb-3">
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="border p-2 w-full "
        />

        </div>

        <div className="mb-3">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full "
        ></textarea>

        </div>
        
        <div className="mb-3">
        <select
          value={programmeId}
          onChange={(e) => setProgrammeId(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="" className="text-black">-- Sélectionner un programme --</option>
          {programmes.map((prog) => (
            <option key={prog.id} value={prog.id} className="text-black">{prog.titre}</option>
          ))}
        </select>

        </div>

        <div className="mb-3">
        <select
          value={assigneeId}
          onChange={(e) => setAssigneeId(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="" className="text-black">-- Assigner à un utilisateur --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id} className="text-black">
              {user.nom} {user.prenom}
            </option>
          ))}
        </select>

        </div>

        <button type="submit" className="bg-[var(--bg-admin)] text-white p-2 rounded w-full cursor-pointer">
          Ajouter la tâche
        </button>
      </form>
    </div>
  );
};

export default AddTache;
