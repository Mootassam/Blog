import React from "react";
import { FaBeer } from "react-icons/fa";
import menus from "../menus";
import { Link } from "react-router-dom";
function Menue(props) {
  const selectedKeys = () => {
    const url = props.url;

    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return url === option.path || url.startsWith(option.path + "/");
    });

    if (match) {
      return [match.path];
    }

    return [];
  };
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
          </li>
        </ul>
        <div className='mt-4 mb-4 p-3 hide-sidebar-mini'>
          <a
            href='https://getcodiepie.com/docs'
            className='btn btn-primary btn-lg btn-block btn-icon-split'>
            <i className='fas fa-rocket'></i> Choose Template
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Menue;
