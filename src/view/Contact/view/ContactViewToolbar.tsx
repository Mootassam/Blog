import React from "react";
import { Link } from "react-router-dom";
function ContactViewToolbar(props) {
  const id = props.match.params.id;

  return (
    <>
      <h2 className='section-title'>
        <Link to={`/contact/${id}/edit/`}>
          <button className='btn btn-primary'>Edit Contact</button>
        </Link>
      </h2>
    </>
  );
}

export default ContactViewToolbar;
