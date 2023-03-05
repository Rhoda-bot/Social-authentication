import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const EmailAuth = () => {
    const [password, setPassword] = useState(false);
    const handleShowAndHideText = () => {
       if (password === false) {
        setPassword(true);
       }else if(password === true){
        setPassword(false);
       }
    }
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-md-6 signup__col">
                            <div className="signup__col--text">
                                <img src="../../assets/icons/logo.png" className="signup__col--logo" alt="Logo" />
                                <h1 className="card-title signup__col--title">Continue with Email</h1>
                                <p className="signup__col--texts">Please fill all the input field.</p>
                                <div className="row justify-content-center py-3 text-start">
                                    <div className="col-md-8 mb-3">
                                        <label htmlFor="email" className="signup__col--label">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter your Email"/>
                                    </div>
                                   <div className="col-md-8">
                                   <label htmlFor="password" className="signup__col--label">Password</label>
                                   </div>
                                    <div className="col-md-8 mb-3 position-relative">
                                        <input type={password === false? "password" : "text" }className="form-control" placeholder="Password"/>
                                        <i className={password === false?"fa-regular fa-eye signup__col--eye": "fa-regular fa-eye-slash signup__col--eye"} role="button" onClick={handleShowAndHideText}/>
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <NavLink to="/auth/forgot-password ">Forgot password?</NavLink>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                        <button className="w-100 signup__col--btn3">Continue</button>
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
export default EmailAuth