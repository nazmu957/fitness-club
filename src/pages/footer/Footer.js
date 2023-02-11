import React from 'react';

import { FaTwitter} from "react-icons/fa";
import { FaFacebookF} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
  <div>
    <span className="font-bold text-4xl text-white pb-5">LOGO.</span> 
     <p>Be the first who learns about our</p>
     <p>great promotions!</p>

     <h1>FOLLOW US</h1>
      <div className="flex py-5">
          <div className="text-2xl px-[.4rem] py-[.4rem] rounded-sm bg-blue-700">
          <FaTwitter></FaTwitter>
      </div>
      <div className="text-2xl px-[.4rem] py-[.4rem] rounded-sm ml-4 border ">
          <FaFacebookF></FaFacebookF>
      </div>
      <div className="text-2xl px-[.4rem] py-[.4rem] rounded-sm ml-4 border ">
          <FaInstagram></FaInstagram>
      </div>
      </div>
     
    
  </div> 
  <div>
    <span className="text-white text-base font-bold ">Products</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="text-white text-base font-bold">CATEGORY</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="text-white text-base font-bold">Info</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="text-white text-base font-bold">SUBSCRIBE</span> 
    <div className="form-control  w-80">
        <p>Subscribe our newsletter and get</p>
        <p className="py-5">discount  30% off</p>
       
      <div className="relative">
        <input type="text" placeholder="Enter your email..." className="input bg-black border-white input-bordered rounded-none w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-none">SIGN UP</button>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;