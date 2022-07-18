import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privetRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if(isLoading) {
        return <Loader />
    }

    return (
        // react-router-dom v6
        // <Routes>
        //     <Route path="/about" element={<About />}/>
        //     <Route path="/posts" element={<Posts />}/>
        //     <Route path="/error" element={<Error />}/>
        //     <Route path='*' element={<Navigate to='/error'/>}/>
        // </Routes>

        // react-router-dom v5

        isAuth
            ?
            <Switch>
                {privetRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/posts' />
            </Switch>

            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login' />
            </Switch>
    );
};

export default AppRouter;