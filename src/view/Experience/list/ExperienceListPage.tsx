import React from "react";

function PortfolioListPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Experience</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Settings</div>
        </div>
      </div>

      <div className='section-body'>
        <h2 className='section-title'>
          <button className='btn btn-primary'>Add New Experience</button>
        </h2>
        <p className='section-lead'>
          Organize and adjust all settings about this site.
        </p>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='card card-large-icons'>
              <div className='card-icon bg-primary text-white'>
                <i className='fas fa-cog'></i>
              </div>
              <div className='card-body'>
                <h4>General</h4>
                <p>
                  General settings such as, site title, site description,
                  address and so on.
                </p>
                <a href='features-setting-detail.html' className='card-cta'>
                  Change Setting <i className='fas fa-chevron-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioListPage;
