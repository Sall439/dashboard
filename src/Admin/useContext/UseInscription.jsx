/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ContextInscription = createContext();
export const InscriptionProvider = ({ children }) => {
    const [authen, setAuthen] = useState({
        name: "",
        prenom: "",
        passworld: "",
        confirmerPassworld: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthen((prev)=>({
             ...prev, 
             [name]: value }
            ));
    };
    const values ={authen,handleChange};
    return <ContextInscription.Provider value={values}>{children}</ContextInscription.Provider>;
}

export const useContextInscription = () => useContext(ContextInscription);