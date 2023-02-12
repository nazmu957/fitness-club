import React from 'react';
import { Link } from 'react-router-dom';

const RegisterCard = () => {
    return (
        <div className="flex justify-center pb-[5rem]">
           <div className="">
               <h1 className="text-center lg:text-3xl font-extrabold">Sign up</h1>

               <p className="font-bold pb-2">First name</p>
               <input className="border w-full h-[3rem]" type="text" placeholder="Enter your first name" name="" id=""/>
               <p className="font-bold py-2">Last name</p>
               <input className="border w-full h-[3rem]" type="text" placeholder="Enter your last name" name="" id=""/>

               <p className="font-bold py-2">Email</p>
               <input className="border w-full h-[3rem]" placeholder="Enter your email" type="email" name="" id=""/>
               <p className="font-bold py-3">Password</p>
               <input className="border w-full h-[3rem]" placeholder="Enter your first password" type="password" name="" id=""/>
              
             
            
              <Link><button className="bg-blue-600 text-white font-bold px-[2.5rem] py-[1rem] mt-5">REGISTER</button></Link>
           </div>
        </div>
    );
};

export default RegisterCard;