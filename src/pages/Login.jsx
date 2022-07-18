import React, {useContext} from 'react';
import PostInput from "../components/UI/input/PostInput";
import PostButton from "../components/UI/button/PostButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Log in page</h1>
            <form onSubmit={login}>
                <PostInput type='text' placeholder='Write a login'/>
                <PostInput type='text' placeholder='Write a pass'/>
                <PostButton>Log in</PostButton>
            </form>
        </div>
    );
};

export default Login;