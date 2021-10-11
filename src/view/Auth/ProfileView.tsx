import React from "react";
import PropTypes from "prop-types";

function ProfileView(props) {
  const { currentUser } = props;
  return (
    <div className='card-body'>
      <ul className='list-unstyled'>
        <li className='media'>
          <img
            className='mr-3'
            width={80}
            src='https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk='
            alt='Generic placeholder image'
          />
          <div className='media-body'>
            <h5 className='mt-0 mb-1'>
              {currentUser.firstName}_{currentUser.lastName}
            </h5>
            <p>{currentUser.object}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

ProfileView.propTypes = {
  currentUser: PropTypes.any,
};

export default ProfileView;
