/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
const ContextInscription = createContext();
export const InscriptionProvider = ({ children }) => {
    const [authen, setAuthen] = useState({
        name: "",
        prenom: "",
        password: "",
        confirmerPassword: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthen((prev)=>({
             ...prev, 
             [name]: value }
            ));
    };

    const [livraison, setLivraison] = useState([])
    const [showModal, setShowModal] = useState(false);
  const handleAddLivraison = (newLiv) => {
    setLivraison(prev => [newLiv, ...prev]) 
  }

  const url = 'https://serveur-dashboard.onrender.com'
    // navigate
    // const navigate = useNavigate()
   
    const values ={
        authen,handleChange,
        setAuthen,livraison,
        handleAddLivraison,
        showModal,
        setShowModal,
        url
    };
    return <ContextInscription.Provider value={values}>{children}</ContextInscription.Provider>;
}

export const useContextInscription = () => useContext(ContextInscription);