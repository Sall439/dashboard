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

    // navigate
    // const navigate = useNavigate()
   
    const values ={authen,handleChange,setAuthen};
    return <ContextInscription.Provider value={values}>{children}</ContextInscription.Provider>;
}

export const useContextInscription = () => useContext(ContextInscription);