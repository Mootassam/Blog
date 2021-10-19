import React from "react";
import { useDispatch } from "react-redux";

import ExperienceForm from "./ExperienceForm";
import actions from "src/modules/experience/form/ExperienceFomrActions";

function ExperienceFormPage() {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(actions.doCreate(values));
  };
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Experience Form</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>experience</div>
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
              <ExperienceForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceFormPage;
