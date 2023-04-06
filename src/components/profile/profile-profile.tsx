import React from "react";
import ChangeAvatar from "../modal/change-avatar";
import EditProfile from "../modal/edit-profile";
import ProfileStatics from "./profile-statistic";

const ProfileProfile = () => {
    return(
        <>
           <div className="container-fluid">
            <div className="row justify-content-center text-center">
                <div className="col-md-6">
                    <img src="/assets/profiles/profile1.png" className="img-fluid" alt="" />
                    <h1>James Kingsley</h1>
                    <span>kingjames02@gmail.com</span>
                    <div role="button" className="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-thin fa-pen-to-square" /> edit profile</div>
                </div>   
            </div>
            <ProfileStatics />
           </div>
           <ChangeAvatar />
           <EditProfile />
        </>
    )
}
export default ProfileProfile;