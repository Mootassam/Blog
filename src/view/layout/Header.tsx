import React from "react";
import { FcDoNotInhale, FcAssistant, FcSearch } from "react-icons/fc";
import { getHistory } from "../../modules/store";
import actions from "src/modules/auth/authActions";
import { useDispatch } from "react-redux";
function Header() {
  const dispatch = useDispatch();
  const doNavigateToProfile = () => {
    getHistory().push("/profile");
  };
  const doSignout = () => {
    dispatch(actions.doSignout());
  };
  return (
    <nav className='navbar navbar-expand-lg main-navbar'>
      <form className='form-inline mr-auto'></form>
      <ul className='navbar-nav navbar-right'>
        <li className='dropdown dropdown-list-toggle'>
          <a
            href='#'
            data-toggle='dropdown'
            className='nav-link notification-toggle nav-link-lg beep'>
            <FcDoNotInhale size={25} />
          </a>
          <div className='dropdown-menu dropdown-list dropdown-menu-right'>
            <div className='dropdown-header'>
              Notifications
              <div className='float-right'>
                <a href='#'>Mark All As Read</a>
              </div>
            </div>
            <div className='dropdown-list-content dropdown-list-icons'>
              <a href='#' className='dropdown-item dropdown-item-unread'>
                <div className='dropdown-item-icon bg-primary text-white'>
                  <i className='fas fa-code'></i>
                </div>
                <div className='dropdown-item-desc'>
                  Template update is available now!
                  <div className='time text-primary'>2 Min Ago</div>
                </div>
              </a>
              <a href='#' className='dropdown-item'>
                <div className='dropdown-item-icon bg-info text-white'>
                  <i className='far fa-user'></i>
                </div>
                <div className='dropdown-item-desc'>
                  <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                  <div className='time'>10 Hours Ago</div>
                </div>
              </a>
              <a href='#' className='dropdown-item'>
                <div className='dropdown-item-icon bg-success text-white'>
                  <i className='fas fa-check'></i>
                </div>
                <div className='dropdown-item-desc'>
                  <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to
                  <b>Done</b>
                  <div className='time'>12 Hours Ago</div>
                </div>
              </a>
              <a href='#' className='dropdown-item'>
                <div className='dropdown-item-icon bg-danger text-white'>
                  <i className='fas fa-exclamation-triangle'></i>
                </div>
                <div className='dropdown-item-desc'>
                  Low disk space. Let's clean it!
                  <div className='time'>17 Hours Ago</div>
                </div>
              </a>
              <a href='#' className='dropdown-item'>
                <div className='dropdown-item-icon bg-info text-white'>
                  <i className='fas fa-bell'></i>
                </div>
                <div className='dropdown-item-desc'>
                  Welcome to CodiePie template!
                  <div className='time'>Yesterday</div>
                </div>
              </a>
            </div>
            <div className='dropdown-footer text-center'>
              <a href='#'>
                View All <i className='fas fa-chevron-right'></i>
              </a>
            </div>
          </div>
        </li>
        <li className='dropdown'>
          <a
            href='#'
            data-toggle='dropdown'
            className='nav-link dropdown-toggle nav-link-lg nav-link-user'>
            <img
              alt='image'
              src='https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk='
              className='rounded-circle mr-1'
            />
            <div className='d-sm-none d-lg-inline-block'>
              Hi, Michelle Green
            </div>
          </a>
          <div className='dropdown-menu dropdown-menu-right'>
            <div className='dropdown-title'>Logged in 5 min ago</div>
            <button
              onClick={doNavigateToProfile}
              className='dropdown-item has-icon'>
              Profile
            </button>

            <a
              href='features-activities.html'
              className='dropdown-item has-icon'>
              Activities
            </a>
            <a href='features-settings.html' className='dropdown-item has-icon'>
              Settings
            </a>
            <div className='dropdown-divider'></div>
            <button
              className='dropdown-item has-icon text-danger'
              onClick={doSignout}>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
