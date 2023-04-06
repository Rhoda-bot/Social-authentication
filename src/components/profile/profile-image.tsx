import React, { useState } from "react";
import MEN_PROFILE_PIX from "../../utility/menprofileImages.json"
import WOMEN_PROFILE_PIX from "../../utility/ladyprofileimages.json"

type ImagePropertie = {
    id: number,
    image: string
}

const ImageCheckbox = () => {
    const [profileImages, setProfileImages] = useState<any>(MEN_PROFILE_PIX);
    const [active, setActive] = useState<boolean>(true)
    
    const [checkedImgId, setCheckedImgId] = useState<number | null>(null);
    const handleCheckedboxChannge = (id: number) => {
        setCheckedImgId(id === checkedImgId ? null : id)
        console.log(id);
        
    }

const handleFemaleImages = () => {
    setProfileImages(MEN_PROFILE_PIX);
    setActive(false)
}
const handleMenImages = () => {
    setProfileImages(WOMEN_PROFILE_PIX);
    setActive(true)
}
const handleGetThisImageChecked = (id: number) =>{
    console.log(`you clicked on image id ${id}`);
    
} 
    return(
        <>
            <div className="text-center mb-3 profile__cta d-inline-block p-2">
                    <button onClick={handleFemaleImages} className={active==true ?"profile__cta--inactive" : "profile__cta--active"}>male</button>
                    <button onClick={handleMenImages} className={active==false ?"profile__cta--inactive" : "profile__cta--active"}>female</button>
            </div>
            <div className="row justify-content-center align-center">
                {
                     profileImages.map(({image,id}:ImagePropertie)=>(
                        <div className="col-3 col-md-2 py-2 px-1" key={id}>
                            <label htmlFor={`image-${id}`}>
                                <input type="checkbox"
                                id={`image-${id}`} 
                                onClick={() => handleGetThisImageChecked(id)}
                                checked={id === checkedImgId}
                                style={{
                                    display: 'none'
                                }}
                                />
                                <img src={image} className={`profile__images ${id === checkedImgId ? 'profile__images--unchecked' : 'profile__images--checked'}`} alt="avatar is here" onClick={() => handleCheckedboxChannge(id)}
                                 style={{
                                    cursor: 'pointer'
                                }}
                                />
                            </label>
                        </div>
                    ))
                }
                <div>
                   <label htmlFor="upload">Upload local image</label>
                   <input type="file" name="" id="" />
                </div>
            </div>
        </>
    )
}
export default ImageCheckbox;
