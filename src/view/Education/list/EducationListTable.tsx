import React, { useEffect } from "react";
import actions from "src/modules/education/list/EducationListActions";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/education/list/EducationListSelectors";
import Spinner from "src/view/shared/Spinner/Spinner";
import { Link } from "react-router-dom";
function EducationListTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
  }, [dispatch]);
  const rows = useSelector(selectors.selectRows);
  const listLoading = useSelector(selectors.listLoading);
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
                  <h4>
                    {rows.degrree}at {rows.school} in {rows.startEnd}
                  </h4>
                  <h5>{rows.citty}</h5>
                  <p>{rows.descrption}</p>
                  <Link to={`/education/${rows.id}/edit`}>
                    <a className='card-cta'>Edit Education</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default EducationListTable;
