import React from "react";
import AboutFormPage from "./ProfileFormPage";
import ProfileList from "./ProfileList";

function ProfileViewPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Profile</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Profile</div>
        </div>
      </div>
      <div className='section-body'>
        <h2 className='section-title'>Upadate your profile</h2>
        <p className='section-lead'>
          Change information about yourself on this page.
        </p>

        <div className='row mt-sm-4'>
          <ProfileList />
          <AboutFormPage />
        </div>
      </div>
    </section>
  );
}

export default ProfileViewPage;
