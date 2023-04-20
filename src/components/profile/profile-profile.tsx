import React, { useEffect, useState } from "react";
import { getRequest } from "../../utility/apiRequest";
import ChangeAvatar from "../modal/change-avatar";
import EditProfile from "../modal/edit-profile";
import ProfileStatics from "./profile-statistic";

const ProfileProfile = () => {
    const [currentUser, setCurrentUser] = useState<any>()
    useEffect(() => {
        const getCurrentUser = async() => {
            const fetchCurrentUser = await getRequest('users/current-user');
            return fetchCurrentUser;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setCurrentUser(res.data.data);
                console.log(res.data);
                
                
            }
            return;
        } )
    }, [])
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