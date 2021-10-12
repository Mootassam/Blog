import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import yupFormSchemas from "../../modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  email: yupFormSchemas.string("email", { required: true }),
  password: yupFormSchemas.string("password", { required: true }),
});
function SingupPage() {
  const onSubmit = () => {};
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {},
  });
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
                <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='row'>
                      <InputFormItem
                        className={"form-group col-6"}
                        label={"Email"}
                        name={"email"}
                        placeholder={"Email"}
                      />
                      <InputFormItem
                        className={"form-group col-6"}
                        label={"Password"}
                        name={"password"}
                        placeholder={"Password"}
                      />
                    </div>

                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn btn-primary btn-lg btn-block'>
                        Register
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
            <div className='mt-5 text-muted text-center'>
              Don't have an account?
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
