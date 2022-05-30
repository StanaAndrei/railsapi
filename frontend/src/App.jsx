import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from "./Pages/Header/Header"
import Login from './Pages/Login/Login';
import Settings from './Pages/Settings/Settings';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';

function App(props) {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />

                    <Route path="*" element={<null />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;