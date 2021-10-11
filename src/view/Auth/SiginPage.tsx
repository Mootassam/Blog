import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputFormItem from "../shared/form/items/InputFormItem";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "../../modules/shared/yup/yupFormSchemas";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
const schema = yup.object().shape({
  email: yupFormSchemas.string("email", { required: true }),
  password: yupFormSchemas.string("password", { required: true }),
});
function SiginPage() {
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  const dispatch = useDispatch();
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
  const siginWihtPasswordAndEmail = ({ email, password, rememberMe }) => {
    dispatch(actions.doSiginWithEmailAndPassword(email, password, rememberMe));
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
                      externalErrorMessage={externalErrorMessage}
                    />
                    <InputFormItem
                      className={"form-group"}
                      label={"Password"}
                      name={"password"}
                      type='password'
                      placeholder={"Password"}
                    />

                    <div className='form-check'>
                      <input
                        className='form-control'
                        type='checkbox'
                        id={"rememberMe"}
                        name={"rememberMe"}
                        ref={form.register}
                      />
                      Remember Me
                    </div>
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
