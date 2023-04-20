import React, { useState } from "react";
import MEN_PROFILE_PIX from "../../utility/menprofileImages.json"
import WOMEN_PROFILE_PIX from "../../utility/ladyprofileimages.json"
import { patchRequest } from "../../utility/apiRequest";

type ImagePropertie = {
    id: number,
    image: string
}

const ImageCheckbox = () => {
    const [profileImages, setProfileImages] = useState<any>(MEN_PROFILE_PIX);
    const [active, setActive] = useState<boolean>(true)
    const [loading, setIsLoading] = useState(false);
    
    const [checkedImgId, setCheckedImgId] = useState<number | null>(null);
    const [avatar, setAvatar] = useState<any>()
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
const handleGetThisImageChecked = (e:any) =>{
    const {value} = e.target;
    const imgPath = value;
   fetch(imgPath).then(response => response.blob()).then(blob => {
    setAvatar(blob)
   }).catch(err => {
    console.log(err)
   })
    
} 

const saveAvatar = async () => {
    setIsLoading(true);
    const formData = new FormData();
    if (avatar.name) {
        formData.append('image', avatar, avatar.name) 
    }else{
        formData.append("image", avatar, "image.png");
    }
    const result = await patchRequest('users/update-avatar', formData);
    if (result.status == 200) {
        setIsLoading(false);
    }
    
}

    return(
        <>
            <div className="row mx-auto justify-content-center">
            <div className="col-md-5 text-center mb-3 profile__cta d-inline-block p-2">
                    <button onClick={handleFemaleImages} className={active==true ?"profile__cta--inactive" : "profile__cta--active"}>male</button>
                    <button onClick={handleMenImages} className={active==false ?"profile__cta--inactive" : "profile__cta--active"}>female</button>
            </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                {
                     profileImages.map(({image,id}:ImagePropertie)=>(
                        <div className="col-3 col-md-2 py-2 px-1" key={id}>
                            <label htmlFor={`image-${id}`}>
                                <input type="checkbox"
                                id={`image-${id}`} 
                                onChange={handleGetThisImageChecked}
                                checked={id === checkedImgId}
                                style={{
                                    display: 'none'
                                }}
                                value={image}
                                name="selectedImage"
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
                <div className="text-center">
                   {/* <label htmlFor="upload">Upload local image</label>
                   <input type="file" name="" id="" /> */}
                   <div className="file-upload">
                        <label htmlFor="file-input">Upload local image</label>
                        <input id="file-input" type="file" />
                    </div>
                </div>
            </div>
            <div className="modal-footer border-0  justify-content-center">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={saveAvatar}>
                {!loading && 'Save'}
                                            {loading && (
                                                <div className="d-flex justify-content-center">
                                                <div className="spinner-grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                </div>
                                            )}
                </button>
        </div>
        </>
    )
}
export default ImageCheckbox;
