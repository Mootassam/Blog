import React from "react";
import ContactForm from "./ContactForm";
import actions from "src/modules/contact/form/ContactActions";
import { values } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../../modules/store";
function FomContactPage() {
  const dispatch = useDispatch();
  const doSubmit = (data) => {
    dispatch(actions.doCreate(data));
  };
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
          <div className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              <ContactForm
                onSubmit={doSubmit}
                onCancel={() => getHistory().push("/contact")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FomContactPage;
