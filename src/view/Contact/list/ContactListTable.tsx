import React from "react";
import selectors from "src/modules/contact/list/contactListSelectors";
import { useDispatch, useSelector } from "react-redux";
function ContactListTable(props) {
  const rows = useSelector(selectors.selectRows);
  return (
    <div className='card-body p-0'>
      <div className='table-responsive'>
        <table className='table table-striped v_center'>
          <tr>
            <th>
              <div className='custom-checkbox custom-control'>
                <input
                  type='checkbox'
                  data-checkboxes='mygroup'
                  data-checkbox-role='dad'
                  className='custom-control-input'
                  id='checkbox-all'
                />
                <label className='custom-control-label'>&nbsp;</label>
              </div>
            </th>
            <th>Task Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
          <tr>
            <td className='p-0 text-center'>
              <div className='custom-checkbox custom-control'>
                <input
                  type='checkbox'
                  data-checkboxes='mygroup'
                  className='custom-control-input'
                  id='checkbox-1'
                />
                <label className='custom-control-label'>&nbsp;</label>
              </div>
            </td>
            <td>Create a mobile app</td>
            <td className='align-middle'>Name</td>
            <td>Some Email here</td>
            <td>2018-01-20</td>
            <td>
              <div className='badge badge-success'>Completed</div>
            </td>
            <td>
              <a href='#' className='btn btn-secondary'>
                Detail
              </a>
              &nbsp;
              <a href='#' className='btn btn-danger'>
                Delete
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ContactListTable;
