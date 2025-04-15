// import { Children } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({requiredRole,children}) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    
    
    if(!token){
        console.log('token not found');
        
        return <Navigate to="/login" />;
    }
    if(requiredRole && role !== requiredRole){
        console.log('role not found');
        
        return <Navigate to="/login" />
    }
    return children
}