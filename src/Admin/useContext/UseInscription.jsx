/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> etudiant-noir
const ContextInscription = createContext();
export const InscriptionProvider = ({ children }) => {
    const [authen, setAuthen] = useState({
        name: "",
        prenom: "",
<<<<<<< HEAD
        passworld: "",
        confirmerPassworld: "",
=======
        password: "",
        confirmerPassword: "",
>>>>>>> etudiant-noir
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthen((prev)=>({
             ...prev, 
             [name]: value }
            ));
    };
<<<<<<< HEAD
    const values ={authen,handleChange};
=======

    // navigate
    // const navigate = useNavigate()
   
    const values ={authen,handleChange,setAuthen};
>>>>>>> etudiant-noir
    return <ContextInscription.Provider value={values}>{children}</ContextInscription.Provider>;
}

export const useContextInscription = () => useContext(ContextInscription);