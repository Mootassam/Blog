import React from "react";
import ExperienceForm from "./EducationForm";

function experienceFormPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Education Form</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>education</div>
        </div>
      </div>
      <div className='section-body'>
        <h2 className='section-title'>Add Education</h2>
        <p className='section-lead'>
          Form validation using default from Bootstrap 4
        </p>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              <ExperienceForm
                onSubmit={() => {
                  alert("nice form");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experienceFormPage;
