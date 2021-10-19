import React from "react";
import { Link } from "react-router-dom";
function ExperienceListToolbar() {
  return (
    <>
      <h2 className='section-title'>
        <Link to='education/new'>
          <button className='btn btn-primary'>Add New Education</button>
        </Link>
      </h2>
      <p className='section-lead'>
        Organize and adjust all settings about this site.
      </p>
    </>
  );
}

export default ExperienceListToolbar;
