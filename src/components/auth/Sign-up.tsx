import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";

const SignUp = ()=> {
    const clientId = "184628107104-n1v1s4c1knqgd1hs54mohostimrqrn4u.apps.googleusercontent.com"
    const [profile, setProfile] = useState<any>([]);
    const [provider, setProvider] = useState('')
    const onLoginStart = useCallback(() => {
        console.log('login start')
      }, [])
      const navigate = useNavigate();
    const handleEmailNavigate = () => {
        navigate('/auth/email')
    }
    return(
        <>
        <div className="signup ">
            <div className="container-fluid p-0 h-100">
                <div className="row g-0">
                    <div className="col-md-6 signup__col">
                        <div className="signup__col--text">
                            <img src="/assets/icons/logo.png" className="signup__col--logo" alt="" />
                                <h1 className="card-title signup__col--title">Easily Log in or Sign up</h1>
                                <p className="signup__col--texts">To proceed, please use your email or an alternative service.</p>
                                <div className="row justify-content-center py-3">
                                    <div className="col-md-8 mb-2">
                                     <LoginSocialGoogle 
                                            isOnlyGetToken
                                            client_id="184628107104-n1v1s4c1knqgd1hs54mohostimrqrn4u.apps.googleusercontent.com"
                                            onLoginStart={onLoginStart}
                                            onResolve={({ provider, data }: any) => {
                                                setProvider(provider)
                                                setProfile(data)
                                            }}
                                            onReject={(err) => {
                                                console.log(err)
                                            }}
                                        >
                                            <div className="signup__col--btn" role="button"> 
                                                <img src="/assets/icons/google.png" className=" signup__col--icon" alt="" />  
                                              <span>
                                                 Continue with Google
                                                </span>
                                                
                                            </div>
                                        </LoginSocialGoogle>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                    <LoginSocialFacebook
                                        appId="220064573844869"
                                        onResolve={(response) =>{
                                            console.log(response.data)
                                            setProfile(response.data)
                                        }}
                                        onReject={(err) => {
                                            console.log(err);
                                            
                                        }}
                                        >
                                           <div className="signup__col--btn" role="button"> 
                                                <img src="/assets/icons/facebook.png" className=" signup__col--icon" alt="" />  
                                              <span>
                                                 Continue with Facebook
                                                </span>
                                                
                                            </div>
                                        </LoginSocialFacebook>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                        <div className="signup__col--btn2" role="button" onClick={handleEmailNavigate}> 
                                                <img src="/assets/icons/love-mail.png" className=" signup__col--icon" alt="" />  
                                              <span>
                                                 Continue with Email
                                                </span>
                                                
                                        </div>
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
export default SignUp;