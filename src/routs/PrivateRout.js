import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);

//PAGE REFRESH HOLE OI PAGE E THAKBE
    if(loading){
      return <div>Loading.....</div>
    }
    
    //IF USER STAY LOG IN THEN HE ENTER THE ORDER PAGE OR NOT
    if(user && user.uid){
      return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRout;