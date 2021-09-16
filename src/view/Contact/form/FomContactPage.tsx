import React from "react";

function FomContactPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Form Validation</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>
            <a href='#'>Forms</a>
          </div>
          <div className='breadcrumb-item'>Form Validation</div>
        </div>
      </div>

      <div className='section-body'>
        <h2 className='section-title'>Form Validation</h2>
        <p className='section-lead'>
          Form validation using default from Bootstrap 4
        </p>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-12'>
            <div className='card'>
              <form>
                <div className='card-header'>
                  <h4>Default Validation</h4>
                </div>
                <div className='card-body'>
                  <div className='form-group'>
                    <label>Your Name</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label>Subject</label>
                    <input type='email' className='form-control' />
                  </div>
                  <div className='form-group mb-0'>
                    <label>Message</label>
                    <textarea className='form-control' />
                  </div>
                </div>
                <div className='card-footer text-right'>
                  <button className='btn btn-primary'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FomContactPage;
