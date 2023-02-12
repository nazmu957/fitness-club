import React from 'react';
import {Search} from '@styled-icons/remix-line/Search'
import {User} from '@styled-icons/fa-regular/User'
import {ShoppingBag} from '@styled-icons/evaicons-solid/ShoppingBag'
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar h-[50px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case lg:text-[40px] font-bold">LOGO.</a>
  </div>

  <div className="navbar-center hidden lg:flex mr-[60rem] ">
    <ul className="menu menu-horizontal font-semibold px-1">
      <li><a>Home</a></li>
      <li><a>Shop</a></li>
      <li><a>About</a></li>
      <li><a>Blog</a></li>
      <li><a>Feature</a></li>
      <li><a>Contacts</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
       <Search className="px-2 h-[20px]"></Search>
       <Link to="login">  <User className="px-2 h-[20px]"></User></Link>
       <ShoppingBag className="px-2 mr-10 h-[20px]" ></ShoppingBag>
  </div>
</div>
        </div>
    );
};

export default Navbar;