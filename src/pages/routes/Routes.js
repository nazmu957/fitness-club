import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Login from '../login/Login';
import Register from '../register/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signup',
        element: <Register></Register> ,
    }
])

export default router