import React from "react";

function Menue() {
  return (
    <div className='main-sidebar sidebar-style-2'>
      <aside id='sidebar-wrapper'>
        <div className='sidebar-brand'>
          <a href='index-2.html'>CodiePie</a>
        </div>
        <div className='sidebar-brand sidebar-brand-sm'>
          <a href='index-2.html'>CP</a>
        </div>
        <ul className='sidebar-menu'>
          <li className='menu-header'>Pages</li>
          <li className='dropdown'>
            <a href='#' className='nav-link has-dropdown'>
              <i className='far fa-user'></i> <span>Auth</span>
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a href='auth-forgot-password.html'>Forgot Password</a>
              </li>
              <li>
                <a href='auth-login.html'>Login</a>
              </li>
              <li>
                <a href='auth-register.html'>Register</a>
              </li>
              <li>
                <a href='auth-reset-password.html'>Reset Password</a>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <a href='#' className='nav-link has-dropdown'>
              <i className='fas fa-exclamation'></i> <span>Errors</span>
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a className='nav-link' href='errors-503.html'>
                  503
                </a>
              </li>
              <li>
                <a className='nav-link' href='errors-403.html'>
                  403
                </a>
              </li>
              <li>
                <a className='nav-link' href='errors-404.html'>
                  404
                </a>
              </li>
              <li>
                <a className='nav-link' href='errors-500.html'>
                  500
                </a>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <a href='#' className='nav-link has-dropdown'>
              <i className='fas fa-bicycle'></i> <span>Features</span>
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a className='nav-link' href='features-activities.html'>
                  Activities
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-post-create.html'>
                  Post Create
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-posts.html'>
                  Posts
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-profile.html'>
                  Profile
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-settings.html'>
                  Settings
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-setting-detail.html'>
                  Setting Detail
                </a>
              </li>
              <li>
                <a className='nav-link' href='features-tickets.html'>
                  Tickets
                </a>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <a href='#' className='nav-link has-dropdown'>
              <i className='fas fa-ellipsis-h'></i> <span>Utilities</span>
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a href='utilities-contact.html'>Contact</a>
              </li>
              <li>
                <a className='nav-link' href='utilities-invoice.html'>
                  Invoice
                </a>
              </li>
              <li>
                <a href='utilities-subscribe.html'>Subscribe</a>
              </li>
            </ul>
          </li>
          <li>
            <a className='nav-link' href='credits.html'>
              <i className='fas fa-pencil-ruler'></i> <span>Credits</span>
            </a>
          </li>
        </ul>
        <div className='mt-4 mb-4 p-3 hide-sidebar-mini'>
          <a
            href='https://getcodiepie.com/docs'
            className='btn btn-primary btn-lg btn-block btn-icon-split'>
            <i className='fas fa-rocket'></i> Documentation
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Menue;
