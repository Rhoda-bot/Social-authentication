import React from "react";

const EditProfile = () => {
    return(
        <>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header border-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-6">
                        <img src="/assets/profiles/profile1.png" alt="" />
                        <div className="pt-2">
                        <button className="rounded-pill py-1 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{
                            backgroundColor: 'transparent',
                            border: '1px solid blue',
                            color: 'blue'

                        }}>change avatar</button>
                        </div>
                    </div>
               </div>
               <div className="row mt-2">
                <div className="col-md-12 mb-2">
                    <label htmlFor="name" className="text-start">Name</label>
                    <input type="text" name="name" className="form-control" placeholder=""/>
                </div>
                <div className="col-md-12 mt-1">
                    <label htmlFor="name" className="text-start">Country</label>
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Nigeria</option>
                    <option value="1">Canada</option>
                    <option value="2">Ghana</option>
                    <option value="3">United Kingdom</option>
                    </select>

                </div>
               </div>
            </div>
            <div className="modal-footer border-0  justify-content-center">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default EditProfile;