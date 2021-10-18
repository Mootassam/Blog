import React from "react";

function ExperienceListTable() {
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='card card-large-icons'>
          <div className='card-icon bg-primary text-white'>
            <i className='fas fa-cog'></i>
          </div>
          <div className='card-body'>
            <h4>General</h4>
            <p>
              General settings such as, site title, site description, address
              and so on. General settings such as, site title, site description,
              address and so on. General settings such as, site title, site
              description, address and so on. General settings such as, site
              title, site description, address and so on.
            </p>
            <a href='features-setting-detail.html' className='card-cta'>
              Change Setting <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceListTable;
