import React, { useState, useRef, useEffect } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
const schema = yup.object().shape({
  firstName: yupFormSchemas.string("firstName", { required: true }),
  lastName: yupFormSchemas.string("lastName", { required: true }),
  email: yupFormSchemas.string("email", { required: true }),
});
function ExperienceForm(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const detaill = useRef<any>();
  const [show, setshow] = useState(false);

  const onOpen = () => {
    setshow(true);
  };
  const onClose = () => {
    setshow(false);
  };
  const currentUser = useSelector(selectors.currentUser);
  const [intialData] = useState(() => {
    const record = currentUser || {};

    return {
      role: record.role,
      firstName: record.firstName,
      lastName: record.lastName,
      email: record.email,
      phone: record.phoneNumber,
      linkedin: record.linkedin,
      github: record.github,
      site: record.site,
      object: record.object,
    };
  });
  const onSumbit = (values) => {
    props.onSubmit(values);
  };
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: intialData,
  });
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSumbit)}>
        <div className='card-body'>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Section title"}
              name={"title"}
              placeholder={"Section title"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Photo"}
              name={"photo"}
              placeholder={"Photo"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"First Name"}
              name={"firstName"}
              placeholder={"Name"}
            />

            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"last Name"}
              name={"lastName"}
              placeholder={"last_name"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Email"}
              name={"email"}
              placeholder={"Email"}
            />

            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Phone"}
              name={"phone"}
              placeholder={"Phone"}
            />
          </div>
          {show && (
            <>
              <div className='row'>
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Country"}
                  name={"country"}
                  placeholder={"Country"}
                />
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"City"}
                  name={"city"}
                  placeholder={"City"}
                />
              </div>

              <div className='row'>
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Address"}
                  name={"address"}
                  placeholder={"Address"}
                />
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Postale Code"}
                  name={"code"}
                  placeholder={"Postale Code"}
                />
              </div>
              <div className='row'>
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Driving License"}
                  name={"driving"}
                  placeholder={"Driving License"}
                />
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Nationalite"}
                  name={"nationalite"}
                  placeholder={"Nationalite"}
                />
              </div>
              <div className='row'>
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Place of birth"}
                  name={"place"}
                  placeholder={"Place of birth"}
                />
                <InputFormItem
                  className={"form-group col-md-6 col-12"}
                  label={"Date of birth"}
                  name={"date"}
                  placeholder={"Date of birth"}
                />
              </div>
            </>
          )}

          <div className='accordion'>
            <div
              className='accordion-header collapsed'
              role='button'
              data-toggle='collapse'
              data-target='#panel-body-3'
              aria-expanded='false'>
              {!show && <h4 onClick={onOpen}>Edit additional details</h4>}
              {show && <h4 onClick={onClose}>Hide additional details</h4>}
            </div>
            <div
              className='accordion-body collapse'
              id='panel-body-3'
              data-parent='#accordion'>
              <p className='mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='card-footer text-right'>
          <button className='btn btn-primary'>Save Changes</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ExperienceForm;
