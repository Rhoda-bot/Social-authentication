import React from "react";

const ForgotPassword = () => {
    return(
        <div className="signup">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-md-6  signup__col">
                        <div className="signup__col--text">
                            <img src="../../assets/icons/key.png" className="signup__col--key.png" alt="Logo" />
                            <h1 className="card-title signup__col--title">Forgot password?</h1>
                            <p className="signup__col--texts">No worries, we’ll send you reset instructions.</p>
                            <div className="row justify-content-center py-3 text-start">
                                <div className="col-md-8 mb-3 py-3">
                                        <label htmlFor="email" className="signup__col--label">Email address</label>
                                        <input type="text" className="form-control" placeholder="Enter your Email"/>
                                </div>
                                <div className="col-md-8 mb-3 py-3">
                                    <button className="w-100 signup__col--btn3">{`Let's go!`}</button>
                                </div>
                                <div className="col-md-8 text-center">
                                    <p className="signup__col--texts">Back to login</p>
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
    )
}
export default ForgotPassword;