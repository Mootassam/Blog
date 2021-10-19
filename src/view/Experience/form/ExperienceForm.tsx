import React, { useState, useRef, useEffect } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
import TextAreaItem from "../../shared/form/items/TextAreaItem";
const schema = yup.object().shape({
  jobTitle: yupFormSchemas.string("firstName", { required: true }),
  employer: yupFormSchemas.string("lastName", { required: true }),
  startEnd: yupFormSchemas.string("email", { required: true }),
});
function ExperienceForm(props) {
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
    console.log(values);

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
              className={"form-group col-md-12 col-12"}
              label={"titleSection"}
              name={"titleSection"}
              placeholder={"Phone"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"jobTitle"}
              name={"jobTitle"}
              placeholder={"jobTitle"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"employer"}
              name={"employer"}
              placeholder={"employer"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Date Start && date End"}
              name={"startEnd"}
              placeholder={"startEnd"}
            />

            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"city"}
              name={"city"}
              placeholder={"city"}
            />
          </div>
          <div className='row'>
            <TextAreaItem
              className={"form-group col-md-12 col-12"}
              label={"description"}
              name={"description"}
              placeholder={"description"}
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
