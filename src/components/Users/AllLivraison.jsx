import { useEffect, useState } from "react";
import axios from "axios";
import { useContextInscription } from "../../Admin/useContext/UseInscription";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const AlLivraisons = () => {
const [userVotes, setUserVotes] = useState({})

const [livraisons, setLivraisons] = useState([]);
const {url,filterName}= useContextInscription()
  useEffect(() => {
    const fetchLivraisons = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${url}/user/livraisons`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLivraisons(res.data);
      } catch (err) {
        console.error("Erreur :", err.message);
      }
    };

    fetchLivraisons();
  }, []);
// console.log("livraison photo",livraisons);


const handleVote = async (livraisonId, voteType) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${url}/user/vote`, 
      { livraisonId, voteType }, 
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`Vote ${voteType} envoyé pour livraison ${livraisonId}`);
    setUserVotes(prevVotes => ({ ...prevVotes, [livraisonId]: voteType }));
  } catch (err) {
    console.error(err);
  }
};


// const filterLivraisons = () => {
  const filteredLivraisons = livraisons.filter((livraison) => livraison.nom.toLowerCase().includes(filterName.toLowerCase()));
// };

  return (  
    <div className="p-6 max-w-6xl mx-auto mt-8 w-[80%]">
      <h2 className="text-2xl font-bold mb-4"> Livraisons récentes</h2>
      {filteredLivraisons.map((livraison) => (
        <div
          key={livraison.id}
          className="bg-white border shadow rounded-lg mb-4 p-4 w-80%"
        >
          <div className="flex justify-between text-sm text-gray-600">
            <p>
              Par : <strong>{livraison.nom} {livraison.prenom}</strong>
            </p>
            <p>{new Date(livraison.date).toLocaleString()}</p>
          </div>
          <h3 className="text-lg font-bold mt-2 text-[rgb(19,43,78)]">
             {livraison.programme}
          </h3>
          {livraison.description && (
            <p className="mt-1 text-gray-700">{livraison.description}</p>
          )}

          {/* Previews des images livrées */}
          {
  livraison.fichiers.length > 1 ? (
    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
      {livraison.fichiers.map((img, i) => (
        <img
          key={i}
          src={`${url}/uploads/${img}`}
          alt="capture"
          className="rounded shadow-md w-full h-24 object-cover"
        />
      ))}
    </div>
  ) : (
    <div className="mt-3">
      <img
        src={`${url}/uploads/${livraison.fichiers[0]}`}
        alt="capture"
        className="rounded shadow-md w-full h-full object-cover"
      />
    </div>
  )
}
<div className="flex gap-3">
  <button 
    className={`flex-auto p-2 cursor-pointer  text-white rounded-2xl flex items-center justify-center gap-1 
    ${userVotes[livraison.id] === 'like' ? 'bg-green-600' : 'bg-[rgb(19,43,78)] opacity-45'}`} 
    onClick={() => handleVote(livraison.id, "like")}
  >
    <BiSolidLike /> Like
  </button>

  <button 
    className={`flex-auto p-2 cursor-pointer  text-white rounded-2xl flex items-center justify-center gap-1 
    ${userVotes[livraison.id] === 'dislike' ? 'bg-red-600' : 'bg-[rgb(19,43,78)] opacity-45'}`} 
    onClick={() => handleVote(livraison.id, "dislike")}
  >
    <BiSolidDislike /> Dislike
  </button>
</div>


        </div>
      ))}
    {filteredLivraisons.length===0 && <p className="text-center text-gray-500">Aucune livraison pour le moment.</p>}
    </div>
  );
};

export default AlLivraisons;
