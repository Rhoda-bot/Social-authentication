import React, { useEffect, useState } from "react";
import { getRequest } from "../../utility/apiRequest";
import CATEGORIE from "../../utility/categories.json"

const ProfileCategories = () => {
    const categories = CATEGORIE;
    const [niches, setNiches] = useState<any>();
    useEffect(() => {
        const getCurrentUser = async() => {
            const getFavorites = await getRequest('niches');
            return getFavorites;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setNiches(res.data.data);
                
                
            }
            return;
        })
    }, [])


    return(
        <>
            <div className="row mt-3 py-1 justify-content-center">
                {niches?.map((niches:any, id:string) => (
                    <>
                    <div className="row" key={id}>
                        <div className="col-md-6">
                        <h4 className="text-start profile--title">{niches.quizzes! ==  null ? '' : niches.title }</h4>
                        </div>
                        <div className="col-md-6 text-end">
                        {/* <span className="">view all</span> */}
                        {/* <i className="fa-regular fa-arrow-right" /> */}
                        </div>
                            {niches.quizzes?.map(({id, image, tag, title, noOfQuestion, duration}:any) => (
                            <div className="col-md-6 col-lg-4 p-3" key={id}>
                                 <div className="card p-2 h-100 profile__card">
                            <img src={image} alt="Image" />
                             <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 text-start">
                                <span className="profile__card--badge">{tag}</span>
                                </div>
                                <div className="col-md-4 text-end">
                                <i className="fa-regular fa-heart mx-3 me-3 ml-3"/>
                                </div>
                            </div>
                             <h6 className="profile__card--subtitle mt-3">{title}</h6>
                             <span><img src="/assets/icons/pc.png" alt="" />{noOfQuestion} Questions | 
                             <img src="/assets/icons/lamp.png" alt="" /> {duration} Minutes
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