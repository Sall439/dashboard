import { useEffect, useState } from "react";
import axios from "axios";
import { useContextInscription } from "../../Admin/useContext/UseInscription";

export const MesLivraisons = () => {
  const [livraisons, setLivraisons] = useState([]);
  const { url } = useContextInscription();

  useEffect(() => {
    const fetchLivraisons = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${url}/user/mes-livraisons`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLivraisons(res.data);
      } catch (err) {
        console.error("Erreur chargement livraisons :", err.message);
      }
    };

    fetchLivraisons();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-5 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-[rgb(19,43,78)]">
        Mes Livraisons
      </h2>

      {livraisons.length === 0 ? (
        <p className="text-center text-gray-500">Aucune livraison pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {livraisons.map((l) => (
            <div key={l.id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between text-sm text-gray-600">
                <p><strong>{l.programme}</strong></p>
                <p>{new Date(l.date).toLocaleString()}</p>
              </div>

              {l.description && (
                <p className="mt-2 text-gray-800">{l.description}</p>
              )}

              {l.fichiers.length > 0 && (
                <div className="mt-4 w-full">
                  {l.fichiers.map((img, index) => (
                    <img
                      key={index}
                      src={`${url}/uploads/${img}`}
                      alt="capture"
                      className="w-full h-full object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

