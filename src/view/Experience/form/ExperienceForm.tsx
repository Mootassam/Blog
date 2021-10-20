import React, { useState, useRef, useEffect } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/experience/form/experienceFormSelectors";
import TextAreaItem from "../../shared/form/items/TextAreaItem";
const schema = yup.object().shape({
  jobTitle: yupFormSchemas.string("jobTitle", { required: true }),
  employer: yupFormSchemas.string("employer", { required: true }),
  startEnd: yupFormSchemas.string("startEnd", { required: true }),
});
function ExperienceForm(props) {
  const record = useSelector(selectors.selectRecord);
  const [intialData] = useState(() => {
    const record = props.record || {};

    return {
      titleSection: record.titleSection,
      jobTitle: record.jobTitle,
      employer: record.employer,
      startEnd: record.startEnd,
      city: record.city,
      description: record.description,
    };
  });
  const onSumbit = (values) => {
    props.onSubmit(props.record?.id, values);
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
              placeholder={"Section Title"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"job Title"}
              name={"jobTitle"}
              placeholder={"job Title"}
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
              label={"date Start && date End"}
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
