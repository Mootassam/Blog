import React from "react";
import selectors from "src/modules/auth/authSelectors";
import { useSelector } from "react-redux";
import Spinner from "../shared/Spinner/Spinner";
function ProfileList() {
  const currentUser = useSelector(selectors.currentUser);
  const loading = useSelector(selectors.LoadingUpdated);
  return (
    <div className='col-12 col-md-12 col-lg-5'>
      <div className='card profile-widget'>
        {loading && <Spinner />}
        {!loading && (
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
        )}
      </div>
    </div>
  );
}

export default ProfileList;
