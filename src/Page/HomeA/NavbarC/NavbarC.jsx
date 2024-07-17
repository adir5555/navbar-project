// import React from 'react';
import { Link } from 'react-router-dom';
import Reaff from '../../../assets/logoOne.webp';
import { FaCartPlus } from 'react-icons/fa';
import { FiAlignRight } from 'react-icons/fi';

const NavbarC = () => {
  const navlink = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/'>Menu</Link></li>
    <li><Link to='/'>Serect</Link></li>
    <li>
      <details>
        <summary>Read more </summary>
        <ul className="border-double bg-sky-800 border-4 border-indigo-100 rounded-t-none p-7">
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/'>Menu</Link></li>
          <li> <Link to='/'>Serect</Link></li>
        </ul>

      </details>

    </li>
    <button className="btn btn-info">
      <FaCartPlus className="text-2xl mr-2"></FaCartPlus>
      <div className="badge badge-secondary">+0</div>
    </button>
  </>
  return (
    <div className="navbar mt-56
    border-b-4 border-indigo-500
     bg-sky-700 p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignRight className='text-4xl'></FiAlignRight>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-sky-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            {navlink}
          </ul>
        </div>
        <img className='ml-36' src={Reaff} alt="" />
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu text-3xl menu-horizontal px-1">


          {navlink}
        </ul>
      </div>
    </div>
  );
};

export default NavbarC;