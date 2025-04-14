import { Link } from "react-router-dom";
import { useContextInscription } from "../useContext/UseInscription";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {authen,handleChange}=useContextInscription();
const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try{
            const response = await axios.post("http://localhost:3000/auth/login", authen)

            localStorage.setItem("token",response.data.token)
            localStorage.setItem("role",response.data.role)
            if(response.data.role === "admin"){
                navigate("/admin")
            }else{
                navigate("/users")
            }
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error.response.data.message);
            } else {
                console.error("Erreur inconnue :", error);
            }
        }
      }

    return <div className="content_inscription w-full flex justify-center items-center h-screen ">
    <div className="w-[600px] bg-[#fff] p-4 ">
    <div className="title">
        <h1 className="text-center font-bold text-4xl shadow-2xl rounded-[10px] text-[rgb(19,43,78)]">Se connecter </h1>
    </div>
    <form action="" className="incription-form p-2" onSubmit={handleSubmit}>
      
          <div className="mb-3  w-full">
            <label htmlFor="passworld" className="block w-full">Mot de passe</label>
            <input type="password" name="password" id="passworld" className="w-full p-2"
             placeholder="Mot de passe" value={authen.password}  onChange={handleChange}/>
          </div>
        
        <div className="mb-3">
            <label htmlFor="email" className="block w-full">Email</label>
            <input type="email" name="email" id="email" className="w-full p-2"
             placeholder="Email" value={authen.email} onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <button className="w-full p-2 bg-[rgb(19,43,78)] text-white font-bold cursor-pointer btn">Se connecter</button>
        </div>
       <p className="text-center mt-2 text-black">Vous n'avez pas de compte ? <Link to="/" className="text-[rgb(19,43,78)] cursor-pointer">Inscrivez-vous</Link></p>
    </form>

    </div>
</div>;
}