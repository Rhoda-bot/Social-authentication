import React from "react";

const ProfileCollections = () => {
    return(
        <>
            <div className="profile__banner" style={{
                 backgroundImage: 'url(/assets/explore/Banner.png)',
                 backgroundSize: 'cover',
                 borderRadius: '0 0 1.2rem 1.2rem'
            }}>
                <div className="row text-start ">
                    <div className="col-md-6">
                        <h1>Shape Quest</h1>
                        <p>Test Your Knowledge on Basic Shapes</p>
                        <button className="profile__banner--btn">Play Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileCollections;