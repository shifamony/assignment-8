import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {

    //usercontext page function is distruchireng is here
    const {user,logOut} = useContext(AuthContext);
    console.log(user);

    //CREATE SIGNOUT FUNCTION IS HERE
    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch((error) => console.error(error))
    }

    return (
        <div>
          <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">DaisyUI</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {user?.email && <span>{user.email}</span>}
            {
                user?.email ? 
                <button onClick={handleSignOut} className='btn btn-sm'>Log Out</button>
                : <Link to='/login'><button className='btn btn-sm'>Log In</button></Link>
            }
          </div>
        </div>
    );
};

export default Header;