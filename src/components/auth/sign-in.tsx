import React, { useCallback, useState } from 'react'
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton, GoogleLoginButton, } from "react-social-login-buttons";

const SignIn = () => {
    const [profile, setProfile] = useState<any>([]);
    const [provider, setProvider] = useState('')
    const onLoginStart = useCallback(() => {
        console.log('login start')
      }, [])
    return(
        <>
            <>
                <div>
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
                        <GoogleLoginButton />
                    </LoginSocialGoogle>
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
                        <FacebookLoginButton />
                    </LoginSocialFacebook>
                   
                    {/* <h4>Sign In</h4>
                    <div>
                    {!profile ? <LoginSocialFacebook 
                    appId="220064573844869"
                    onResolve={(response) =>{
                        console.log(response.data)
                        setProfile(response.data)
                    }}
                    onReject={(err) => {
                        console.log(err);
                        
                    }} >
                        <FacebookLoginButton />
                    </LoginSocialFacebook>: ''}
                    {
                        profile ? <div>
                            <h1>{profile.name}</h1>
                            <img src={profile.picture.data.url} alt="" />
                        </div>: ''
                    }
                    </div> */}

                </div>
            </>
        </>
    )
}
export default SignIn;