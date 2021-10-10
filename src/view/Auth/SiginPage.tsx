import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputFormItem from "../shared/form/items/InputFormItem";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "../../modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  email: yupFormSchemas.string("email", { required: true }),
  password: yupFormSchemas.string("password", { required: true }),
});
function SiginPage() {
  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });
  const siginWihtPasswordAndEmail = () => {
    alert("im Will be Rich this year");
  };
  return (
    <section className='section'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
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
                <h4>Login</h4>
              </div>
              <div className='card-body'>
                <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(siginWihtPasswordAndEmail)}>
                    <InputFormItem
                      className={"form-group"}
                      label={"Email"}
                      name={"email"}
                      placeholder={"Email"}
                    />
                    <InputFormItem
                      className={"form-group"}
                      label={"Password"}
                      name={"password"}
                      placeholder={"Password"}
                    />

                    {/* <div className='form-group'>
                      <div className='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          name='remember'
                          className='custom-control-input'
                          id='remember-me'
                        />
                        <label className='custom-control-label'>
                          Remember Me
                        </label>
                      </div>
                    </div> */}
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn btn-primary btn-lg btn-block'>
                        Login
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
            <div className='mt-5 text-muted text-center'>
              Don't have an account?{" "}
              <Link to='/auth/signup'>
                <a href='auth-register.html'>Create One</a>
              </Link>
            </div>
            <div className='simple-footer'>Copyright &copy; CodiePie 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiginPage;
