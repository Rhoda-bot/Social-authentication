import React from "react"

const ResetPasswordMail = () => {
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-md-6 signup__col">
                            <div className="signup__col--text">
                                <img src="/assets/icons/mail.png" className="signup__col--logo" alt="" />
                                <h1 className="card-title signup__col--title">Check your mail</h1>
                                <p className="signup__col--texts py-2">Password reset link has been sent to samplemail@gmail.com</p>
                                <div className="row justify-content-center py-3">
                                    <div className="col-md-8 mt-3">
                                        <p className="signup__col--texts">Didn’t receive the mail?</p>
                                    </div>
                                <div className="col-md-8 mb-2 py-2">
                                    <button className="w-100 signup__col--btn3">Click to resend</button>
                                </div>
                                <div className="col-md-8 mb-3 py-3">
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
        </>
    )
}
export default ResetPasswordMail;