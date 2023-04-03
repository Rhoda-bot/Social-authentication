import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProfileHome from "../components/profile/profileHome";

const checkAuthenticatedUser = () => {
   const user_token = localStorage.getItem('client_token' || []);
   return user_token && true

}

export const ProtectedRoute = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return isAuthenticated ? <ProfileHome /> : <Navigate to="/auth/email" />
}