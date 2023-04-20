import React, { useEffect, useState } from 'react'
import { getRequest } from '../../utility/apiRequest'

const ProfileFavourites = () => {
    const [favorites, setFavorites] = useState<any>()
    useEffect(() => {
        const getCurrentUser = async() => {
            const getFavorites = await getRequest('users/current-user');
            return getFavorites;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setFavorites(res.data.data);
                
                
            }
            return;
        })
    }, [])
    console.log(favorites);
    return(
        <>
            <h1>Favourites</h1>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-6 p-2 p-lg-3">
                        <div className="card p-1 p-lg-2 h-100">
                            <img src="/assets/explore/frame.png" alt="" />
                            <div className="card-body p-0 py-1 py-lg-2 pb-0 pb-lg-0 px-1">
                                <div className="row align-items-center mb-xxl-1">
                                    <div className="col-lg-6">
                                        <div className="d-inline-flex py-1">
                                            <div className="py-1 px-3 rounded-pill">
                                                <label>Blackberry</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                    <p className='card-title m-0 py-1 mb-xl-1'>Test for David</p>
                                    <p className="card-text">
                                        <small className='d-flex align-items-center fs-small'>
                                            <img src="/assets/icons/pc.png" alt="" /> 3 Questions | 2 Mins
                                        </small>
                                    </p>
                                </div>
                                <div className=" p-1">
                                    <button className="profile__card--btn"><i className="fa-regular fa-play mx-2"/>Play now</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}
export default ProfileFavourites;