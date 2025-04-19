import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import Deconnexion from "../Deconnexion/Deconnexion";
import { IoMenu } from "react-icons/io5";
export const NavbarAdmin = () => {
    return <div className="p-8 shadow  text-3xl text-[#333] bg-[#fff] sticky top-0 z-10 w-full flex justify-between items-center gap-1 navbarAmin">
       <h1 className="font-bold">administrator Panel</h1> 
       <div className="icons flex gap-4 items-center text-[#FFF]">
        <FaSms className="text-2xl"/>
        <FaBell className="text-2xl"/>
        <FaUserCircle className="text-2xl"/>
        {/* <Deconnexion/> */}
       </div>
       <IoMenu className="menu" onClick={() => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
       }}/>
        </div>;
}

