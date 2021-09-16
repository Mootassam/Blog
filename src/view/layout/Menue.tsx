import React from "react";
import { FaBeer } from "react-icons/fa";
import menus from "../menus";
import { Link } from "react-router-dom";
function Menue() {
  return (
    <div className='main-sidebar sidebar-style-2'>
      <aside id='sidebar-wrapper'>
        <div className='sidebar-brand'>
          <a href='index-2.html'>CodiePie</a>
        </div>
        <div className='sidebar-brand sidebar-brand-sm'>
          <a href='index-2.html'>CP</a>
        </div>
        <ul className='sidebar-menu'>
          <li className='menu-header'>Pages</li>
          <li className='dropdown'>
            {menus.map((menue) => (
              <a key={menue.path} href='#' className='nav-link has-dropdown'>
                <Link to={menue.path}>
                  {menue.icon}&nbsp; <span>{menue.label}</span>
                </Link>
              </a>
            ))}

            {/* <ul className='dropdown-menu'>
              <li>
                <a href='auth-forgot-password.html'>Forgot Password</a>
              </li>
              <li>
                <a href='auth-login.html'>Login</a>
              </li>
              <li>
                <a href='auth-register.html'>Register</a>
              </li>
              <li>
                <a href='auth-reset-password.html'>Reset Password</a>
              </li>
            </ul> */}
          </li>
        </ul>
        <div className='mt-4 mb-4 p-3 hide-sidebar-mini'>
          <a
            href='https://getcodiepie.com/docs'
            className='btn btn-primary btn-lg btn-block btn-icon-split'>
            <i className='fas fa-rocket'></i> Documentation
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Menue;
