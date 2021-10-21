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
  school: yupFormSchemas.string("school", { required: true }),
  degree: yupFormSchemas.string("degree", { required: true }),
  startEnd: yupFormSchemas.string("startEnd", { required: true }),
});
function EducationForm(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const currentUser = useSelector(selectors.currentUser);
  const [intialData] = useState(() => {
    const record = currentUser || {};

    return {
      school: record.school,
      degree: record.degree,
      startEnd: record.startEnd,
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
              className={"form-group col-md-12 col-12"}
              label={"Title Section"}
              name={"titleSection"}
              placeholder={"Section title"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"School"}
              name={"school"}
              placeholder={"School"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Degree"}
              name={"degree"}
              placeholder={"Degree"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Start & End Date"}
              name={"startEnd"}
              placeholder={"Start && End Date"}
            />

            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Citty"}
              name={"citty"}
              placeholder={"citty"}
            />
          </div>
          <div className='row'>
            <TextAreaItem
              className={"form-group col-md-12 col-12"}
              label={"Descrption"}
              name={"descrption"}
              placeholder={"Descrption"}
            />
          </div>
        </div>
        <div className='card-footer text-right'>
          <button className='btn btn-primary'>Save Changes</button>
          &nbsp;
          <button
            className='btn btn-danger'
            onClick={() => {
              props.onCancel();
            }}>
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default EducationForm;
