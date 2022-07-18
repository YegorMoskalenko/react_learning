import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import PostButton from "../button/PostButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <PostButton onClick={logout}>Log out</PostButton>
            <div className="navbar__links">
                <Link style={{marginRight: 10}} to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;