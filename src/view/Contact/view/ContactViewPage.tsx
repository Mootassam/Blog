import React, { useEffect } from "react";
import ContactView from "src/view/Contact/view/ContactView";
import ContactViewToolbar from "src/view/Contact/view/ContactViewToolbar";

import selectors from "src/modules/contact/view/ContactViewSelectors";
import actions from "src/modules/contact/view/ContactViewActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
function ContactViewPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const loading = useSelector(selectors.viewLoading);
  const record = useSelector(selectors.SelectData);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Experience</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Edit</div>
        </div>
      </div>
      <div className='section-body'>
        <ContactViewToolbar match={match} />

        <ContactView loading={loading} record={record} />
      </div>
    </section>
  );
}

export default ContactViewPage;
