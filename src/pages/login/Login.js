import React from 'react';
import Footer from '../footer/Footer'
import UpperNav from '../Home/upperNav/UpperNav';
import Navbar from '../navbar/Navbar';
import LoginCard from './LoginCard';

const Login = () => {
    return (
        <div>
            <UpperNav></UpperNav>
             <Navbar></Navbar>
             <LoginCard></LoginCard>
            <Footer></Footer>
        </div>
    );
};

export default Login;