import React from "react";
import Spinner from "../../shared/Spinner/Spinner";
import TextViewItem from "../../shared/view/TextViewItem";

function ContactView(props) {
  const { record, loading } = props;
  if (loading || !record) {
    return <Spinner />;
  }
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-header'>
            <h4>Detaill Contact</h4>
          </div>
          <div className='card-body'>
            <a
              href='#'
              className='btn btn-primary btn-icon icon-left btn-lg btn-block mb-4 d-md-none'
              data-toggle-slide='#ticket-items'>
              <i className='fas fa-list'></i> All Tickets
            </a>
            <div className='tickets'>
              <div className='ticket-content'>
                <div className='ticket-header'>
                  <div className='ticket-detail'>
                    <div className='ticket-title'>
                      <h4>{record.subject}</h4>
                    </div>
                    <div className='ticket-info'>
                      <div className='font-weight-600'>{record.name}</div>
                      <div className='bullet'></div>
                      <div className='text-primary font-weight-600'>
                        2 min ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ticket-description'>
                  <p>{record.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactView;
