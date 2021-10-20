import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/experience/form/experienceFormSelectors";
import ExperienceForm from "./ExperienceForm";
import actions from "src/modules/experience/form/ExperienceFomrActions";
import { useRouteMatch } from "react-router-dom";
import Spinner from "../../shared/Spinner/Spinner";

function ExperienceFormPage(props) {
  const dispatch = useDispatch();
  const [dispatched, setdispatch] = useState(false);
  const match = useRouteMatch();
  const isEditing = Boolean(match.params.id);
  const record = useSelector(selectors.selectRecord);
  const initLoading = useSelector(selectors.initLoading);
  const title = isEditing ? "Edit Education" : "Add Education";
  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setdispatch(true);
  }, [dispatch, match.params.id]);
  const onSubmit = (id, values) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, values));
    } else {
      dispatch(actions.doCreate(values));
    }
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
        <h2 className='section-title'>{title}</h2>
        <p className='section-lead'>
          Form validation using default from Bootstrap 4
        </p>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              {initLoading && <Spinner />}
              {dispatched && !initLoading && (
                <ExperienceForm
                  onSubmit={onSubmit}
                  record={record}
                  isEditing={isEditing}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceFormPage;
