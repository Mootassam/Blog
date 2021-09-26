/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import selectors from "src/modules/contact/list/ContactListSelectors";
import actions from "src/modules/contact/list/ContactListActions";
import { useSelector, useDispatch } from "react-redux";
const emptyValues = {
  name: null,
  email: null,
  subject: null,
  message: null,
};
function ContactListFilter() {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  useEffect(() => {
    dispatch(actions.doFetch(initialValues, rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className='card-header'>
      <h4>Advanced Table</h4>
      <div className='card-header-form'>
        <form>
          <div className='input-group'>
            <input type='text' className='form-control' placeholder='Search' />
            <div className='input-group-btn'>
              <button className='btn btn-primary'>
                <FcSearch size={8} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactListFilter;
