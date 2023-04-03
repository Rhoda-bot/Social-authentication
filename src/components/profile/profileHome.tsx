import React from "react";
import Sidebar from "./sidebar";
import OtherCategories from "./other-profile-categories";
import { Outlet } from "react-router-dom";
import NavigationBar from "../reuseables/NavigationBar";

const ProfileHome = () => {

    return(
        <>
        <NavigationBar />
            <div className="profile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 border-end">
                            <Sidebar />
                        </div>
                        <div className="col-md-8 justify-content-center py-2">
                            <Outlet />
                        </div>
                        <div className="col-md-2">
                            <OtherCategories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHome;