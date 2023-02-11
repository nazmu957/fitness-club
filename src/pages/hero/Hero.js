import React from 'react';
import banner from '../../assets/Group 2.png'

const Hero = ({ image}) => {
    return (
       <div>
            <div  className='bg-red-100' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '720px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="text-white lg:text-8xl text-4xl font-bold">
            <h1 className="my-5">Sports Clothing & </h1>
            <h1 className="my-5">Fitness Equipment</h1>
            <h1 className="my-5">Shopify Theme</h1>
            <button className="lg:text-base text-xs bg-blue-600 lg:px-[3rem] px-[1.5rem] lg:py-[1.5rem] py-[.7rem] lg:ml-[20rem]">VIEW SHOP</button>
        </div>
    </div>
      
       </div>
    );
};

export default Hero;