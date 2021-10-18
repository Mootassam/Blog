import React, { useState } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextAreaItem from "src/view/shared/form/items/TextAreaItem";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
const schema = yup.object().shape({
  role: yupFormSchemas.string("role", { required: true }),
  firstName: yupFormSchemas.string("firstName", { required: true }),
  lastName: yupFormSchemas.string("lastName", { required: true }),
  email: yupFormSchemas.string("email", { required: true }),
  object: yupFormSchemas.string("object", { required: true }),
});
function ExperienceForm(props) {
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
              name={"role"}
              placeholder={"Role"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Photo"}
              name={"role"}
              placeholder={"Role"}
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
              name={"site"}
              placeholder={"Driving License"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Nationalite"}
              name={"site"}
              placeholder={"Nationalite"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Place of birth"}
              name={"site"}
              placeholder={"Place of birth"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Date of birth"}
              name={"birth"}
              placeholder={"Date of birth"}
            />
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
