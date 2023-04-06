import  React from "react";
import OTHERCATEGORIES from "../../utility/others.json"

const OtherCategories = () => {
    const othercategories = OTHERCATEGORIES;
    return(
        <>
            {
                othercategories?.map((val, index) => (
                    <div className="row px-1 mt-2" key={index}>
                        <h5 className="profile--title">{val.desc}</h5>
                        {
                            val.others?.map(({id,image,title, questions}) => (
                                <div className="profile__trends card p-1"  key={id}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-3 pe-0">
                                            <img src={image} alt="image" />
                                        </div>
                                        <div className="col-md-9 text-center ps-0">
                                            <h6 className="profile__card--text">{title}</h6>
                                            <span className="text-start">
                                               <img src="/assets/icons/pc.png" alt="" /> {questions}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}
export default OtherCategories;