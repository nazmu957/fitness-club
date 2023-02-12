import React from 'react';
import Footer from '../../footer/Footer';
import Hero from '../../hero/Hero';
import Navbar from '../../navbar/Navbar';
import Gallery from '../gallery/Gallery';
import Product from '../product/Product';
import UpperNav from '../upperNav/UpperNav';




const Home = () => {
    return (
        <div>
          <UpperNav></UpperNav>
          <Navbar></Navbar>
          <Hero image="https://i.ibb.co/5GzRC16/Group-2.png" />
          <Product></Product>
          <Gallery></Gallery>
          <Footer></Footer>
        </div>
    );
};

export default Home;