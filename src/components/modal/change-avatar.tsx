import React from "react";
import ImageCheckbox from "../profile/profile-image";

const handleImageSelect = (index: number) =>{
    console.log(`You selected image ${index}`);
    
}

const  ChangeAvatar = () => {
    return(
        <>
         <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header border-0">
                <h4> <i className="fa-regular fa-arrow-left mx-1"></i>Change avatar</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ImageCheckbox />
            </div>
            <div className="modal-footer border-0  justify-content-center">
               
            </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default ChangeAvatar;