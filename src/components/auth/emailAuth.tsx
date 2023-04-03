import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { postRequest } from '../../utility/apiRequest';

const EmailAuth = () => {
    const inputs = {
        email: '',
        password: ''
    }
    const [hideorshowpassword, setPassword] = useState(false);

    const [loading, setIsLoading] = useState(false);

    const {users, setUsers}: any = useContext(UserContext);

    const [inputValues, setInputValues] = useState(inputs)
    const navigate = useNavigate();
    const handleShowAndHideText = () => {
       if (hideorshowpassword === false) {
        setPassword(true);
       }else if(hideorshowpassword === true){
        setPassword(false);
       }
    }

    // THIS FUNCTION BELOW IS TARGETING EVERY VALUE WRITTEN IN THE HTML INPUT TAG
    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    // HANDLE_EMAIL_AUTH IS SUBMITTING THE FORM INPUT VALUES TO THE API ENDPOINT
    const handleEmailAuth = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const api = await postRequest(inputValues, 'auth/sign-on');
        console.log(api);
        if (api.data.msg === "A confirmation code has been sent to your email address." ) {
            navigate('')
        }
        if (api.status === 200) {
            localStorage.setItem('client_token', api.data.token);
            // localStorage.setItem('user_credentials', JSON.stringify(api.data.data.user));
            setUsers({isLoggedIn: true })
            setIsLoading(false);
            setInputValues({email: '', password: ''});
            navigate('/explore')
        }
        
        
    } 
    const {email, password} = inputValues;
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-md-6 signup__col">
                            <form>
                            <div className="signup__col--text">
                                <img src="../../assets/icons/logo.png" className="signup__col--logo" alt="Logo" />
                                <h1 className="card-title signup__col--title">Continue with Email</h1>
                                <p className="signup__col--texts">Please fill all the input field.</p>
                                <div className="row justify-content-center py-3 text-start">
                                    <div className="col-md-8 mb-3">
                                        <label htmlFor="email" className="signup__col--label">Email</label>
                                        <input type="text"
                                         className="form-control"
                                          placeholder="Enter your Email" 
                                          value={email}
                                          onChange={handleInputChange}
                                          name="email"
                                          />
                                    </div>
                                   <div className="col-md-8">
                                   <label htmlFor="password" className="signup__col--label">Password</label>
                                   </div>
                                    <div className="col-md-8 mb-3 position-relative">
                                        <input type={hideorshowpassword === false? "password" : "text" }
                                        className="form-control"
                                         value={password} 
                                         placeholder="Password"
                                         onChange={handleInputChange}
                                         name="password"
                                         />
                                        <i className={hideorshowpassword === false?"fa-regular fa-eye signup__col--eye": "fa-regular fa-eye-slash signup__col--eye"} role="button" onClick={handleShowAndHideText}/>
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <NavLink to="/auth/forgot-password ">Forgot password?</NavLink>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                        <button className="w-100 signup__col--btn3" onClick={handleEmailAuth}>
                                        {!loading && 'Continue'}
                                            {loading && (
                                                <div className="d-flex justify-content-center">
                                                <div className="spinner-grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </form>
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