import { AddLivraison } from "./AddLivraison";
import { NavbarAdmin } from "./NavbarAdmin";
import { SidebarAmin } from "./SidebarAdmin";

import { TasksInput } from "./TasksInput";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const ContentBoard = () => {
    return <div className=" w-full">
                <NavbarAdmin/>
                <div className="flex">
                    <SidebarAmin/>
                    <AddLivraison/>

                </div>
       
    </div>;
}