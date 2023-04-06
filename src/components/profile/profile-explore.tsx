import React, { useEffect } from "react";
import CATEGORIE from "../../utility/categories.json"

const ProfileCategories = () => {
    const categories = CATEGORIE;

    return(
        <>
            <div className="row mt-3 py-1 justify-content-center">
                {categories?.map((val, index) => (
                    <>
                    <div className="row" key={index}>
                        <div className="col-md-6">
                        <h4 className="text-start profile--title">{val.menu}</h4>
                        </div>
                        <div className="col-md-6 text-end">
                        <span className="">view all</span>
                        <i className="fa-light fa-arrow-right" />
                        </div>
                            {val.categorie?.map(({id, image, description, category}) => (
                            <div className="col-md-6 col-lg-4 p-3" key={id}>
                                 <div className="card p-2 h-100 profile__card">
                            <img src={image} alt="Image" />
                             <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 text-start">
                                <span className="profile__card--badge">{category}</span>
                                </div>
                                <div className="col-md-4 text-end">
                                <i className="fa-thin fa-heart mx-3 me-3 ml-3"/>
                                </div>
                            </div>
                             <h6 className="profile__card--subtitle mt-3">{description}</h6>
                             <span><img src="/assets/icons/pc.png" alt="" /> 15 Questions | 
                             <img src="/assets/icons/lamp.png" alt="" /> 8 Minutes
                             </span>
                             <button className="profile__card--btn"><i className="fa-regular fa-play mx-2"/>Play now</button>
                             </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </>
                ))}
            </div>
        </>
    )
}
export default ProfileCategories