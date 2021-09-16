import React from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
function ContactListToolbar() {
  return (
    <h2 className='section-title'>
      <Link to='/contact/new'>
        <button className='btn btn-primary'>Add New Contact</button>
      </Link>
    </h2>
  );
}

export default ContactListToolbar;
