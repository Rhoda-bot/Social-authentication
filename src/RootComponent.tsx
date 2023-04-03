import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './components/auth/sign-in'
import SignUp from './components/auth/Sign-up'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmailAuth from './components/auth/emailAuth'
import VerifyEmail from './components/auth/verifyEmail'
import ForgotPassword from './components/auth/forgotPassword'
import ResetPassword from './components/auth/ResetPassword'
import ResetPasswordMail from './components/auth/resetPasswordMail'
import ResetPasswordMsg from './components/auth/checkPasswordMsg'
import NavigationBar from './components/reuseables/NavigationBar'
import Explore from './components/profile'
import ProfileHome from './components/profile/profileHome'
import { ProtectedRoute } from './resources/protectedRoute'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                    {/* AUTHENTICATION PAGES */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/auth/sign-up" element={<SignUp />} />
                <Route path="/auth/email" element={<EmailAuth />} />
                <Route path="/auth/verify-email" element={<VerifyEmail />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/auth/reset-password-mail" element={<ResetPasswordMail />} />
                <Route path="/auth/success" element={<ResetPasswordMsg />} />
                    {/* AUTHENTICATION PAGES */}
                
                <Route path='/' element={<ProtectedRoute />}>
                    <Route path="explore" element={<Explore/>}/>
                    
                </Route>
            </Routes>
        </Router>
    )
}

export default RootComponent
