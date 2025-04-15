import { Outlet } from "react-router-dom";
import { AcceuilAdmin } from "../AcceuilAdmin/AcceuilAdmin";
import { NavbarAdmin } from "./NavbarAdmin";
import { SidebarAmin } from "./SidebarAdmin";

export const ContentBoard = () => {
    return <div className=" w-full">
                <NavbarAdmin/>
                <div className="flex">
                    <SidebarAmin/>
                    <Outlet/>
                </div>
    </div>;
}