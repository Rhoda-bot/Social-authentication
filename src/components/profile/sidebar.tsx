import React from "react";
import { NavLink } from "react-router-dom";
import SIDEBAR__LIST from "../../utility/sidebar.json"

const Sidebar = () => {
    const sidebarMenu = SIDEBAR__LIST;
    return(
        <>
            {sidebarMenu?.map(({id, name, icon}) => (
               <NavLink to={name.toLocaleLowerCase()} key={id} className="text-decoration-none">
                 <div  className="profile__menu--list mt-1">
                   <i className={`${icon} mx-2`}/> {name}
                </div>
               </NavLink>
            ))}
        </>
    )
}
export default Sidebar;