import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/experience/list/ExperienceListActions";
import selectors from "src/modules/experience/list/ExperienceListSelectors";
import Spinner from "../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";
function ExperienceListTable() {
  const dispatch = useDispatch();
  const listLoading = useSelector(selectors.ListLoading);
  useEffect(() => {
    dispatch(actions.DoFetch());
  }, [dispatch]);
  const rows = useSelector(selectors.rows);

  return (
    <>
      {listLoading && <Spinner />}
      {!listLoading &&
        rows.map((rows) => (
          <div className='row'>
            <div className='col-lg-12'>
              <div className='card card-large-icons'>
                <div className='card-icon bg-primary text-white'>
                  <i className='fas fa-cog'></i>
                </div>
                <div className='card-body'>
                  <h4>{rows.jobTitle}</h4>_ <h5>{rows.employer}</h5>
                  <p>{rows.startEnd}</p>
                  <p>{rows.description}</p>
                  <a href='features-setting-detail.html' className='card-cta'>
                    <Link to={`experience/${rows.id}/edit`}>
                      Edit Experience
                    </Link>
                    <i className='fas fa-chevron-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ExperienceListTable;
