import React from 'react';
import Footer from '../footer/Footer';
import UpperNav from '../Home/upperNav/UpperNav';
import Navbar from '../navbar/Navbar';
import RegisterCard from './RegisterCard';

const Register = () => {
    return (
        <div>
            <UpperNav></UpperNav>
            <Navbar></Navbar>
            <RegisterCard></RegisterCard>
            <Footer></Footer>
        </div>
    );
};

export default Register;