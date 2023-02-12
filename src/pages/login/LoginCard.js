import React from 'react';
import { Link } from 'react-router-dom';

const LoginCard = () => {
    return (
        <div className="flex justify-center pb-[5rem]">
           <div className="">
               <h1 className="text-center lg:text-3xl font-extrabold">Log in</h1>
               <p className="font-bold pb-2">Email</p>
               <input className="border w-full h-[3rem]" type="email" name="" id=""/>
               <p className="font-bold py-3">Password</p>
               <input className="border w-full h-[3rem]" type="password" name="" id=""/>
              <div className="flex py-[2.5rem]">
                   <button className="bg-blue-700 text-white font-bold px-[2.5rem] py-[1rem]">LOGIN</button>
                   <p className="pt-5 pl-5 text-blue-700">Forgot your password?</p>
              </div>
              <h1 className="font-bold text-xl">New Customer?</h1>
              <p className=" py-5">Sign up for an account to take advantage of order tracking  and <br/> history as well as pre-filled forms during checkout on <br/> subsequent orders.</p>
              <Link to="/signup"><button className="bg-teal-400 text-white font-bold px-[2.5rem] py-[1rem]">REGISTER</button></Link>
           </div>
        </div>
    );
};

export default LoginCard;