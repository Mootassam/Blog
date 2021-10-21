import React, { useEffect } from "react";
import actions from "src/modules/education/list/EducationListActions";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/education/list/EducationListSelectors";
import Spinner from "../../shared/Spinner/Spinner";
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
                    {rows.degrree}at {rows.school}
                  </h4>
                  <p>
                    General settings such as, site title, site description,
                    address and so on. General settings such as, site title,
                    site description, address and so on. General settings such
                    as, site title, site description, address and so on. General
                    settings such as, site title, site description, address and
                    so on.
                  </p>
                  <a href='features-setting-detail.html' className='card-cta'>
                    Change Setting <i className='fas fa-chevron-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default EducationListTable;
