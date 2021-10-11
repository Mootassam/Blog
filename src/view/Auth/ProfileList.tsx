import React from "react";
import selectors from "src/modules/auth/authSelectors";
import { useSelector } from "react-redux";
import Spinner from "../shared/Spinner/Spinner";
import ProfileView from "./ProfileView";
function ProfileList() {
  const currentUser = useSelector(selectors.currentUser);
  const loading = useSelector(selectors.LoadingUpdated);
  return (
    <div className='col-12 col-md-12 col-lg-5'>
      <div className='card profile-widget'>
        {loading && <Spinner />}
        {!loading && currentUser && <ProfileView currentUser={currentUser} />}
      </div>
    </div>
  );
}

export default ProfileList;
