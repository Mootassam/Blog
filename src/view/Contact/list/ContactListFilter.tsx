import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import selectors from "src/modules/contact/list/ContactListSelectors";

import { useSelector, useDispatch } from "react-redux";
const emptyValues = {
  name: null,
  email: null,
  subject: null,
  message: null,
};
function ContactListFilter() {
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
