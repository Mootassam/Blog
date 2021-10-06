import React from "react";

function ProfileList() {
  return (
    <div className='col-12 col-md-12 col-lg-5'>
      <div className='card profile-widget'>
        <div className='profile-widget-header'>
          <img
            alt='image'
            src='https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk='
            width={250}
            className='rounded-circle profile-widget-picture'
          />
        </div>
        <div className='profile-widget-description'>
          <div className='profile-widget-name'>
            Michelle Green
            <div className='text-muted d-inline font-weight-normal'>
              <div className='slash'></div> Web Developer
            </div>
          </div>
          Michelle Green is a superhero name in <b>USA</b>, especially in my
          family. He is not a fictional character but an original hero in my
          family, a hero for his children and for his wife. So, I use the name
          as a user in this template. Not a tribute, I'm just bored with{" "}
          <b>'John Doe'</b>.
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
