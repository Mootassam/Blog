import React from "react";
import ProfileForm from "./ProfileForm";
import actions from "src/modules/auth/authActions";
import { useSelector, useDispatch } from "react-redux";

function AboutFormPage() {
  console.log("====================================");
  console.log("im the best in the world");
  console.log("====================================");
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(actions.updateProfile(data));
  };
  return (
    <div className='col-12 col-md-12 col-lg-7'>
      <div className='card'>
        <ProfileForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default AboutFormPage;
