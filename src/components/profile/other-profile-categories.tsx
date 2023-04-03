import  React from "react";
import OTHERCATEGORIES from "../../utility/others.json"

const OtherCategories = () => {
    const othercategories = OTHERCATEGORIES;
    return(
        <>
            {
                othercategories?.map((val, index) => (
                    <div className="row px-1" key={index}>
                        <h5 className="profile--title">{val.desc}</h5>
                        {
                            val.others?.map(({id,image,title, questions}) => (
                                <div className="p-1 mb-2 rounded" style={{
                                    boxShadow: "0px, 3px rgba(50, 50, 71, 0.05)",
                                    backgroundColor: "rgba(50, 50, 71, 0.05)"
                                    }} key={id}>
                                    <div className="row ">
                                        <div className="col-md-3">
                                            <img src={image} alt="image" />
                                        </div>
                                        <div className="col-md-9 text-center ">
                                            <h6 className="profile__card--text">{title}</h6>
                                            <span className="text-start">{questions}</span>
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