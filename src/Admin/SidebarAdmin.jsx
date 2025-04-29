import { FaTasks } from "react-icons/fa"
import { TiDocumentText } from "react-icons/ti";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import Deconnexion from "../Deconnexion/Deconnexion";
export const SidebarAmin = () => {

    const linkElement = document.querySelectorAll('.sideAmin .link');
    const sidebar = document.querySelector(".sidebar");
    linkElement.forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('active');
        })
    })
    console.log(linkElement)
    return <div className="w-[350px]  h-screen  text-slate-50 sticky top-5 shadow-2xl sidebar">
         <ul className="justify-between  flex flex-col gap-5 list_link">
            <li className="text-[35px] p-4 dasboard-admin">Dashboard Admin</li>

            <h4 className="border-b-4 p-2 text-3xl font-bold">General</h4>
            <div className="p-4 flex flex-col gap-8 sideAmin">
            <Link className=" flex gap-2 items-center font-bold text-xl link" to={"/admin"}> <FaTasks/>Acceuil</Link>
            <Link className=" flex gap-2 items-center font-bold text-xl link" to={"ListUser"}> <FaTasks/>utilisateurs</Link>
            <Link className="flex gap-2 items-center font-bold text-xl link" to={"addprogram"}> <TiDocumentText/>Add Programmes</Link>
            <Link className="flex gap-2 items-center font-bold text-xl link" to={"listeProgramme"}> <TiDocumentText/>Programmes</Link>
            <Link className="flex gap-2 items-center font-bold text-xl link" to={"ajouterTaches"}> <TiDocumentText/>ajouter Taches</Link>
            <Link className="flex gap-2 items-center font-bold text-xl link" to={"alltasks"}> <TiDocumentText/>listes Taches</Link>
            <Link className="flex gap-2 items-center font-bold text-xl link" to={"userswithtask"}> <TiDocumentText/>User-Tasks</Link>
            </div>
         </ul>
         <div className="align-self-end mt-18 cursor-pointer text-xl">
          <Deconnexion/>
         </div>
    </div>
}