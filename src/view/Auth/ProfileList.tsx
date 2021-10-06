import React from "react";

function ProfileList() {
  return (
    <div className='col-12 col-md-12 col-lg-5'>
      <div className='card profile-widget'>
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
                <h5 className='mt-0 mb-1'>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus oringilla. Donec
                  lacinia congue felis in faucibus.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
