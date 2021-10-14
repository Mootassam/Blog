import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import actions from "src/modules/contact/form/ContactActions";

import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../../modules/store";
import selectors from "src/modules/contact/form/ContactSelectors";
import { useRouteMatch } from "react-router-dom";
import Spinner from "../../shared/Spinner/Spinner";
function FomContactPage() {
  const [dispatched, setdispatched] = useState(false);
  const match = useRouteMatch();
  const record = useSelector(selectors.selectRecord);
  const saveLoading = useSelector(selectors.selectSaveLoading);
  const initLoading = useSelector(selectors.initLoading);
  const isEditing = Boolean(match.params.id);
  const Title = isEditing ? "Edit Contact" : "Add Contact";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setdispatched(true);
  }, [dispatch, match.params.id]);
  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Contact Form</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Settings</div>
        </div>
      </div>
      <div className='section-body'>
        <h2 className='section-title'>{Title}</h2>
        <p className='section-lead'>
          Form validation using default from Bootstrap 4
        </p>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              {initLoading && <Spinner />}
              {dispatched && !initLoading && (
                <ContactForm
                  onSubmit={doSubmit}
                  isEditing={isEditing}
                  saveLoading={saveLoading}
                  record={record}
                  onCancel={() => getHistory().push("/contact")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FomContactPage;
