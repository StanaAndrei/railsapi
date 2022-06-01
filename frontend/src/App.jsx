import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from "./Pages/Header/Header"
import Login from './Pages/Login/Login';
import Settings from './Pages/Settings/Settings';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Users from './Pages/Users/Users';
import UserAPI from './api/UserAPI';

function App(props) {
    const [auth] = React.useState(() => UserAPI.isLoggedIn());

    return (
        <div>
            <Header />
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/settings' element={auth ? <Settings /> : <Navigate replace to='/login' />} />
                        <Route path='/profile/:id' element={auth ? <Profile /> : <Navigate replace to='/login' />} />
                        <Route path='/users' element={auth ? <Users /> : <Navigate replace to='/login' />} />

                        {/**without auth */}
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />

                        <Route path="*" element={
                            <h1 style={{ color: 'red' }}>ERROR 404! <br /> Page not found!</h1>
                        } />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;