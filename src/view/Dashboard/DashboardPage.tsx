import React from "react";

function DashboardPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Dashboard</h1>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
          <div className='card card-statistic-1'>
            <div className='card-icon bg-primary'>
              <i className='far fa-user'></i>
            </div>
            <div className='card-wrap'>
              <div className='card-header'>
                <h4>Total Admin</h4>
              </div>
              <div className='card-body'>10</div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
          <div className='card card-statistic-1'>
            <div className='card-icon bg-danger'>
              <i className='far fa-newspaper'></i>
            </div>
            <div className='card-wrap'>
              <div className='card-header'>
                <h4>News</h4>
              </div>
              <div className='card-body'>42</div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
          <div className='card card-statistic-1'>
            <div className='card-icon bg-warning'>
              <i className='far fa-file'></i>
            </div>
            <div className='card-wrap'>
              <div className='card-header'>
                <h4>Reports</h4>
              </div>
              <div className='card-body'>1,201</div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
          <div className='card card-statistic-1'>
            <div className='card-icon bg-success'>
              <i className='fas fa-circle'></i>
            </div>
            <div className='card-wrap'>
              <div className='card-header'>
                <h4>Online Users</h4>
              </div>
              <div className='card-body'>47</div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-md-6 col-12'>
          <div className='card'>
            <div className='card-header'>
              <h4>Recent Activities</h4>
            </div>
            <div className='card-body'>
              <ul className='list-unstyled list-unstyled-border'>
                <li className='media'>
                  <img
                    className='mr-3 rounded-circle'
                    width='50'
                    src='assets/img/avatar/avatar-1.png'
                    alt='avatar'
                  />
                  <div className='media-body'>
                    <div className='float-right text-primary'>Now</div>
                    <div className='media-title'>Farhan A Mujib</div>
                    <span className='text-small text-muted'>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin.
                    </span>
                  </div>
                </li>
                <li className='media'>
                  <img
                    className='mr-3 rounded-circle'
                    width='50'
                    src='assets/img/avatar/avatar-2.png'
                    alt='avatar'
                  />
                  <div className='media-body'>
                    <div className='float-right'>12m</div>
                    <div className='media-title'>Michelle Green</div>
                    <span className='text-small text-muted'>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin.
                    </span>
                  </div>
                </li>
                <li className='media'>
                  <img
                    className='mr-3 rounded-circle'
                    width='50'
                    src='assets/img/avatar/avatar-3.png'
                    alt='avatar'
                  />
                  <div className='media-body'>
                    <div className='float-right'>17m</div>
                    <div className='media-title'>Debra Stewart</div>
                    <span className='text-small text-muted'>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin.
                    </span>
                  </div>
                </li>
                <li className='media'>
                  <img
                    className='mr-3 rounded-circle'
                    width='50'
                    src='assets/img/avatar/avatar-4.png'
                    alt='avatar'
                  />
                  <div className='media-body'>
                    <div className='float-right'>21m</div>
                    <div className='media-title'>Alfa Zulkarnain</div>
                    <span className='text-small text-muted'>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin.
                    </span>
                  </div>
                </li>
              </ul>
              <div className='text-center pt-1 pb-1'>
                <a href='#' className='btn btn-primary btn-lg btn-round'>
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
