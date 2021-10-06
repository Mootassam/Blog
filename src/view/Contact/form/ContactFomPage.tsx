import React from "react";
import ContactForm from "./ContactForm";
import actions from "src/modules/contact/form/ContactActions";
import { values } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../../modules/store";
import selectors from "src/modules/contact/form/ContactSelectors";
import { useRouteMatch } from "react-router-dom";
function FomContactPage(props) {
  const match = useRouteMatch();
  const id = match.params.id;

  const saveLoading = useSelector(selectors.selectSaveLoading);
  const Title = id ? "Edit Contact" : "Add Contact";
  const dispatch = useDispatch();
  const doSubmit = (data) => {
    dispatch(actions.doCreate(data));
  };
  return (
    <section className='section'>
      <div className='section-body'>
        <h2 className='section-title'>{Title}</h2>
        <p className='section-lead'>
          Form validation using default from Bootstrap 4
        </p>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              <ContactForm
                onSubmit={doSubmit}
                saveLoading={saveLoading}
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
