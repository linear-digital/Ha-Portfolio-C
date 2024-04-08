import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="block">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <h1 className='text-indigo-500 font-bold text-4xl logo-font'>Hazrat Ali</h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 mt-3 anton-regular">
            <li>
              <NavLink to="/dashboard" className="mr-4 hover:underline md:mr-6 ">
                Dashboard
              </NavLink>

            </li>
            <li>
              <NavLink to="/licenseing" className="mr-4 hover:underline md:mr-6">
                Licensing
              </NavLink>
            </li>
            <li>
              <NavLink to="/feedback" className="mr-4 hover:underline md:mr-6 ">
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/achivement" className="hover:underline">
                Achivement
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="ml-4 hover:underline md:mr-6 ">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className=" hover:underline md:mr-6 ">
                Company
              </NavLink>
            </li>
          </ul>
        </div>



      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        Hazrat Ali
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
