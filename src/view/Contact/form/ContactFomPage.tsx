import React from "react";
import ContactForm from "./ContactForm";

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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FomContactPage;
