import React from "react";
import { Link } from "react-router-dom";
function SingupPage() {
  return (
    <section className='section'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2'>
            <div className='login-brand'>
              <img
                src='https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300'
                alt='logo'
                width='100'
                className='shadow-light rounded-circle'
              />
            </div>
            <div className='card card-primary'>
              <div className='card-header'>
                <h4>Register</h4>
              </div>
              <div className='card-body'>
                <form method='POST'>
                  <div className='row'>
                    <div className='form-group col-6'>
                      <label>First Name</label>
                      <input
                        id='frist_name'
                        type='text'
                        className='form-control'
                        name='frist_name'
                      />
                    </div>
                    <div className='form-group col-6'>
                      <label>Last Name</label>
                      <input
                        id='last_name'
                        type='text'
                        className='form-control'
                        name='last_name'
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      id='email'
                      type='email'
                      className='form-control'
                      name='email'
                    />
                    <div className='invalid-feedback'></div>
                  </div>
                  <div className='row'>
                    <div className='form-group col-6'>
                      <label className='d-block'>Password</label>
                      <input
                        id='password'
                        type='password'
                        className='form-control pwstrength'
                        data-indicator='pwindicator'
                        name='password'
                      />
                      <div id='pwindicator' className='pwindicator'>
                        <div className='bar'></div>
                        <div className='label'></div>
                      </div>
                    </div>
                    <div className='form-group col-6'>
                      <label className='d-block'>Password Confirmation</label>
                      <input
                        id='password2'
                        type='password'
                        className='form-control'
                        name='password-confirm'
                      />
                    </div>
                  </div>
                  <div className='form-divider'>Your Home</div>
                  <div className='row'>
                    <div className='form-group col-6'>
                      <label>Country</label>
                      <select className='form-control selectric'>
                        <option>USA</option>
                        <option>Palestine</option>
                        <option>Syria</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                      </select>
                    </div>
                    <div className='form-group col-6'>
                      <label>Province</label>
                      <select className='form-control selectric'>
                        <option>West Java</option>
                        <option>East Java</option>
                      </select>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='form-group col-6'>
                      <label>City</label>
                      <input type='text' className='form-control' />
                    </div>
                    <div className='form-group col-6'>
                      <label>Postal Code</label>
                      <input type='text' className='form-control' />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='custom-control custom-checkbox'>
                      <input
                        type='checkbox'
                        name='agree'
                        className='custom-control-input'
                        id='agree'
                      />
                      <label className='custom-control-label'>
                        I agree with the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-lg btn-block'>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='mt-5 text-muted text-center'>
              Don't have an account?{" "}
              <Link to='/auth/signin'>
                <a>Login One</a>
              </Link>
            </div>
            <div className='simple-footer'>Copyright &copy; CodiePie 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingupPage;
