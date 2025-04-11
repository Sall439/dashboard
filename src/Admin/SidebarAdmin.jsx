import { FaTasks } from "react-icons/fa"
import { TiDocumentText } from "react-icons/ti";
import { FaFolder } from "react-icons/fa";
// import { Link } from "react-router-dom";
export const SidebarAmin = () => {
    return <div className="w-[300px] bg-teal-400 h-screen  text-slate-50 fixed shadow-2xl sidebar">
         <ul className="justify-between  flex flex-col gap-5 list_link">
            <li className="text-[35px] p-4 dasboard-admin">Dashboard Admin</li>

            <h4 className="border-b-4 p-2 text-3xl font-bold">General</h4>
            <div className="p-4 flex flex-col gap-5">
            <li className=" flex gap-2 items-center font-bold text-2xl" to={"/"}> <FaTasks/>Tasks</li>
            <li className="flex gap-2 items-center font-bold text-2xl" to={"/program"}> <TiDocumentText/>Programm</li>
            <li className="flex gap-2 items-center font-bold text-2xl" to="/livraison"> <FaFolder/>Add Livraison</li>

            </div>
         </ul>
    </div>
}