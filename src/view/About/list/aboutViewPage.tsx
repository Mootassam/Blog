import React from "react";

function aboutViewPage() {
  return (
    <section className='section'>
      <div className='section-body'>
        <h2 className='section-title'>Hi, Michelle!</h2>
        <p className='section-lead'>
          Change information about yourself on this page.
        </p>

        <div className='row mt-sm-4'>
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
                  Michelle Green{" "}
                  <div className='text-muted d-inline font-weight-normal'>
                    <div className='slash'></div> Web Developer
                  </div>
                </div>
                Michelle Green is a superhero name in <b>USA</b>, especially in
                my family. He is not a fictional character but an original hero
                in my family, a hero for his children and for his wife. So, I
                use the name as a user in this template. Not a tribute, I'm just
                bored with <b>'John Doe'</b>.
              </div>
              <div className='card-footer text-center'>
                <div className='font-weight-bold mb-2'>Follow Michelle On</div>
                <a href='#' className='btn btn-social-icon btn-facebook mr-1'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#' className='btn btn-social-icon btn-twitter mr-1'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#' className='btn btn-social-icon btn-github mr-1'>
                  <i className='fab fa-github'></i>
                </a>
                <a href='#' className='btn btn-social-icon btn-instagram'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-7'>
            <div className='card'>
              <form method='post' className='needs-validation'>
                <div className='card-header'>
                  <h4>Edit Profile</h4>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='form-group col-md-6 col-12'>
                      <label>First Name</label>
                      <input
                        type='text'
                        className='form-control'
                        value='Michelle'
                      />
                      <div className='invalid-feedback'>
                        Please fill in the first name
                      </div>
                    </div>
                    <div className='form-group col-md-6 col-12'>
                      <label>Last Name</label>
                      <input
                        type='text'
                        className='form-control'
                        value='Green'
                      />
                      <div className='invalid-feedback'>
                        Please fill in the last name
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-group col-md-7 col-12'>
                      <label>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        value='Michelle@Green.com'
                      />
                      <div className='invalid-feedback'>
                        Please fill in the email
                      </div>
                    </div>
                    <div className='form-group col-md-5 col-12'>
                      <label>Phone</label>
                      <input type='tel' className='form-control' value='' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-group col-12'>
                      <label>Bio</label>
                      <textarea
                        className='form-control summernote-simple'
                        cols={10}
                        rows={30}
                        placeholder="  Michelle Green is a superhero name in ,
                        especially in my family. He is not a fictional character
                        but an original hero in my family, a hero for his
                        children and for his wife. So, I use the name as a user
                        in this template. Not a tribute, I'm just bored with"
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-group mb-0 col-12'>
                      <div className='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          name='remember'
                          className='custom-control-input'
                          id='newsletter'
                        />
                        <label className='custom-control-label'>
                          Subscribe to newsletter
                        </label>
                        <div className='text-muted form-text'>
                          You will get new information about products, offers
                          and promotions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer text-right'>
                  <button className='btn btn-primary'>Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutViewPage;
