import React from "react";

function aboutViewPage() {
  return (
    <section className='section'>
      <div className='section-body'>
        <h2 className='section-title'>Users</h2>
        <p className='section-lead'>
          Components relating to users, lists of users and so on.
        </p>

        <div className='row'>
          <div className='col-12 col-sm-12 col-lg-12'>
            <div className='card author-box card-primary'>
              <div className='card-body'>
                <div className='author-box-left'>
                  <img
                    alt='image'
                    src='assets/img/avatar/avatar-1.png'
                    className='rounded-circle author-box-picture'
                  />
                  <div className='clearfix'></div>
                  <a
                    href='#'
                    className='btn btn-primary mt-3 follow-btn'
                    data-follow-action="alert('follow clicked');"
                    data-unfollow-action="alert('unfollow clicked');">
                    Follow
                  </a>
                </div>
                <div className='author-box-details'>
                  <div className='author-box-name'>
                    <a href='#'>Susie Willis</a>
                  </div>
                  <div className='author-box-job'>Web Developer</div>
                  <div className='author-box-description'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className='mb-2 mt-3'>
                    <div className='text-small font-weight-bold'>
                      Follow Hasan On
                    </div>
                  </div>
                  <a href='#' className='btn btn-social-icon mr-1 btn-facebook'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#' className='btn btn-social-icon mr-1 btn-twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#' className='btn btn-social-icon mr-1 btn-github'>
                    <i className='fab fa-github'></i>
                  </a>
                  <a
                    href='#'
                    className='btn btn-social-icon mr-1 btn-instagram'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <div className='w-100 d-sm-none'></div>
                  <div className='float-right mt-sm-0 mt-3'>
                    <a href='#' className='btn'>
                      View Posts <i className='fas fa-chevron-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutViewPage;
