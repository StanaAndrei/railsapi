import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import axios from 'axios';
import Header from "./Pages/Header/Header"
import Login from './Pages/Login/Login';
import { axiosInstanceToAPI } from './utils/APIUtils';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';

function App(props) {

    React.useEffect(() => {
        //axios.defaults.headers.common['Authorization'] = token;

        axiosInstanceToAPI.get('/users', {})
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />


                    <Route path="*" element={<null />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;