import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getRequest } from "../../utility/apiRequest";


const NavigationBar = () => {
const getToken = localStorage.getItem('client_token');
    const navigate = useNavigate();
    const [user, setUser] = useState<any>();
    
    // const getUser =   getCurrentUser();
    // console.log(getUser);
    
    
    useEffect(() => {
        if(!getToken){
            navigate('/auth/email')
        }
        const getCurrentUser = async() => {
            const fetchCurrentUser = await getRequest('users/current-user');
            return fetchCurrentUser;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setUser(res.data.data);
                
            }
        } )
        
        
    }, [getToken])
    
    console.log(user);
    return(
        <>
            <div className="navigation">
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid px-3  mx-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/icons/logo.webp" alt="logo" width={120}  className="img-fluid"/>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navigation__menu">
                        <li className="nav-item  px-3">
                            <div className="position-relative">
                                <input className="form-control me-2 navigation__menu--input " type="search" placeholder="Search" aria-label="Search" />
                                <i className="fa-light fa-magnifying-glass position-absolute navigation__menu--search"/>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <ul className="navbar-nav">
                      <li className="nav-item px-3 pt-3">
                       <i className="fa-light fa-bell  position-relative ">
                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-primary rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                        </i>
                       </li>
                       <li className="nav-item px-3 pt-1">
                        <img src={(user?.avatar === null) ? "/assets/profiles/profile1.png" : user?.avatar} width={30} height={30} alt="" />
                       </li>
                      <li className="nav-item px-3 pt-1">
                        <h5>{user?.name}</h5>
                        <span style={{
                            fontSize: "15px",
                            lineHeight: -1
                        }}>{user?.email}</span>
                      </li>
                      </ul>
                    </form>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}
export default NavigationBar;