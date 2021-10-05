import React, { useEffect } from "react";
import ContactView from "src/view/Contact/view/ContactView";
import ContactViewToolbar from "src/view/Contact/view/ContactViewToolbar";

import selectors from "src/modules/contact/view/ContactViewSelectors";
import actions from "src/modules/contact/view/ContactViewActions";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
function ContactViewPage({ props }) {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const loading = selectors.viewLoading;
  const data = selectors.SelectData;
  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Tickets</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Tickets</div>
        </div>
      </div>

      <div className='section-body'>
        <ContactViewToolbar />
        <ContactView />
      </div>
    </section>
  );
}

export default ContactViewPage;
