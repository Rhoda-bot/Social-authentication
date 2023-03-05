import React from "react";
import { NavLink } from "react-router-dom";

const VerifyEmail = () => {
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-0 h-100">
                    <div className="row g-0">
                        <div className="col-md-6 signup__col">
                            <div className="signup__col--text">
                                <img src="../../assets/icons/logo.png" className="signup__col--logo" alt="Logo" />
                                <h1 className="card-title signup__col--title">Verify your Email</h1>
                                <p className="signup__col--texts">After entering the code sent to samplemail@gmail.com, you will be logged in.</p>
                                <div className="row justify-content-center py-3 text-start">
                                    <div className="col-md-8 mb-3 py-3">
                                        <label htmlFor="code" className="signup__col--label">Code</label>
                                        <input type="text" className="form-control" placeholder="Enter your code"/>
                                    </div>
                                    <div className="col-md-8">
                                        <button className="w-100 signup__col--btn3">{`Let's go!`}</button>
                                    </div>
                                    <div className="col-md-8 text-center">
                                       <p className="signup__col--texts">{`Didn't get the code?`} <NavLink to="/">Resend code</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 signup__img d-md-block d-sm-none d-xs-none"
                             style={{
                                backgroundImage: 'url(/assets/auth/authbg.png)',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default VerifyEmail;